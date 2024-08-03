import { Artigo } from './Artigo';

export class Editor{
    private _id: number;
    private _nome: string;
    private _artigos: Artigo[] = [];

    public constructor(id: number, nome: string){
        this._id = id;
        this._nome = nome;
    }

    public adicionarArtigo(artigo:Artigo): void {
        if (artigo.editor === null) {
            artigo.editor = this;
            this._artigos.push(artigo);
        } else {
            console.log('O artigo já foi revisado por outro editor.');
        }
    } 

    public visualizarEditor(): string{
        const titulos = this._artigos.map(artigo => artigo.titulo).join(", ");
        return `${this.id} | ${this.nome} | Artigos: ${titulos || "Nenhum artigo"}`;
    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get nome(): string {
        return this._nome;
    }
    public set nome(value: string) {
        this._nome = value;
    }
    
    public get artigos(): Artigo[] {
        return this._artigos;
    }

}