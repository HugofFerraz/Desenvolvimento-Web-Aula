//Escreva um programa em JavaScript que calcule a fatorial de um número qualquer.
let n = parseInt(prompt("Digite um número: "));
let fatorial = 1;

for(let i = 1; i <= n; i++){
    fatorial *= i;
}

document.write("O fatorial de " + n + " é: " + fatorial);