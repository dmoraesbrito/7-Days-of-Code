


const area = prompt("Qual Liguagem área a programação você gostaria de seguir? Front-End ou Back-End? Digite uma das duas abaixo!");
    if (area == "Front-End") {
        var frontEndLinguagem = prompt ("Que legal! criar interfaces visuais é muito interessante! Mas para seguir nessa área é preciso utilizar algum framework sabia? Você gostaria de aprender React ou aprender Vue? Digite aqui em baixo!");
    }
    if (area == "Back-End") {
        var backEndLinguagem = prompt ("Então você costa de olhar atrás da cortina e ver como é por trás do espetáculo! Isso é legal demais! Para isso, você deverá aprender uma linguagem voltada para o Back-End. Você prefere C#? ou aprender Java? Digite aqui embaixo!")
    }

const eDepois = prompt("Mas e depois que você aprender as ferramentas da área? Pretende continuar a se especializar na área e virar um profissional especialista? Ou pretende aprender outras ferramentas e se tornar um profissional Full-Stack? Conta para a gente! Digite 1 para Especialista ou digite 2 Para Full-Stack");
    if (eDepois == 1) { 
    alert ("Especialistas são mestres em suas respectivas áreas de atuação, porém tome cuidado para não manter a mente fechada!");
    }
    if (eDepois == 2) {
        alert ("Profissionais Full-Stacks entendem o contexto todo, porém é sempre bom ter experiência aprofundada em alguma coisa!")
    };

const parteFinal = prompt("Quais são as tecnologias você gostaria de se especializar ou de conhecer?");
    alert("Que legal, "+parteFinal+" parece bem interessante!");

    do {
        var outras = prompt("Quais outras tecnologias você gostaria de se especializar ou de conhecer?");
        alert ("Bom saber!");
    }
    while (outras != "nenhuma");
    
    alert ("É sempre bom aprender novas tecnologias!");


--------------------------------------

Solução da Instrutora:

const area = prompt("Você quer seguir para área de 'Front-End' ou de 'Back-End'? Digite o nome da área:");
let linguagem = "";
if (area === "Front-End"){
    linguagem = prompt("Você quer aprender React ou Vue?");
}
else if (area === "Back-End"){
    linguagem = prompt("Você quer aprender C# ou Java?");
}
else {
    alert("Você não inseriu uma área válida!");
}

const especialidadeOuFullstack = prompt("Digite 1 para seguir se especializando na área escolhida ou 2 para seguir se desenvolvendo para se tornar Fullstack");
if (especialidadeOuFullstack == 1){
    alert(`Continue se especializando em ${linguagem} para dominar a área de ${area}!`);
}
else if (especialidadeOuFullstack == 2){
    alert(`Chegou a hora de começar a aprender outras linguagens além de ${linguagem} se você quer se tornar Fullstack!`);
}
else {
    alert("Você não inseriu um valor válido!");
}

let msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
while (msg === "ok"){
    let novaTecnologia = prompt("Qual?");
    alert(`${novaTecnologia} é realmente uma tecnologia muito legal!`)
    msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
}
