import { Router } from "express";
import { createUsuarioSchema, deleteUsuarioSchema, getUsuarioSchema, updateUsuarioSchema } from "./schema";
import { ZodError } from "zod";
import { db } from "./database";

const router = Router()

router.get("/", async (req, res) => {
    const usuarios = await db.query("SELECT * FROM usuario");
    res.json(usuarios.rows);
})

router.get("/:id", async (req, res) => {
    try {
        const params = req.params;
        const { id } = getUsuarioSchema.parse(params);
        const usuario = await db.query("SELECT * FROM usuario WHERE id = $1", [id]).then((res) => res.rows[0])
        if (usuario) {
            return res.json(usuario);
        }
        return res.status(404).json({ message: "Usuário não encontrado" });
    } catch (error) {
        if (error instanceof ZodError) {
            const messages = error.errors.map((e) => e.message);
            return res.status(400).json({ message: messages });
        }
    }
})

router.post("/", async (req, res) => {
    try {
        const body = req.body;
        const { email, nome } = createUsuarioSchema.parse(body);
        const createUsuario = await db.query("INSERT INTO usuario (nome, email) VALUES ($1, $2) RETURNING *", [nome, email]).then((res) => res.rows[0]);

        if (createUsuario) {
            return res.json(createUsuario);
        }
        return res.status(400).json({ message: "Não foi possível cadastrar o usuário" });
    } catch (error) {
        if (error instanceof ZodError) {
            const messages = error.errors.map((e) => e.message);
            return res.status(400).json({ message: messages });
        }
    }
})

router.put("/:id", async (req, res) => {
    try {
        const body = req.body;
        const { id } = req.params;
        const payload = updateUsuarioSchema.parse({ id, ...body });

        const usuario = await db.query("SELECT * FROM usuario WHERE id = $1", [id]).then((res) => res.rows[0]);

        if (!usuario) {
            return res.status(404).json({ message: "Usuário não encontrado" });
        }

        const columnsToUpdate = Object.keys(payload).map((key, index) => `${key} = $${index + 2}`);
        const usuarioAtualizado = await db.query(`UPDATE usuario SET ${columnsToUpdate} WHERE id = $1 RETURNING *`, [id, ...Object.values(payload)]).then((res) => res.rows[0]);

        return res.json(usuarioAtualizado);
    } catch (error) {
        if (error instanceof ZodError) {
            const messages = error.errors.map((e) => e.message);
            return res.status(400).json({ message: messages });
        }
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const params = req.params;
        const { id } = deleteUsuarioSchema.parse(params);
        const usuario = await db.query("SELECT * FROM usuario WHERE id = $1", [id]).then((res) => res.rows[0]);

        if (!usuario) {
            return res.status(404).json({ message: "Usuário não encontrado" });
        }
        await db.query("DELETE FROM usuario WHERE id = $1", [id]);

        return res.json({ message: "Usuário deletado com sucesso" });
    } catch (error) {
        if (error instanceof ZodError) {
            const messages = error.errors.map((e) => e.message);
            return res.status(400).json({ message: messages });
        }
    }
})

export { router }
