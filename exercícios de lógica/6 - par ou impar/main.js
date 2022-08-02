const jogador_1 = document.querySelector('.jogador_1');
const jogador_2 = document.querySelector('.jogador_2');
const resultadoFinal = document.querySelector('.resultado');
let pontosJ1 = 0;
let pontosJ2 = 0;
let aleatorio = Math.floor(Math.random() * 10);


let escolhasJ1 = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];   // sempre escolhe PAR
let escolhasJ2 = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];    // sempre escolhe IMPAR

jogador_1.innerHTML += escolhasJ1;
jogador_2.innerHTML += escolhasJ2;


for (i = 0, j = 0; i < escolhasJ1.length, j < escolhasJ2.length; i++, j++) {
    var resultado = escolhasJ1 [i] + escolhasJ2[j];
    if (resultado % 2 < 1) {
        pontosJ1++;
        console.log("O jogador 01 pontuou.")
    }
    else {
        pontosJ2++;
        console.log("O jogador 02 pontuou.")
    }
}


if (pontosJ1 > pontosJ2) {
    resultadoFinal.innerHTML = "O vencedor foi o Jogador 1."
}
else if (pontosJ1 = pontosJ2) {
    resultadoFinal.innerHTML = "O jogo ficou empatado."
}
else {
    resultadoFinal.innerHTML = "O vencedor foi o Jogador 2."
}


function jogarNovamente(){
    window.location.reload();
} 

