
const pi = 3.14;
const raio = prompt("Forneça o Raio em metros: ");
const area = pi * Math.pow(raio, 2);
const comprimento = 2 * pi * raio;
const metragemRolo = 20;


let numeroDeRolos = comprimento / metragemRolo;
let roloCompra = 0;

while (roloCompra < numeroDeRolos) {
    roloCompra++;
}
    
document.getElementById('frase').innerHTML = "Você deve comprar " + roloCompra + 
" rolos de arame.";


