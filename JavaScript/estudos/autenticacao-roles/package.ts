import { config } from 'dotenv';
config(); // Carrega as variáveis do arquivo .env

export default {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5432'),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    migrations: [
        "./src/database/migrations/*.ts"
    ],
    cli: {
        migrationsDir: "./src/database/migrations"
    },
};
