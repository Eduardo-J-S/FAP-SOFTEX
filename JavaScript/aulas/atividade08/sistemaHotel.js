//Sistema de Hotel

const sistemaHotel = (tipo, qntDiaria) => {
    let tipoUpper = tipo.toUpperCase();
    let tiposQuartos = ["STANDARD", "LUXO", "SUÍTE"];
    let total = 0;

    let index = tiposQuartos.indexOf(tipoUpper);

    if(index !== -1){
        if(tipoUpper === "STANDARD"){
            total = qntDiaria * 150.00;
        } else if (tipoUpper === "LUXO"){
            total = qntDiaria * 300.00;
        } else {
            total = qntDiaria * 500.00;
        }

        console.log(`Tipo de quarto: ${tipo}`)
        console.log(`Quantidade de diárias: ${qntDiaria}`)
        console.log(`Valor total da estadia: R$ ${total.toFixed(2)}`)
    }else {
        console.log(`Tipo ${tipo} não encontrado`);
    }
}

sistemaHotel("Standard", 5);