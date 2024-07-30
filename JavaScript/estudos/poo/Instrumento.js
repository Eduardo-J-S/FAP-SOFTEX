// Classe base para instrumentos
class Instrumento {
    tocarMelodia() {
      console.log("Tocando uma melodia...");
    }
  }
  
  // Subclasse específica para o violino
  class Violino extends Instrumento {
    tocarMelodia() {
      console.log("O violino toca uma melodia suave.");
    }
  }
  
  // Subclasse específica para a flauta
  class Flauta extends Instrumento {
    tocarMelodia() {
      console.log("A flauta toca uma melodia leve e fluida.");
    }
  }
  
  // Função que aceita qualquer instrumento e toca a melodia
  function apresentarInstrumento(instrumento) {
    instrumento.tocarMelodia();
  }
  
  // Criando instâncias de diferentes instrumentos
  const violino = new Violino();
  const flauta = new Flauta();
  
  // Usando a função para apresentar cada instrumento
  apresentarInstrumento(violino); // Saída: O violino toca uma melodia suave.
  apresentarInstrumento(flauta);  // Saída: A flauta toca uma melodia leve e fluida..
  