// Função Construtora para Usuário
function Usuario(nome) {
    this.nome = nome; // Propriedade de instância
}

// Adicionando método ao protótipo
Usuario.prototype.tocar = function() {
    console.log(`O usuário ${this.nome} está tocando sua música.`);
};

// Instanciando novo usuário
const kedar = new Usuario("Kedar");
kedar.tocar(); // Output: O usuário Kedar está tocando sua música.

// Verificando protótipo
console.log(Usuario.prototype); // Output: Objeto com o método tocar
console.log(kedar.__proto__);
console.log(kedar.__proto__ === Usuario.prototype); // Output: true
