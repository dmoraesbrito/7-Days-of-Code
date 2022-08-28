


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