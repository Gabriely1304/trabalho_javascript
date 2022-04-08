var nomeDoProduto = "oleo";
var quantidade = 20;
var preco = 7;
var total = quantidade * preco;
var desconto = total * 5 / 100 ; 
var totalPagar = total - desconto

document.write("Produto: " + nomeDoProduto + "<br>" + "Quantidade adquirida: " + quantidade + "<br>");
document.write("Preço unitária: " + preco + "<br>" + "Total: " + total + "<br>");
document.write("Desconto: " + desconto + "<br>" + "Total a pagar com desconto: " + totalPagar);

if (quantidade <= 5){
    document.write("<br> Desconto será de 2% ")
}else if (quantidade > 5 && quantidade <= 10){
    document.write("<br> Desconto será de 3% ")
}else if (quantidade > 10){
    document.write("<br> Desconto será de 5% ")
}



