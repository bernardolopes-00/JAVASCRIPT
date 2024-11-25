// Exercicio 1
// let listaProdutos = ["Celular", "Pc Gamer", "Monitor"];
// console.log(listaProdutos[1]);
// listaProdutos[2] = "Notebook";
// console.log(listaProdutos);

// // Exercicio 2
// let listaClientes = ["João", "Maria", "Carlos"];
// listaClientes[listaClientes.length] = "Bernardo";
// console.log(listaClientes);
// listaClientes.length = listaClientes.length - 1;
// console.log(listaClientes);

// Exercicio 3
// let produto = {
//   nome: "Televisão",
//   preco: 1500,
//   qtde: 10,
// };
// console.log(produto.nome);
// console.log(produto["nome"]);
// produto.preco = 1400;
// // produto["preco"] = 1400;
// console.log(produto);

// Exercicio 4
let venda = {
  cliente: "Bernardo",
  produto: "Celular",
  valor: 1500,
};
venda.data = "22-11-2024";
delete venda.produto;
console.log(venda);

// Exercicio 5
let estoque = ["WebCam", "Tablet", "Mouse"];
let novoEstoque = [...estoque];
novoEstoque[2] = "Notebook";
console.log(novoEstoque);
console.log(estoque);
let funcionario = {
  nome: "Bernardo",
  cargo: "Vendedor",
  salario: 5500,
};

let novoFuncionario = { ...funcionario };
novoFuncionario.cargo = "Gerente";
console.log(novoFuncionario);
console.log(funcionario);
