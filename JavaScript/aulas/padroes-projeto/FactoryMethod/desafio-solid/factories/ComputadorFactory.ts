import { Computador } from "../computador/Computador";

export interface ComputadorFactory {
    createComputador(ram: string, hdd: string, cpu: string): Computador;
}