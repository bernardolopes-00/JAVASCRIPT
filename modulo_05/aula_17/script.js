const pessoa = {
  cidade: "Rio de Janeiro",
  surf: true,
  falar: function () {
    console.log("Olá!");
  },
};

const carro = {
  modelo: "Ferrari",
  marca: "Ferrari Marca",
};

const joao = Object.create(pessoa); // Herdar de um objeto
Object.assign(joao, carro); // Copiar as propriedades
joao.falar();
console.log(joao.cidade, joao.surf);
joao.nome = "João"; // propriedade nome
joao.idade = 30; // propriedade

console.log(joao);

console.log(joao.hasOwnProperty("surf"));
