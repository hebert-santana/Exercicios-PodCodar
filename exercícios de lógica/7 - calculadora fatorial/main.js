let n = parseFloat(prompt("Digite o número para o qual quer calcular seu fatorial:"))
// parseFloat analisa um valor como uma string e retorna o primeiro número
console.log(n);


function fatorial (numero) {
        let resultado = numero;
    for (let i = 1; i < numero; i++) {
        resultado = resultado * i
    }
    return resultado
}

alert("O fatorial de " + n + " é " + fatorial(n))