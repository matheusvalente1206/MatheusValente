function minhaFuncao(params) {
    //Bloco de código
}

minhaFuncao("param");

//Expressão de Função


//console.log(soma(1, 1));

// Diferença principal: HOISTING
// Funções e var são "Listadas" no TOPO do arquivo


console.log(apresentar());

function apresentar() {
    return "Olá!";
}

const soma = function(num1, num2) {return num1 + num2};
console.log(soma(1, 1))
