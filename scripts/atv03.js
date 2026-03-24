function balanco(){
    let bruto = 0;
    let gastos =0;
    let soma_bruto = 0 ;
    let soma_gastos = 0 ;
    

    for(i = 0; i < 3; i++){
        let bruto = parseFloat(prompt("Qual o ganho bruto da empresa no " + (i+1) + "° mês?"));
        if(!isNaN(bruto)){
            soma_bruto += bruto;
            console.log(soma_bruto);
        }
        
        let gastos = parseFloat(prompt("Quais foram o total dos gastos da empresa no " + (i+1) + "° mês?"));
        if(!isNaN(gastos)){
            soma_gastos += gastos;
            console.log(soma_gastos);
        }
    }   

    alert("Os seus gastos foram de: " + soma_gastos + " e seus ganhos foram de: " + soma_bruto)
    alert("O saldo financeiro atual é de: " + (soma_bruto - soma_gastos));

}