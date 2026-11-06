let segundo = prompt("Digite a quantidade de segundos: ");

let tempo = parseInt(segundo / 3600) + "h " + parseInt((segundo % 3600) / 60) + "m " + parseInt(segundo % 60) + "s";
alert("Tempo convertido: " + tempo)