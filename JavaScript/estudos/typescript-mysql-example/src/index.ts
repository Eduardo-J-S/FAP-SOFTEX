import express, { Application } from "express";
import tutorialRoutes from "./routes/tutorial.routes";

const app: Application = express();

app.use(express.json());
app.use("/api/tutorials", tutorialRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}.`);
});
