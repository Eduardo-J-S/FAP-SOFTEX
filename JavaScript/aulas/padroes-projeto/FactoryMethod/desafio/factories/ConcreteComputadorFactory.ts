import { Computador } from "../Computador";
import { ComputadorFactory } from "./ComputadorFactory";
import { PC } from "../PC";
import { Server } from "../Server";

export class ConcreteComputadorFactory extends ComputadorFactory {
    public createComputador(ram: string, hdd: string, cpu: string, type: string): Computador {
        if (type === "PC") {
            return new PC(ram, hdd, cpu);
        } else if (type === "Server") {
            return new Server(ram, hdd, cpu);
        } else {
            throw new Error("Tipo de computador inválido");
        }
    }
}