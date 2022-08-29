numeroSecreto = Math.floor(Math.random() * (10 - 0 + 1) + 0)

var numero = prompt ("qual é o número secreto?");

if (numero == numeroSecreto) {
    alert ("Parabéns");
}

if(numero != numeroSecreto) {  

    for (i = 0; i < 2; i++) {
        alert ("errou!");
        prompt ("qual é o número secreto?");
    }
    alert ("Fim das chances! O número secreto era " +numeroSecreto+ "!")
}
