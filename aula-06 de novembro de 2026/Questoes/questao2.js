//Escreva um programa em JavaScript que receba um símbolo de operação do usuário (+, -, * ou /) e dois números reais. 
// O programa deve retornar o resultado da operação recebida sobre estes dois números.
let n1 = parseInt(prompt("Digite o primeiro valor: "));
let n2 = parseInt(prompt("Digite o segundo valor: "));
let operador = prompt("Escolha o operador(+, -, *, /): ");
let add = n1 + n2
let sub = n1 - n2
let mult = n1 * n2
let div = n1 / n2

if(operador == "+"){
    alert(n1 + " + " + n2 + " = " + add);
}else if(operador == "-"){
    alert(n1 + " - " + n2 + " = " + sub);
}else if(operador == "*"){
    alert(n1 + " * " + n2 + " = " + mult);
}else if(operador == "/"){
    alert(n1 + " / " + n2 + " = " + div);
}else{
    alert("Operador inválido.")
}