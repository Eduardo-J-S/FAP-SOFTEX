import { Computador } from "../Computador";

export abstract class ComputadorFactory {
    public abstract createComputador(ram: string, hdd: string, cpu: string, type: string): Computador;
}