import mysql from "mysql2";
import dbConfig from "../config/db.config";

const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
});

connection.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao MySQL: ", err);
    return;
  }
  console.log("Conexão estabelecida com sucesso!");
});

export default connection;
