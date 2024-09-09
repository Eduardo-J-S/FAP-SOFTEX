import { ConcreteComputadorFactory } from "./factories/ConcreteComputadorFactory";


function main() {
    const computador = new ConcreteComputadorFactory();

    const pc = computador.createComputador("16GB", "1TB", "2.5GHz", "PC")
    const server = computador.createComputador("32GB", "4TB", "3.0GHz", "Server")

    console.log(pc.toString());
    console.log(server.toString());
}

main();