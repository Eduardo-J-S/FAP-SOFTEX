import { Computador } from "../computador/Computador";
import { ComputadorInvalidoError } from "../exceptions/ComputadorInvalidoError";
import { ComputadorFactory } from "./ComputadorFactory";

export class ConcreteComputadorFactory {
    private static factoryRegistry: { [key: string]: ComputadorFactory } = {};

    public static registerFactory(type: string, factory: ComputadorFactory): void {
        this.factoryRegistry[type] = factory;
    }

    public static createComputador(ram: string, hdd: string, cpu: string, type: string): Computador {
        const factory = this.factoryRegistry[type];
        if (!factory) {
            throw new ComputadorInvalidoError("Tipo de computador inválido");
        }
        return factory.createComputador(ram, hdd, cpu);
    }
}