function criarContador() {
    let contador = 0;
  
    return {
      incrementar: function() {
        contador++;
      },
      mostrar: function() {
        console.log(contador);
      }
  };
  }
  
  let contador = criarContador();
  contador.incrementar();
  contador.mostrar(); // 1
  console.log(contador.contador)