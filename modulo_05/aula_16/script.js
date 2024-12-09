const produto = {
  nome: "Laptop",
  preco: 2500,
  disponibilidade: true,
};

Object.assign(produto, { emEstoque: 10, categoria: "Eletronicos" }); // adicionar novas propriedades.
console.log(produto);

Object.defineProperty(produto, "disponibilidade", { value: "false" }); // modificar o valor de uma propriedade.
console.log(produto);

const pessoa = {
  nome: "Carlos",
  idade: 30,
};

const trabalho = {
  profissao: "Programador",
  cidade: "Pedra Azul",
};

const funcionario = {};
Object.assign(funcionario, pessoa, trabalho); // Copia para um objeto destino
//console.log(funcionario);

Object.defineProperty(funcionario, "salario", {
  // Adicionar uma nova propriedade
  value: 2000,
  enumerable: true,
  writable: true,
  configurable: true,
});
console.log(funcionario);

delete funcionario.cidade;
console.log(funcionario);
