import { Request, Response } from "express";
import { CreateClientUseCase } from "./create-client.usecase";

export class CreateCustomerController {
    constructor(){}

    async handle(request: Request, resonse: Response) {
        const useCase = new CreateClientUseCase();
        try {
            const result = await useCase.execute(request.body);
            return resonse.json(result)
        } catch (error) {
            return resonse.status(400).json(error)
        }

    }
}