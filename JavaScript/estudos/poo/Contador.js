class Contador {
    // Campo privado
    #contador = 0;

    incrementar() {
        this.#contador++;
        console.log(this.#contador);
    }

    decrementar() {
        this.#contador--;
        console.log(this.#contador);
    }

    valorAtual() {
        console.log(`O valor atual do contador é: ${this.#contador}`);
        return this.#contador;
    }
}

const contador2 = new Contador();
contador2.incrementar(); // Output: 1
contador2.incrementar(); // Output: 2
contador2.decrementar(); // Output: 1
contador2.valorAtual();  // Output: O valor atual do contador é: 1

// Tentativa de acesso direto resulta em erro
console.log(contador2.contador); // SyntaxError: Private field '#contador' must be declared in an enclosing class
