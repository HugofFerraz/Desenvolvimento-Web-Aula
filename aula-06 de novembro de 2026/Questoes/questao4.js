//Escreva um programa em JavaScript que receba 3 valores não inteiros do usuário e mostre o maior, o menor e a média.
let n1 = parseFloat(prompt("Digite o primeiro valor: "));
let n2 = parseFloat(prompt("Digite o segundo valor: "));
let n3 = parseFloat(prompt("Digite o terceiro valor: "));
let media = (n1 + n2 + n3) / 3

if(n1 > n2 && n1 > n3){
    document.write("O maior número é: " + n1);
}else if(n2 > n1 && n2 > n3){
    document.write("O maior número é: " + n2);
}else{
    document.write("O maior número é: " + n3);
}

if(n1 < n2 && n1 < n3){
    document.write("<br>O menor número é: " + n1);
}else if(n2 < n1 && n2 < n3){
    document.write("<br>O menor número é: " + n2);
}else{
    document.write("<br>O menor número é: " + n3);
}

if(n1 == n2 && n1 == n3){
    document.write("<br>Todos os números são iguais.");
}

document.write("<br>A média dos números é: " + media);