document.querySelector('#form').addEventListener('submit', function(e) {
    e.preventDefault();
    var nome = document.querySelector('#form__nome').value;
    const peso = Number(document.querySelector('#form__peso').value);
    const altura = Number(document.querySelector('#form__altura').value);
    var sexo = document.querySelector('input[name="sexo"]:checked').value;
    var imc = (peso / (Math.pow((altura/100), 2))).toFixed(1);
    let resultado = document.querySelector('.resultado');

    if (sexo == 1 || sexo == 2) {
        if (sexo == 1) {
            if (imc < 20.7) {resultado.innerHTML = 'Seu IMC é: ' + imc + '.\nVocê está abaixo do peso; coma pizza.'}
            else if (imc >= 20.7 && imc < 26.4) { resultado.innerHTML = 'Seu IMC é: ' + imc + '.\nVocê está no peso normal.'}
            else if (imc >= 26.4 && imc < 27.8) { resultado.innerHTML = 'Seu IMC é: ' + imc + '.\nVocê está um pouco acima do peso; corte os doces.'}
            else if (imc >= 27.8 && imc < 31.1) { resultado.innerHTML = 'Seu IMC é: ' + imc + '.\nVocê está pesadinho, faça academia e coma menos.'}
            else if (imc >= 31.1) {resultado.innerHTML = 'Seu IMC é: ' + imc + '.\nVocê está GORDO!'}
        }
        // se for do sexo feminino
        else if (sexo == 2) {
            if (imc < 19.1) { resultado.innerHTML = 'Seu IMC é: ' + imc + '.\nVocê está abaixo do peso; coma pizza.'}    
            else if (imc >= 19.1 && imc < 25.8) { resultado.innerHTML = 'Seu IMC é: ' + imc + '.\nVocê está no peso normal.'}
            else if (imc >= 25.8 && imc < 27.3) { resultado.innerHTML = 'Seu IMC é: ' + imc + '.\nVocê está um pouco acima do peso; corte os doces.'}
            else if (imc >= 27.3 && imc < 32.3) { resultado.innerHTML = 'Seu IMC é: ' + imc + '.\nVocê está pesadinha, faça academia e coma menos.'}
            else if (imc >= 32.3) { resultado.innerHTML = 'Seu IMC é: ' + imc + '.\nVocê está GORDA!'}
        }
        else {
            resultado.innerHTML = 'Houston, we have a problem! Reinicie a aplicação e tente novamente.'
        }
    }
});

