import 'reflect-metadata'

import { DataSource } from 'typeorm'
import { Cliente } from '../app/models/Cliente'


export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "agenda",
    synchronize: true,
    logging: false,
    entities: [Cliente],
    migrations: [],
    subscribers: [],
})