function sabor() {
    alert("Bem vindo a picoléteria do Siedschlag!");
    alert("Sabores disponiveis:\nChocolate [a]\n" + "Morango [b]\n" + "Creme [c]\n" + "Manga [d]\n" + "Melancia [e]\n" + "Vanilla Ice [f]\n" + "Céu Azul [g]\n" + "Brownie [h]\n" + "Hawaiano [i]\n" );
    let sabor = prompt("Digite uma letra de a até i para esocolher um sabor: ");
    
    switch(sabor){
        case "a":
            alert("O valor do pícole de chocolate é 1,50R$");
        break;

        case "b":
            alert("o valor do pícole de morango é 2,50 R$");
        break;

        case "c":
            alert("O valor do pícole de creme é 2,50R$");
            break;

        case "d":
            alert("O valor do pícole de manga é 3,20R$");
            break;

        case "e":
            alert("O valor do pícole de melancia é 3,40R$");
            break;

        case "f":
            alert("O valor do pícole de vanilla ice é 3,00R$");
            break;

        case "g":
            alert("O valor do pícole de céu azul é 3,60R$");
            break;

        case "h":
            alert("O valor do pícole de brownie é 4,00R$");
            break;

        case "i":
            alert("O valor do pícole de Hawaiano é 5,00R$");
            break;
    }
}