
var n1 = Number(window.prompt("Digite a primeira nota"));
var n2 = Number(window.prompt("Digite a segunda nota"));
var n3 = Number(window.prompt("Digite a terceira nota"));
var n4 = Number(window.prompt("Digite a quarta nota"));


var m = (n1 + n2 + n3 + n4) /4
if (m>=9.0 ){
    document.write(' Média: ' + m )
    document.write('<br> A')
} else if (m>=7.5 && m<=9.0) {
    document.write(' Média: ' + m )
    document.write('<br> B')    
} else if (m>=6.0 && m<7.5) {
    document.write(' Média: ' + m )
    document.write('<br> C')
} else if (m<6.0) {
    document.write(' Média: ' + m )
    document.write('<br> D' )
    var recuperação = Number(window.prompt("Digite a nota de recuperação"));
    if(recuperação >=6){
        document.write('<br>Nota de recuperação: ' + recuperação )
        document.write('<br> Aluno Aprovado')
    }else{
        document.write('<br>Nota de recuperação: ' + recuperação )
        document.write('<br> Aluno Reprovado')
    }
}