
document.querySelector('.form').addEventListener('submit', function (e) {
    e.preventDefault();
    var palavra = document.querySelector('#form__palavra').value;
    var node = document.createElement("LI");
    if (ordenada(palavra) == true) {
        var textnode = document.createTextNode(`A palavra digitada foi: ${palavra} É ORDENADA`);
    } else if (ordenada(palavra) == false) {
        var textnode = document.createTextNode(`A palavra digitada foi: ${palavra} NÃO É ORDENADA`);
    }
    node.appendChild(textnode);
    document.getElementById("exibir__lista").appendChild(node);


    function ordenada (palavra) {
        let ordenadasContador = 0;    
        for (let i = 0; i < (palavra.length - 1); i++) {
            // se minha próxima letra é maior que a letra anterior; incrementa
            if (palavra [i+1] > palavra [i]) {
                ordenadasContador++;
            }
        }    
        if (ordenadasContador == (palavra.length -1)) {
            return true
        } else {
            return false
        }
    }
});














