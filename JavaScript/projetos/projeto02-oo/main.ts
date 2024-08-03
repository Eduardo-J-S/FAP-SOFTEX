import { Editor } from './Editor';
import { Artigo } from './Artigo';


const editor1 = new Editor(1, 'Alice');
const editor2 = new Editor(2, 'Bob');

const article1 = new Artigo(1, 'TypeScript Basics', ["Autor 1"]);
const article2 = new Artigo(2, 'Advanced TypeScript', ["Autor 2"]);

editor1.adicionarArtigo(article1);
editor1.adicionarArtigo(article2);

editor2.adicionarArtigo(article1);

console.log(`${editor1.nome} revisou os seguintes artigos:`);
editor1.artigos.forEach(article => console.log(article.titulo));

console.log(`${article1.titulo} foi revisado por: ${article1.editor?.nome}`);
console.log(`${article2.titulo} foi revisado por: ${article2.editor?.nome}`);