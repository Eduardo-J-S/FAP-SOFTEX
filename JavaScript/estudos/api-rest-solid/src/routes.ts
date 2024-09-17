import { Router } from "express";
import { createUserController } from "./useCases/createUser";

const router = Router();

router.post('/users', (request, reponse) => {
    return createUserController.handle(request, reponse);
})

export { router }