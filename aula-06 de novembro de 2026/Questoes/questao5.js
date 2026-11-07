//Escreva um programa em JavaScript que leia um número e calcule a soma de todos eles até ele. Ex. 
// Se o usuário entrar com 6, o programa vai mostrar 21, pois 1 + 2 + 3 + 4 + 5 + 6 = 21.

let n = parseInt(prompt("Digite um número: "));
let soma = 0;

for(let i = 1; i <= n; i++){
    soma += i;
}

document.write("A soma de todos os números até " + n + " é: " + soma);