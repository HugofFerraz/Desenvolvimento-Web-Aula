//Escreva um programa em JavaScript que leia dois valores A e B. Se A for igual a B, devem ser lidos novos valores para A e B. 
// Se A for menor que B, deve-se calcular e imprimir a subtração de B – A. 
// Se A for maior que B, deve-se calcular e imprimir a subtração de A – B. Obs.: Considere que só serão informados valores inteiros positivos.

let A = parseInt(prompt("Digite o valor de A: "));
let B = parseInt(prompt("Digite o valor de B: "));

while(A == B){
    alert("Os valores de A e B são iguais. Digite novos valores.");
    A = parseInt(prompt("Digite o valor de A: "));
    B = parseInt(prompt("Digite o valor de B: "));
}

if(A < B){
    let sub = B - A;
    document.write("A subtração de B - A é: " + sub);
}

if(A > B){
    let sub = A - B;
    document.write("A subtração de A - B é: " + sub);
}