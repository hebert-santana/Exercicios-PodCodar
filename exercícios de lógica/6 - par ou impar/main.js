let primeiroJogador = [3, 4, 5, 8, 9, 7];   // sempre escolhe PAR
let segundoJogador = [2, 2, 1, 5, 9, 3];    // sempre escolhe IMPAR
let primeiroPontos = 0;
let segundoPontos = 0;

for (i = 0, j = 0; i < primeiroJogador.length, j < segundoJogador.length; i++, j++) {
    var resultado = primeiroJogador [i] + segundoJogador[j];
    if (resultado % 2 < 1) {
        primeiroPontos++;
        console.log("O jogador 01 pontuou.")
    }
    else {
        segundoPontos++;
        console.log("O jogador 02 pontuou.")
    }
}

alert("Vamos dar o resultado final!")
if (primeiroPontos > segundoPontos) {
    alert("O vencedor foi o Jogador 01")
}
else if (primeiroPontos = segundoPontos) {
    alert("O jogo ficou empatado.")
}
else {
    alert("O vencedor foi o jogador 02.")
}