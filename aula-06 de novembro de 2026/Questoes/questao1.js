//Escreva um programa em JavaScript que leia um número digitado pelo usuário e determine se esse número é par ou ímpar.
let n = prompt("Digite um valor qualquer: ");

if(n % 2 == 0){
    alert("O número " + n + " é par.");
}else{
    alert(n + " é ímpar.");
}