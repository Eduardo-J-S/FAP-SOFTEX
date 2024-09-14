import { prismaClient } from "../../../database/prismaClient";
import { kafkaConsumer } from "../kafka.consumer";

type CustomerConsumer = {
    email: string,
    id: string,
}

export async function createCustomerConsumer() {
    const consumer = await kafkaConsumer("CUSTOMER_CREATED", "PRODUCT_APP_GROUP");
    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            const messageToString = message.value!.toString();
            const customer = JSON.parse(messageToString) as CustomerConsumer;

            await prismaClient.customer.create({
                data: {
                    externalId: customer.id,
                    email: customer.email,
                },
            })

             // Commita o offset manualmente após o processamento da mensagem
            await consumer.commitOffsets([
                { topic, partition, offset: (Number(message.offset) + 1).toString() },
              ]);
        }
    })
}

createCustomerConsumer();