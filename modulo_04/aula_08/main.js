// Funções de Alta Ordem
// - Recebem uma ou mais funções como argumento
function aplicarOperacao(x, operacao) {
  // Função de alta ordem
  return operacao(x);
}

function dobrar(numero) {
  return numero * 2;
}

const resultado = aplicarOperacao(5, dobrar);
console.log(resultado);

// - Recebem uma função como resultado

function criarIncrementador(incremento) {
  // Função de Alta Ordem
  return function (numero) {
    return numero + incremento;
  };
}

const incrementoPor2 = criarIncrementador(2);
console.log(incrementoPor2(5));