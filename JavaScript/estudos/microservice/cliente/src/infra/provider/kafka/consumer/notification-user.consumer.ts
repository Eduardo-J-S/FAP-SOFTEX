import { prismaClient } from "../../../database/prismaClient";
import { kafkaConsumer } from "../kafka.consumer";

type CustomerConsumer = {
    customerId: string,
    status: string,
}

export async function createCustomerConsumer() {
    const consumer = await kafkaConsumer("ORDER_STATUS", "CUSTOMER_APP");
    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            const messageToString = message.value!.toString();
            const statusConsumer = JSON.parse(messageToString) as CustomerConsumer;

            // Enviar mensagem por email
            console.log(`ATUALIZAÇÃO DE STATUS - Client: ${statusConsumer.customerId} - Status: ${statusConsumer.status}`)
            // Commita o offset manualmente após o processamento da mensagem
            await consumer.commitOffsets([
                { topic, partition, offset: (Number(message.offset) + 1).toString() },
            ]);
        }
    })
}

createCustomerConsumer();