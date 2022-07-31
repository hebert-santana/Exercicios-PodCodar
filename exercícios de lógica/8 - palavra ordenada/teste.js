let casa = "casa"
let belo = "belo"

function ordenada (palavra) {
    let contadorOrdenadas = 0;
    
    for (let i = 0; i < (palavra.length - 1); i++) {
        console.log(palavra)
        console.log(palavra[i])
        console.log(palavra[i+1])
        // se minha próxima letra é maior que a letra anterior; incrementa
        if (palavra [i+1] > palavra [i]) {
            contadorOrdenadas++;
        }
    }


    if (contadorOrdenadas == (palavra.length -1)) {                 // se meu contador for igual o número de letras -1 então é ordenada
        console.log(`a palavra ${palavra} é Ordenada.`)
    } else {
        console.log(`a palavra ${palavra} não é Ordenada.`)
    }
}

// ordenada(belo);


console.log("b>a");
console.log(10>9);


const nome = "hebert"
console.log("hebert".charAt(2)) // b
console.log(nome[0]) // h

console.log(nome[3]<nome[4]) // true