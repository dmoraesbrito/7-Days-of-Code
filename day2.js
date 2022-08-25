 
    
    const enviar = document.getElementById("enviar");

    enviar.onclick =  function() {

        var nomePessoa = document.getElementById("nome").value;
        var idadePessoa = document.getElementById("idade").value;
        var linguagemPessoa = document.getElementById("linguagemDeProgramacao").value;
    
        var texto = "Olá "+nomePessoa+", você tem "+idadePessoa+" anos e já está aprendendo "+linguagemPessoa+"!";

        alert (texto);
        var gostoLinguagem = prompt ("Você gosta de estudar" +linguagemPessoa+"? Responda com o número 1 para SIM ou 2 para NÃO.");

        if (gostoLinguagem == 1) {
            alert ("Muito bom! Continue estudando e você terá muito sucesso");
        }
        else {
            alert ("Ahh que pena... Já tentou aprender outras linguagens?");
            };
    
    };





    

    