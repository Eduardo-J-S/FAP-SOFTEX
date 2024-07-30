// Função construtora para criar músicos
function Musico(nome, instrumento) {
  this.nome = nome;
  this.instrumento = instrumento;
}

// Adicionando métodos ao protótipo do Musico
Musico.prototype.tocarMusica = function () {
  console.log(
    `${this.nome} está tocando uma música com o instrumento: ${this.instrumento}`
  );
};

Musico.prototype.partitura = "Sinfonia nº 9 de Beethoven";

Musico.prototype.mostrarPartitura = function () {
  console.log(`${this.nome} está usando a partitura: ${this.partitura}`);
};

// Criando instâncias para diferentes músicos
const violinista = new Musico("Alice", "violino");
const pianista = new Musico("Bob", "piano");

// Usando os métodos
violinista.tocarMusica(); // Saída: Alice está tocando uma música com o instrumento: violino
violinista.mostrarPartitura(); // Saída: Alice está usando a partitura: Sinfonia nº 9 de Beethoven

pianista.tocarMusica(); // Saída: Bob está tocando uma música com o instrumento: piano
pianista.mostrarPartitura(); // Saída: Bob está usando a partitura: Sinfonia nº 9 de Beethoven

// Verificando protótipo
console.log(Musico.prototype); // Saída: Objeto com os métodos tocarMusica, partitura e mostrarPartitura
console.log(violinista.__proto__ === Musico.prototype); // Saída: true

