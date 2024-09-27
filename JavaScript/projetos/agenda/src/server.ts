import 'reflect-metadata'
import express from 'express'
import { AppDataSource } from './database/data-source'
import router from './routes'

const app = express()
app.use(express.json());

AppDataSource.initialize().then(async () => {
    console.log("Banco de dados conectado");

    app.use(router);

    app.listen(3333, () => { console.log("Servidor rodando na porta http://localhost:3333") })
}).catch((err) => {
    console.error("Error during Data Source initialization:", err);
});

