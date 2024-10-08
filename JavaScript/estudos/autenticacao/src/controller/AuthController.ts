import { Request, Response } from "express";
import { prisma } from "../utils/prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export class AuthController {

    async authenticate(req: Request, res: Response) {
        const { email, password } = req.body;
        const user = await prisma.user.findUnique({ where: { email } })
        if (!user) {
            return res.json({ error: "User not found!" })
        }
        const isValuePassword = await compare(password, user.password);

        if (!isValuePassword) {
            return res.json({ error: "password invalid" })
        }

        const token = sign({ id: user.id }, process.env.JWT_SECRET as string, { expiresIn: "1d" });

        const { id } = user

        res.json({ user: { id, email }, token })
    }
}