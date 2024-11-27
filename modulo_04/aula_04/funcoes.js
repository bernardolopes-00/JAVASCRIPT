// function nomeFuncao(PARÂMETRO) { instrução }

function soma(numero1, numero2) {
  console.log(numero1 + numero2);
}

// nomeFuncao(ARGUMENTO) - Chamada da função (executar o bloco de instruções)

soma(10, 5);

function calculoPrecoTotal(precoUnitaro, quantidade) {
  let total = precoUnitaro * quantidade;
  console.log("O total da sua compra é: " + total);
}

let camiseta = 30;
let quantidadeItem = 3;

calculoPrecoTotal(camiseta, quantidadeItem);
