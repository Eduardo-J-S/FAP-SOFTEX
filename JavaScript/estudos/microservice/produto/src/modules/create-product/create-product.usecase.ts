import { prismaClient } from "../../infra/database/prismaClient";
import { KafkaSendMessage } from "../../infra/providers/kafka/producer";

type CreateProductResquest = {
    name: string;
    code: string;
    quantity: number;
    price: number;
}

export class CreateProductUseCase {
    constructor(){}

    async execute(data: CreateProductResquest){

        const product = await prismaClient.product.findFirst({
            where: {
                code: data.code
            }
        })

        if(product) throw new Error("Product already exists!")

        const productCreated = await prismaClient.product.create({
            data: {
                ...data
            }
        })

        const kafkaMessage = new KafkaSendMessage();
        console.log('Enviando mensagem para Kafka: ', {
            id: productCreated.id,
            code: productCreated.code,
          });
          await kafkaMessage.execute("PRODUCT_CREATED", {
            id: productCreated.id,
            code: productCreated.code,
          });
          console.log('Mensagem enviada para Kafka');
          

        return productCreated;
    }
}