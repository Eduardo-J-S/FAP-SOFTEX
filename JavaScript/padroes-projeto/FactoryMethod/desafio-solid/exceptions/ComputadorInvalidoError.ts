export class ComputadorInvalidoError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "ComputadorInvalidoError";
    }
}