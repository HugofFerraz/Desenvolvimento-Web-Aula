// Escreva um programa em JavaScript para calcular o salário mensal de um funcionário baseado no número de horas que ele trabalhou. 
// Este funcionário recebe R$ 10,00 por hora trabalhada. Observações: o funcionário deve trabalhar até 176 horas por mês, acima disso são horas extras. 
// As horas extras são pagas em dobro.
let horasTrabalhadas = prompt("Digite o número de horas trabalhadas no mês: ");
let salarioNormal = horasTrabalhadas * 10

if(horasTrabalhadas > 176){
    let salarioHextra = (salarioNormal + ((horasTrabalhadas - 176) * 20))
    document.write("O funcionário trabalhou por " + horasTrabalhadas + " horas (" + (horasTrabalhadas - 176) + " horas a mais) e recebeu R$ " + salarioHextra + ".")
}else{
    document.write("O funcionário trabalhou por " + horasTrabalhadas + " horas e recebeu R$ " + salarioNormal + ".")
}