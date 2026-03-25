function impar_par() {

    let num = (Number ( prompt("Escreva um numero: ")));
        if (num % 2 == 0 ){
            alert("Seu numero é par. ");
            alert("Agora é ímpar: " + (num+1));
        } else {
            alert("Seu numero é ímpar.");
            alert("Agora é par: " + (num+1));
    }
}