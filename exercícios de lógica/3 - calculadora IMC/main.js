const sexo = prompt("Informe o seu sexo:\n 1 - Masculino\n 2 - Feminino");
const peso = prompt("Informe seu peso (em Kg):");
const altura = prompt("Informe sua altura (em metros):");

imcCalc(peso, altura)

function imcCalc (p, h) {
    var imc = p / (Math.pow(h, 2));
    
    console.log(imc)


    if (sexo == 1 && imc < 20.7) {
        alert('Seu IMC é: ' + imc +'\nVocê está abaixo do peso; coma pizza.')
    } else if (sexo == 1 && imc >= 20.7 && imc < 26.4 ) {
        alert('Seu IMC é: ' + imc +'\nVocê está no peso normal.')
    } else if (sexo == 1 && imc >= 26.4 && imc < 27.8) {
        alert('Seu IMC é: ' + imc +'\nVocê está um pouco acima do peso; corte os doces.')
    } else if (sexo == 1 && imc >= 27.8 && imc < 31.1) {
        alert('Seu IMC é: ' + imc +'\nVocê está pesadinho, faça academia e coma menos.')
    } else if (sexo == 1 && imc >= 31.1) {
        alert('Seu IMC é: ' + imc +'\nVocê está GOOOOORDO!')
// se for do sexo feminino
    } else if (sexo == 2 && imc < 19.1) {
        alert('Seu IMC é: ' + imc +'\nVocê está abaixo do peso; coma pizza.')
    } else if (sexo == 2 && imc >= 19.1 && imc < 25.8 ) {
        alert('Seu IMC é: ' + imc +'\nVocê está no peso normal.')
    } else if (sexo == 2 && imc >= 25.8 && imc < 27.3) {
        alert('Seu IMC é: ' + imc +'\nVocê está um pouco acima do peso; corte os doces.')
    } else if (sexo == 2 && imc >= 27.3 && imc < 32.3) {
        alert('Seu IMC é: ' + imc +'\nVocê está pesadinha, faça academia e coma menos.')
    } else if (sexo == 2 && imc >= 32.3) {
        alert('Seu IMC é: ' + imc +'\nVocê está GOOOOORDA!')
// caso de algum dado inválido
    } else {
        alert('Houston, we have a problem!\nReinicie a aplicação e tente novamente.')
    }
} 


 


