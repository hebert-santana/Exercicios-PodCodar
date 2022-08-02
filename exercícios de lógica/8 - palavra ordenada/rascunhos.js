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



// main.js
let p = prompt("Forneça o número de palavras que irá digitar: ");            // número P de palavras
let pStrings = []                                                            // array vazio

// preenchendo o array com o número P de elementos
for (let i = 0; i < p; i++) {
    pStrings[i] = prompt("Forneça a palavra número " + (i + 1) + " :");      // preenchendo o index do array
    let palavraAvaliada = pStrings[i];                                       // palavra recebe o elemento do index do array
    console.log(`a palavra de número ${i} é ${palavraAvaliada}`);
    ordenada(palavraAvaliada);                                               // chamando a função "ordenada" com a palavra como argumento
}
function ordenada (palavra) {
    let contadorOrdenadas = 0;
    
    for (let i = 0; i < (palavra.length - 1); i++) {
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