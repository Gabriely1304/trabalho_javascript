var produto;
produto = Number(window.prompt("Digite o código do produto "));
var quantidade;
quantidade = Number(window.prompt("Digite a quantidade "));;

switch(produto){
case 100:
        console.log('total é' + (quantidade * 1.70));
        break;
case 101:
        console.log('total é' + (quantidade * 2.30));
        break;  
case 102:
        console.log('total é' + (quantidade * 2.60));
        break; 
case 103:
        console.log('total é' + (quantidade * 2.40));
        break;  
case 104:
        console.log('total é' + (quantidade * 2.50));
        break; 
case 105:
        console.log('total é' + (quantidade * 1.00));
        break;           
default:
        console.log('Valor inválido')

}
