import { Kafka } from "kafkajs";

const kafka = new Kafka({
    brokers: ['localhost:9092'],  // Aponta para o Kafka rodando no Docker
    ssl: false,  // Não estamos usando SSL
})

export { kafka }
