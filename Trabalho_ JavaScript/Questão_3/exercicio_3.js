
    var idadeDeEmpregacao = window.prompt("Digite idade de empregação: ")
    var anoNasc = window.prompt("Digite seu ano de nascimento: ")
    var anoAtual = 2022;
    var idade = anoAtual - anoNasc;
    var tempTrabalho = idade -  idadeDeEmpregacao;

    if(idade >=60 && tempTrabalho >= 25){
        document.write("Idade de empregação: "+ idadeDeEmpregacao + "<br>Idade: " + idade + " anos. <br> Ingressou na empresa á: " + tempTrabalho + " anos <br>Requer aposentadoria")
        

    }else if (idade >= 65 || tempTrabalho >= 30){
        document.write("Idade de empregação: "+ idadeDeEmpregacao + "<br>Idade: " + idade + " anos. <br> Ingressou na empresa á: " + tempTrabalho + " anos <br>Requer aposentadoria")
    }
    
    else {
        document.write("Idade de empregação: "+ idadeDeEmpregacao + "<br>Idade: "  + idade + " anos. <br> Ingressou na empresa á: " + tempTrabalho + " anos <br>Não requer aposentadoria")
    }
