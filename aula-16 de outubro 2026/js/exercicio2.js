let hora = prompt("Digite a quantidade de horas: ");
let minuto = prompt("Digite a quantidade de minutos: ");
let segundo = prompt("Digite a quantidade de segundos: ");

let totalSeg = parseInt(hora * 3600) + parseInt(minuto * 60) + parseInt(segundo);

document.write("Total de segundos: " + totalSeg)