import { Computador } from "./Computador";

export class PC implements Computador{
    private ram: string;
    private hdd: string;
    private cpu: string;
    private type: string;

    public constructor(ram: string, hdd: string, cpu: string){
        this.ram = ram;
        this.hdd = hdd;
        this.cpu = cpu;
        this.type = "PC";
    }

    public toString(): string{
        return `RAM: ${this.ram}, HDD: ${this.hdd}, CPU: ${this.cpu}, TYPE: ${this.type}`;
    }

    getRam(): string {
        return this.ram;
    }
    getHdd(): string {
        return this.hdd;
    }
    getCpu(): string {
        return this.cpu;
    }
    getType(): string {
        return this.type;
    }

}