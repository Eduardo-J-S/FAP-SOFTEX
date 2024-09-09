import { ComputadorInvalidoError } from "./exceptions/ComputadorInvalidoError";
import { ConcreteComputadorFactory } from "./factories/ConcreteComputadorFactory";
import { PCFactory } from "./factories/PCFactory";
import { ServerFactory } from "./factories/ServerFactory";


function main() {
    ConcreteComputadorFactory.registerFactory("PC", new PCFactory());
    ConcreteComputadorFactory.registerFactory("Server", new ServerFactory());

    try {
        //throw new Error
        const pc = ConcreteComputadorFactory.createComputador("16GB", "1TB", "2.5GHz", "PC");
        console.log(pc.toString());

        const server = ConcreteComputadorFactory.createComputador("32GB", "4TB", "3.0GHz", "Server");
        console.log(server.toString());

    } catch (error: unknown) {  
        if (error instanceof ComputadorInvalidoError) {
            console.error("Erro ao criar o computador: ", error.message);
        } else {
            console.error("Erro desconhecido:", error);
        }
    }

}

main();