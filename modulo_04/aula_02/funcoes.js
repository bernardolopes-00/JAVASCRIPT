// function nomeFuncao() { instrução } - Sintaxe básica

// Mensagem para iniciar o cadastro
function enviarMensagem() {
  console.log("Para continuar você precisa informar seu nome para cadastro!");
}

//enviarMensagem();

// Cadastro de usuário

function cadastrar(nome, sobrenome) {
  console.log(`Olá ${nome} ${sobrenome}, você foi cadastrado com sucesso!`);
}

//cadastrar("Bernardo", "Lopes");

// operações matemáticas

function banco(deposito, saque) {
  let saldo = deposito - saque;
  return saldo;
}

//console.log(banco(1000, 600));

// função principal

function main() {
  enviarMensagem();
  cadastrar("Bernardo", "Lopes");
  let saldo = banco(10000, 780);
  console.log(`O saldo atual da sua conta é de ${saldo} reais`);
}

main();
