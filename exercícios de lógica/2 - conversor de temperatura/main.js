const constante = 5 / 9;
const tFahrenheit = prompt("Digite a temperatura em Fahrenheit: ");

let tCelsius = constante * (tFahrenheit - 32);

document.getElementById('temperatura').innerHTML = "O equivalente à temperatura " + tFahrenheit + " °F é " + tCelsius + " °C." 

