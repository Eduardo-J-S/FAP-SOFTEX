import { Computador } from "../computador/Computador"; 
import { PC } from "../computador/PC"; 
import { ComputadorFactory } from "./ComputadorFactory";

export class PCFactory implements ComputadorFactory {
    public createComputador(ram: string, hdd: string, cpu: string): Computador {
        return new PC(ram, hdd, cpu);
    }
}