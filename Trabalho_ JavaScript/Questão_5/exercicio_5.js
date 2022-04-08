var numero;
numero = Number(window.prompt("Digite o codigo do produto: "));
switch(numero){
    
    case 1:
        document.write('Alimentos não-perecível');
        break;
    case 2:
    case 3:
    case 4:    
        document.write('Alimentos perecível');
        break;
    case 5:
    case 6:    
        document.write('Vesturio');
        break;    
    case 7:
        document.write('Higiene Pessoal');
        break;
    case 8:
    case 9:    
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    document.write('Limpeza e Utensílios Domésticos');
    break;
    default:
        document.write('Código invalido');
}