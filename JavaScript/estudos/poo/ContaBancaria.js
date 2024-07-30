function ContaBancaria(saldoInicial) {
    let saldo = saldoInicial;
  
    this.depositar = function(valor) {
      if (valor > 0) {
        saldo += valor;
      }
    };
  
    this.verSaldo = function() {
      return saldo;
    };
  }
  
  let minhaConta = new ContaBancaria(100);
  minhaConta.depositar(50);
  console.log(minhaConta.saldo);
  console.log(minhaConta.verSaldo()); // 150