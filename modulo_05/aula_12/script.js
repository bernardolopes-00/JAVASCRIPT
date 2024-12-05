// Exercicio 1
let carrinho = ["Produto A", "Produto B"];
carrinho.push("Produto C");
carrinho.shift();

console.log(carrinho);

// Exercicio 2
let produtos = ["Produto X", "Produto Y"];
produtos.push("Produtos Z");
console.log(produtos);

let carrinho2 = ["Produto A", "Produto B"];

let novoArray = produtos.concat(carrinho2);
console.log(novoArray);

// Exercicio 3
let estoque = ["Caderno", "Lápis", "Estojo"];

console.log(estoque.includes("Lápis"));
console.log(estoque.includes("Agenda"));

// Exercicio 4
let numeros = [2, 5, 8, 1];

let resultadoSome = numeros.some((numero) => numero > 7);
console.log("Resultado:", resultadoSome);

// Exercicio
let listaNumeros = [4, 6, 8, 2];

let resultadoEvery = listaNumeros.every((numero) => numero > 3);
console.log("Resultado:", resultadoEvery);
