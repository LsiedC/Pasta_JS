function folha_variavel(){

    let salario = parseFloat(prompt("Qual seu salário? "));

    if(salario <= 1000) {
        let desconto = salario*0.08;
        let salario_descontado = salario - (salario*0.08);
        alert("Seu salario é de: " + salario + ". O leão estava com fome e comeu uma parte! (8%)\nAgora é: " + salario_descontado + "\nO valor do desconto foi de: " + desconto);

        } else if (salario > 1000 || salario < 1500 ) {
            let desconto = salario*0.085;
            let salario_descontado = salario - (salario*0.085);
            alert("Seu salario é de: " + salario + ". O leão estava com fome e comeu uma parte! (8,5%)\nAgora é: " + salario_descontado + "\nO valor do desconto foi de: " + desconto);

                } else {
                    let desconto = salario*0.09;
                    let salario_descontado = salario - (salario*0.09);
                    alert("Seu salario é de: " + salario + ". O leão estava com fome e comeu uma parte! (9%)\nAgora é: " + salario_descontado + "\nO valor do desconto foi de: " + desconto);

                }
    }