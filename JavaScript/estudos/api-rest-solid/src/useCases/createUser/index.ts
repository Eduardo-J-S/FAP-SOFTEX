import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailtrapMailProvider = new MailtrapMailProvider();
const postgresUsersRepository = new PostgresUsersRepository();

const createUserUserCase = new CreateUserUseCase(
    postgresUsersRepository,
    mailtrapMailProvider,
)

const createUserController = new CreateUserController(
    createUserUserCase
)

export { createUserUserCase, createUserController }