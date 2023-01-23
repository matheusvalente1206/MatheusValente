function apresentar(nome) {
    return `Meu nome é ${nome}`;
}

// Arrow Function
const apresetarArrow = nome => `Meu nome é ${nome}`;
const soma = (numero1, numero2) => numero1 + numero2;

// Arrow Function com mais de uma linha de instrução

const somaNumerosPequenos = (num1, num2) => {
    if(num1 > 10 || num2 > 10){
        return "Somente números de 1 à 9"
    }else{
        return num1 + num2;
    }
}

// Hoisting: Arrow Function se comporta como expressão