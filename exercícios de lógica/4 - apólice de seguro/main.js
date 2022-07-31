const sexo = prompt('Digite o número referente ao seu sexo:\n1 - Masculino\n2 - Feminino');
const idade = prompt('Digite a sua idade (em anos):');
const cobertura = prompt('Escolha a opção de cobertura desejada:\n1 - Cobertura parcial\n2 - Cobertura total');

let baseParcial = 500;
let baseTotal = 800;

const jMasculino = 1.07;
const feminino = 0.95;
const idoso = 1.09;

if (sexo == 1) {
    if (idade >= 18 && idade <= 24) {
        baseParcial = baseParcial * jMasculino;
        baseTotal = baseTotal * jMasculino;
        if (cobertura == 1) {
        alert("Para a sua escolha o valor é R$ " + baseParcial + " .")
        } 
        else if (cobertura == 2) {
            alert("Para a sua escolha o valor é R$ " + baseTotal + " .")
        }
    }

    else if (idade >= 25 && idade <= 55) {
        if (cobertura == 1) {
            alert("Para a sua escolha o valor é R$ " + baseParcial + " .")
        }
        else if (cobertura == 2) {
            alert("Para a sua escolha o valor é R$ " + baseTotal + " .")
        }
    }

    else if (idade >= 56 && idade <= 120) {
        if (cobertura == 1) {
            baseParcial = baseParcial * idoso;
            alert("Para a sua escolha o valor é R$ " + baseParcial + " .")
        }
        else if (cobertura == 2) {
            baseTotal = baseTotal * idoso;
            alert("Para a sua escolha o valor é R$ " + baseTotal + " .")
        }
    }
    else if (idade > 120) {
    alert("Lamentamos informar, mas talvez o senhor já tenha falecido.")
    }
}

else if (sexo == 2) {
    if (idade >= 18 && idade <= 55) {
        baseParcial = baseParcial * feminino;
        baseTotal = baseTotal * feminino;
        if (cobertura == 1) {
            alert("Para a sua escolha o valor é R$ " + baseParcial + " .")
        } 
        else if (cobertura == 2) {
            alert("Para a sua escolha o valor é R$ " + baseTotal + " .")
        }
    }
    else if (idade >= 56 && idade <= 120) {
        if (cobertura == 1) {
            baseParcial = baseParcial * idoso;
            alert("Para a sua escolha o valor é R$ " + baseParcial + " .")
        }
        else if (cobertura == 2) {
            baseTotal = baseTotal * idoso;
            alert("Para a sua escolha o valor é R$ " + baseTotal + " .")
        } 
    }
    else if (idade > 120) {
        alert("Lamentamos informar, mas talvez a senhora já tenha falecido.")
    }
}