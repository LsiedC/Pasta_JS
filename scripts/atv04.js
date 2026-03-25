function gerar_numeros(){
    vetorDeNumeros = [];

    for (i = 0; i <= 3; i++){
        vetorDeNumeros.push (Number ( prompt ("Me informe o " + (i+1) + "° valor")));
        vetorDeNumeros.sort ((a,b) => b - a);
    }
    alert("Seu vetor ordenado é: " + vetorDeNumeros);
}
