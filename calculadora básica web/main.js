let zero = document.querySelector(".zero");
let um = document.querySelector(".um");
let dois = document.querySelector(".dois");
let tres = document.querySelector(".tres");
let quatro = document.querySelector(".quatro");
let cinco = document.querySelector(".cinco");
let seis = document.querySelector(".seis");
let sete = document.querySelector(".sete");
let oito = document.querySelector(".oito");
let nove = document.querySelector(".nove");

let somar = document.querySelector(".somar")
let subtrair = document.querySelector(".subtrair")
let multiplicar = document.querySelector(".multiplicar")
let dividir = document.querySelector(".dividir")
let igual = document.querySelector(".igual")

let limparTela = document.querySelector("#limpar--btn")

let textoDisplay = document.getElementById("display");
let calculando = '';


zero.addEventListener("click", function () {
    textoDisplay.textContent += 0;
    calculando += 0;
})
um.addEventListener("click", function () {
    textoDisplay.textContent += 1;
    calculando += 1;
})
dois.addEventListener("click", function () {
    textoDisplay.textContent += 2;
    calculando += 2;
})
tres.addEventListener("click", function () {
    textoDisplay.textContent += 3;
    calculando += 3;
})
quatro.addEventListener("click", function () {
    textoDisplay.textContent += 4;
    calculando += 4;
})
cinco.addEventListener("click", function () {
    textoDisplay.textContent += 5;
    calculando += 5;
})
seis.addEventListener("click", function () {
    textoDisplay.textContent += 6;
    calculando += 6;
})
sete.addEventListener("click", function () {
    textoDisplay.textContent += 7;
    calculando += 7;
})
oito.addEventListener("click", function () {
    textoDisplay.textContent += 8;
    calculando += 8;
})
nove.addEventListener("click", function () {
    textoDisplay.textContent += 9;
    calculando += 9;
});

// OPERADORES
somar.addEventListener("click", function () {
    textoDisplay.textContent += `+`;
    calculando += '+';
})
subtrair.addEventListener("click", function () {
    textoDisplay.textContent += `-`;
    calculando += '-';
})
multiplicar.addEventListener("click", function () {
    textoDisplay.textContent += `x`;
    calculando += '*';
})
dividir.addEventListener("click", function () {
    textoDisplay.textContent += `÷`;
    calculando += '/';
})

// RESULTADO e LIMPAR TELA
igual.addEventListener("click", function () {
    console.log(`minha str de resultado: ${calculando}`);
    textoDisplay.textContent = eval(calculando);
}
)

limparTela.addEventListener("click", function () {
    textoDisplay.textContent = "";
    calculando = '';
})




