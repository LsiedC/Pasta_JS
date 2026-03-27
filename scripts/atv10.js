function folha(){

    let nome = prompt("Qual seu nome? ");
    let salario = parseFloat(prompt("Qual seu sálario?: "));
    alert("O leão vai comer uma parte! (8%)");

    let valor_descontado = (salario*0.08)
    let salario_descontado = salario - (salario*0.08);
    alert("Bom dia " + nome + ", seu sálario bruto é: " + salario + ". O leão estava com fome e comeu! Ficou: " + salario_descontado + "\n\nO total que foi descontado foi: " + valor_descontado);

}
