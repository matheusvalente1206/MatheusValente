let x = "";

console.log(x);

x = "oi";

// 1 - Declara a Função

                    //String
function imprimeTexto(texto) {
    console.log(texto);
}

// 2 - Executa a Função (1 ou + vezes)

imprimeTexto(soma());
imprimeTexto("Outro Texto");

function soma() {
    return 2 + 2;
}

//console.log(soma());