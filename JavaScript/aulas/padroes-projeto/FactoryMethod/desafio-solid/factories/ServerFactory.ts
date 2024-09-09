import { Computador } from "../computador/Computador"; 
import { Server } from "../computador/Server"; 
import { ComputadorFactory } from "./ComputadorFactory";

export class ServerFactory implements ComputadorFactory {
    public createComputador(ram: string, hdd: string, cpu: string): Computador {
        return new Server(ram, hdd, cpu);
    }
}