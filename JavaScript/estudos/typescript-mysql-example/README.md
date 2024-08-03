# Passo 1: Configurar o Ambiente de Desenvolvimento
Instalar Node.js e MySQL

- [Node.js](https://nodejs.org/en)
- [MySQL](https://dev.mysql.com/downloads/)

# Instalar Dependências Necessárias

## Instale as dependências para o projeto:

```PowerShell
npm install express mysql2
npm install typescript ts-node @types/node @types/express --save-dev
```

- express: Framework para construir APIs.
- mysql2: Biblioteca para conectar-se ao MySQL.
- typescript: Compilador TypeScript.
- ts-node: Executar TypeScript diretamente.
- @types/node e @types/express: Tipos para Node.js e Express.

# Configurar o TypeScript

## Crie um arquivo tsconfig.json para configurar o TypeScript:

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

# Estrutura de Diretórios do Projeto

## Crie a estrutura de diretórios e arquivos do projeto:

### Criando Diretórios no PowerShell

No PowerShell, você pode criar múltiplos diretórios usando um loop:

```PowerShell
$folders = @('src/config', 'src/db', 'src/models', 'src/repositories', 'src/controllers', 'src/routes')
foreach ($folder in $folders) {
    New-Item -ItemType Directory -Path $folder
}
```

### Criando Diretórios no CMD
Se preferir usar o CMD, você pode criar múltiplos diretórios em uma única linha de comando assim:
```CMD
mkdir src\config src\db src\models src\repositories src\controllers src\routes
```

### Criando Diretórios no Bash (Linux/WSL)
Se você está usando um ambiente Linux, Unix ou Windows Subsystem for Linux (WSL)
```Linux
mkdir -p src/config src/db src/models src/repositories src/controllers src/routes
```

# Passo 2: Configurar e Conectar ao Banco de Dados MySQL

## Criar a Tabela MySQL

Execute o seguinte script SQL para criar a tabela tutorials:
```sql
CREATE TABLE IF NOT EXISTS `tutorials` (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  description VARCHAR(255),
  published BOOLEAN DEFAULT FALSE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

## Configurar a Conexão com o Banco de Dados
### Crie um arquivo src/config/db.config.ts para armazenar as configurações de conexão:
```typescript
export default {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "123456",
  DB: "testdb",
};
```

### Crie a conexão com o MySQL no arquivo src/db/index.ts:
```typescript
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
```

# Passo 3: Definir o Modelo

## Crie um modelo para os dados que serão manipulados no arquivo src/models/tutorial.model.ts:
```typescript
import { RowDataPacket } from "mysql2";

export default interface Tutorial extends RowDataPacket {
  id?: number;
  title?: string;
  description?: string;
  published?: boolean;
}
```

# Passo 4: Criar o Repositório

## Implemente as operações CRUD no repositório src/repositories/tutorial.repository.ts:
```typescript
import connection from "../db";
import Tutorial from "../models/tutorial.model";
import { ResultSetHeader } from "mysql2";

interface ITutorialRepository {
  save(tutorial: Tutorial): Promise<Tutorial>;
  retrieveAll(searchParams: {
    title?: string;
    published?: boolean;
  }): Promise<Tutorial[]>;
  retrieveById(tutorialId: number): Promise<Tutorial | undefined>;
  update(tutorial: Tutorial): Promise<number>;
  delete(tutorialId: number): Promise<number>;
  deleteAll(): Promise<number>;
}

class TutorialRepository implements ITutorialRepository {
  save(tutorial: Tutorial): Promise<Tutorial> {
    return new Promise((resolve, reject) => {
      connection.query<ResultSetHeader>(
        "INSERT INTO tutorials (title, description, published) VALUES(?,?,?)",
        [
          tutorial.title,
          tutorial.description,
          tutorial.published ? tutorial.published : false,
        ],
        (err, res) => {
          if (err) reject(err);
          else
            this.retrieveById(res.insertId)
              .then((tutorial) => resolve(tutorial!))
              .catch(reject);
        }
      );
    });
  }

  retrieveAll(searchParams: {
    title?: string;
    published?: boolean;
  }): Promise<Tutorial[]> {
    let query: string = "SELECT * FROM tutorials";
    let condition: string = "";

    if (searchParams?.published) condition += "published = TRUE";

    if (searchParams?.title)
      condition += `LOWER(title) LIKE '%${searchParams.title}%'`;

    if (condition.length) query += " WHERE " + condition;

    return new Promise((resolve, reject) => {
      connection.query<Tutorial[]>(query, (err, res) => {
        if (err) reject(err);
        else resolve(res);
      });
    });
  }

  retrieveById(tutorialId: number): Promise<Tutorial | undefined> {
    return new Promise((resolve, reject) => {
      connection.query<Tutorial[]>(
        "SELECT * FROM tutorials WHERE id = ?",
        [tutorialId],
        (err, res) => {
          if (err) reject(err);
          else resolve(res?.[0]);
        }
      );
    });
  }

  update(tutorial: Tutorial): Promise<number> {
    return new Promise((resolve, reject) => {
      connection.query<ResultSetHeader>(
        "UPDATE tutorials SET title = ?, description = ?, published = ? WHERE id = ?",
        [tutorial.title, tutorial.description, tutorial.published, tutorial.id],
        (err, res) => {
          if (err) reject(err);
          else resolve(res.affectedRows);
        }
      );
    });
  }

  delete(tutorialId: number): Promise<number> {
    return new Promise((resolve, reject) => {
      connection.query<ResultSetHeader>(
        "DELETE FROM tutorials WHERE id = ?",
        [tutorialId],
        (err, res) => {
          if (err) reject(err);
          else resolve(res.affectedRows);
        }
      );
    });
  }

  deleteAll(): Promise<number> {
    return new Promise((resolve, reject) => {
      connection.query<ResultSetHeader>(
        "DELETE FROM tutorials",
        (err, res) => {
          if (err) reject(err);
          else resolve(res.affectedRows);
        }
      );
    });
  }
}

export default new TutorialRepository();
```

# Passo 5: Criar o Controlador e as Rotas

## Crie o controlador src/controllers/tutorial.controller.ts para lidar com as operações CRUD:
```typescript
import { Request, Response } from "express";
import TutorialRepository from "../repositories/tutorial.repository";
import Tutorial from "../models/tutorial.model";

class TutorialController {
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const tutorial: Tutorial = req.body;
      const newTutorial = await TutorialRepository.save(tutorial);
      return res.status(201).json(newTutorial);
    } catch (error) {
      return res.status(500).json({ message: "Erro ao criar o tutorial" });
    }
  }

  async findAll(req: Request, res: Response): Promise<Response> {
    try {
      const searchParams = {
        title: req.query.title as string,
        published: req.query.published === "true",
      };
      const tutorials = await TutorialRepository.retrieveAll(searchParams);
      return res.json(tutorials);
    } catch (error) {
      return res.status(500).json({ message: "Erro ao buscar tutoriais" });
    }
  }

  async findOne(req: Request, res: Response): Promise<Response> {
    try {
      const tutorialId = parseInt(req.params.id, 10);
      const tutorial = await TutorialRepository.retrieveById(tutorialId);
      if (tutorial) {
        return res.json(tutorial);
      } else {
        return res.status(404).json({ message: "Tutorial não encontrado" });
      }
    } catch (error) {
      return res.status(500).json({ message: "Erro ao buscar o tutorial" });
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const tutorialId = parseInt(req.params.id, 10);
      const tutorialData: Tutorial = req.body;
      const affectedRows = await TutorialRepository.update({
        ...tutorialData,
        id: tutorialId,
      });
      if (affectedRows > 0) {
        return res.json({ message: "Tutorial atualizado com sucesso" });
      } else {
        return res.status(404).json({ message: "Tutorial não encontrado" });
      }
    } catch (error) {
      return res.status(500).json({ message: "Erro ao atualizar o tutorial" });
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const tutorialId = parseInt(req.params.id, 10);
      const affectedRows = await TutorialRepository.delete(tutorialId);
      if (affectedRows > 0) {
        return res.json({ message: "Tutorial excluído com sucesso" });
      } else {
        return res.status(404).json({ message: "Tutorial não encontrado" });
      }
    } catch (error) {
      return res.status(500).json({ message: "Erro ao excluir o tutorial" });
    }
  }

  async deleteAll(req: Request, res: Response): Promise<Response> {
    try {
      const affectedRows = await TutorialRepository.deleteAll();
      return res.json({
        message: `${affectedRows} tutoriais excluídos com sucesso`,
      });
    } catch (error) {
      return res.status(500).json({ message: "Erro ao excluir tutoriais" });
    }
  }
}

export default new TutorialController();
```

### Defina as rotas para o aplicativo no arquivo src/routes/tutorial.routes.ts:
```typescript
import { Router } from "express";
import TutorialController from "../controllers/tutorial.controller";

const router = Router();

router.post("/", TutorialController.create);
router.get("/", TutorialController.findAll);
router.get("/:id", TutorialController.findOne);
router.put("/:id", TutorialController.update);
router.delete("/:id", TutorialController.delete);
router.delete("/", TutorialController.deleteAll);

export default router;
```

# Passo 6: Inicializar o Servidor

## Finalmente, inicialize o servidor Express no arquivo src/index.ts:
```typescript
import express, { Application } from "express";
import tutorialRoutes from "./routes/tutorial.routes";

const app: Application = express();

app.use(express.json());
app.use("/api/tutorials", tutorialRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}.`);
});
```

# Passo 7: Executar o Projeto

## Compile e execute o projeto com o seguinte comando:
```PowerShell
npx ts-node src/index.ts
```

## Ou, para compilar em JavaScript e executar, use:
```PowerShell
npx tsc
node dist/index.js
```

Agora, o servidor está configurado e as operações CRUD estão funcionando corretamente. Você pode testar as rotas usando o Postman ou outra ferramenta de cliente HTTP.