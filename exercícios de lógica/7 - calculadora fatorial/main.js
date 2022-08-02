document.querySelector('.form').addEventListener('submit', function (e) {
    e.preventDefault();
    let numero = parseFloat(document.querySelector('#form__numero').value);
    const resultadoFinal = document.querySelector('.resultado');

    function fatorial(numero) {
        let resultado = numero;
        for (let i = 1; i < numero; i++) {
            resultado = resultado * i
        }
        return resultado
    }

    resultadoFinal.innerHTML = "O fatorial de " + numero + " é " + fatorial(numero) +"."

});