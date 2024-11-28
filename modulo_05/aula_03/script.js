function saudacao(nome) {
  return `Olá, ${nome}`;
}

// console.log(saudacao("Bernardo"));
// console.log(saudacao("Paulo"));
// console.log(saudacao("José"));

saudacao("Ana");

const pessoa = {
  nome: "Bernardo",
  saudacao: function () {
    return `Olá, ${pessoa.nome}`;
  },
};

pessoa.saudacao();
