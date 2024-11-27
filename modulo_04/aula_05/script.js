// Retorno de uma função

let pedido = {
  id: 1234,
  nome: "Bernardo",
  email: "bernardo@exemple.com",
  lanche: 12,
  batataFrita: 6,
  suco: 4,
};

function enviarNotificacao(nome, idPedido, email) {
  // simular o envio de um email
  console.log(
    `Enviando email para ${email} confirmando o pedido de número ${idPedido}`
  );
  console.log(`Mensagem: ${nome} pedido confirmado`);
  // não possu retorno explicito
}

//enviarNotificacao(pedido.nome, pedido.id, pedido.email);

// Função principal que irá calcular e retonar o valor do pedido

function processarPedido(id, item1, item2, item3) {
  let totalPedido = item1 + item2 + item3;
  console.log("Pedido: " + id + " Processando");
  console.log("O total do pedido é : " + totalPedido);
  return totalPedido; // encerou a função
}

let retornoDaFuncao = processarPedido(
  pedido.id,
  pedido.lanche,
  pedido.batataFrita,
  pedido.suco
);

console.log(retornoDaFuncao + retornoDaFuncao);
