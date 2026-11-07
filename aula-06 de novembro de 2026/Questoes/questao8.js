//Escreva um programa em JavaScript que exiba um menu com as seguintes opções:

//1 – somar
//2 – subtrair
//3 – multiplicar
//4 – dividir
//5 – sair

//Após a escolha da opção, o usuário deve fornecer dois números e o programa deve mostrar o resultado da operação.

let opcao = parseInt(prompt("Escolha uma opção:\n1 - Somar\n2 - Subtrair\n3 - Multiplicar\n4 - Dividir\n5 - Sair"));

if(opcao >= 1 && opcao <= 4){
    let n1 = parseFloat(prompt("Digite o primeiro número: "));
    let n2 = parseFloat(prompt("Digite o segundo número: "));
    let resultado;

    switch(opcao){
        case 1:
            resultado = n1 + n2;
            alert("O resultado da soma é: " + resultado);
            break;
        case 2:
            resultado = n1 - n2;
            alert("O resultado da subtração é: " + resultado);
            break;
        case 3:
            resultado = n1 * n2;
            alert("O resultado da multiplicação é: " + resultado);
            break;
        case 4:
            if(n2 !== 0){
                resultado = n1 / n2;
                alert("O resultado da divisão é: " + resultado);
            } else {
                alert("Erro: Divisão por zero não é permitida.");
            }
            break;
    }
} else if(opcao === 5){
    alert("Saindo do programa.");
}