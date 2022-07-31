// Uma palavra é uma palavra prima se a soma de suas letras é um número primo.

 let numeroPalavras = prompt("Quantas palavras deseja testar?")
 let palavras = [];

 for (let x = 0; x < numeroPalavras; x++) {                  
    palavras[x] = prompt("Forneça a palavra número " + (x + 1) + " :"); // guardando cada palavra no array
    console.log(convertePalavra(palavras[x]));                          // chamando a função para cada palavra
 }

/* O charCodeAt() é uma função que é usada para retornar 
o número que indica o valor Unicode do caractere no índice especificado.
ASCII Character Codes A~Z (65~90) a~z (97~122) */


function convertePalavra (palavra) {
    let soma = 0
    for (let i = 0; i < palavra.length; i++){
        soma += palavra.charCodeAt(i)   // valor do caractere (https://www.petefreitag.com/cheatsheets/ascii-codes/)
        console.log(`O valor da letra ${i} da palavra ${palavra} em Unicode é: ${palavra.charCodeAt(i)}.`)
        
        if (soma >= 65 && soma <= 90)   // maiúsculas ASCII (converter A vale 27, B vale 28...)
        soma -= 38
        if (soma >= 97 && soma <= 122)  // minúsculas ASCII (converter a vale 01, b vale 02...)
        soma -= 96        
    }
    return alert(`A palavra ${palavra} ${testePrimo(soma)}`);  
}

//Verificar se a soma dos elementos é um número primo: 
function testePrimo(soma) {
  if (soma < 2) {                         // eliminando o número 01
    return 'não é uma palavra prima.'
  }

  for (i = 2; i < soma; i++){
    if (soma % i == 0) {                  // verificando a divisão por todos os número de 02 até "soma"
      return 'não é uma palavra prima.'
    } 
  }
  return 'é uma palavra prima.'
}





