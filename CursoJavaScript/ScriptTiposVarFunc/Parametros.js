// Parâmetros de Função

                //2       2       
function soma(numero1, numero2) {
    return numero1 + numero2;
}

/*console.log(soma(2, 2));
console.log(soma(245, 20));
console.log(soma(-500, 60));
*/

// Parâmetros x Argumentos

function nomeIdade(nome, idade) {
    return `Meu nomé é ${nome}, e minha idade é ${idade}`
}

//console.log(nomeIdade(26, "Matheus"));

function multiplica(numero1 = 1, numero2 = 1) {
    return numero1 * numero2;
}

console.log(multiplica(soma(4, 5)));