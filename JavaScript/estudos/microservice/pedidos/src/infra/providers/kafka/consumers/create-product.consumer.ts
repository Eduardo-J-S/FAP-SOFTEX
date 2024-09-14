import { prismaClient } from "../../../database/prismaClient";
import { kafkaConsumer } from "../kafka.consumer";

type ProductConsumer = {
    code: string,
    id: string,
}

export async function createProductConsumer() {
    const consumer = await kafkaConsumer("PRODUCT_CREATED", "ORDER_APP");
    console.log("Consumidor conectado ao tópico PRODUCT_CREATED");
    await consumer.run({
        eachMessage: async ({ message }) => {
            console.log("Mensagem recebida: ", message.value!.toString());
            const messageToString = message.value!.toString();
            const product = JSON.parse(messageToString) as ProductConsumer;

            console.log("Processando produto: ", product);

            await prismaClient.product.create({
                data: {
                    externalId: product.id,
                    code: product.code,
                },
            });
        },
    });
}

createProductConsumer();