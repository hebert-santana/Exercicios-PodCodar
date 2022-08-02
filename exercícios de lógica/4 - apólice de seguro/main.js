document.querySelector('#form').addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.querySelector('#form__nome').value;
    const sexo = document.querySelector('input[name="sexo"]:checked').value;
    const idade = document.querySelector('input[name="idade"]:checked').value;
    const cobertura = document.querySelector('input[name="cobertura"]:checked').value;
    const hJovem = 1.07;
    const idoso = 1.09;
    const mulher = 0.95;
    let resultado = document.querySelector('.resultado')
   

    if (idade == 4) {
        resultado.innerHTML = "Lamentamos informar, mas talvez você já tenha falecido."
    } else if (idade == 3) {
        if (cobertura == 500) { var preco = cobertura * idoso; resultado.innerHTML = 'Olá, ' + nome + '.\nO valor da cobertura para você é: R$' + preco + '.'}   
        else if (cobertura == 800) { var preco = cobertura * idoso; resultado.innerHTML = 'Olá, ' + nome + '.\nO valor da cobertura para você é: R$' + preco + '.'}
    }

    if (sexo == 1) {
        if (idade == 1) {
            if (cobertura == 500) { var preco = cobertura * hJovem; resultado.innerHTML = 'Olá, ' + nome + '.\nO valor da cobertura para você é: R$' + preco + '.'}   
            else if (cobertura == 800) { var preco = cobertura * hJovem; resultado.innerHTML = 'Olá, ' + nome + '.\nO valor da cobertura para você é: R$' + preco + '.'}
        }
        else if (idade == 2) {
            if (cobertura == 500) { var preco = cobertura; resultado.innerHTML = 'Olá, ' + nome + '.\nO valor da cobertura para você é: R$' + preco + '.'}   
            else if (cobertura == 800) { var preco = cobertura; resultado.innerHTML = 'Olá, ' + nome + '.\nO valor da cobertura para você é: R$' + preco + '.'}
        }
       
    }

    else if (sexo == 2) {
        if (idade == 1 || idade == 2) {
            if (cobertura == 500) { var preco = cobertura * mulher; resultado.innerHTML = 'Olá, ' + nome + '.\nO valor da cobertura para você é: R$' + preco + '.'}   
            else if (cobertura == 800) { var preco = cobertura * mulher; resultado.innerHTML = 'Olá, ' + nome + '.\nO valor da cobertura para você é: R$' + preco + '.'}
        }
    }
   
 });








