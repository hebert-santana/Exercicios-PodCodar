const x = prompt("Digite o tamanho do primeiro lado do seu triângulo:");
const y = prompt("Digite o tamanho do segundo lado do seu triângulo:");
const z = prompt("Digite o tamanho do terceiro lado do seu triângulo:");

if (x < y + z && y < x + z && z < x + y) {
    alert('OK! Temos um triângulo válido!')
    if (x == y && y == z) {
        alert('Seu triângulo é EQUILÁTERO.')
    }
    else if (x == y && y != z) {
        alert('Seu triângulo é ISÓSCELES')
    }
    else {
        alert('Seu triângulo é ESCALENO')
    }
} else {
    alert('Com essas dimensões, não temos um triângulo válido.')
}