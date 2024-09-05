export default class SistemaSeguranca {
    private static singleton: SistemaSeguranca;

    private constructor(){}

    public static getInstance(): SistemaSeguranca {
        if (!this.singleton) {
          this.singleton = new SistemaSeguranca();
        }
    
        return this.singleton;
    }

    public acessarBaseSecreta(senha: string): boolean{
        const senhaSecreta = "senhaSecreta";
        if (senha === senhaSecreta) {
            console.log("Acesso concedido")
            return true;
        } else {
            console.log("Acesso negado")
            return false;
        }
    }
}