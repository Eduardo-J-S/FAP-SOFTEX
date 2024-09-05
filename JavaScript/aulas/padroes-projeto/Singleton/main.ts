import SistemaSeguranca from "./SistemaSeguranca";

function main() {
    const sistema = SistemaSeguranca.getInstance();

    sistema.acessarBaseSecreta("senhaSecreta");
    sistema.acessarBaseSecreta("senhaErrada");
}

main();