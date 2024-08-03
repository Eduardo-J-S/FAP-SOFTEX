import { Editor } from './Editor';

export class Artigo {
    private _id: number;
    private _titulo: string;
    private _autores: string[] = [];
    private _editor: Editor | null = null;

    constructor(id: number, titulo: string, autores: string[]){
        this._id = id;
        this._titulo = titulo;
        this._autores = autores;
    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get titulo(): string {
        return this._titulo;
    }
    public set titulo(value: string) {
        this._titulo = value;
    }

    public get autores(): string[] {
        return this._autores;
    }
    public set autores(value: string[]) {
        this._autores = value;
    }

    public get editor(): Editor | null {
        return this._editor;
    }
    public set editor(value: Editor | null) {
        this._editor = value;
    }
}