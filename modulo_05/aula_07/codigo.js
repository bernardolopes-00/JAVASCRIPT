// Exercício 1
let string = "javascript é divertido";
let resultado = string.replace("javascript", "javascript".toUpperCase());
console.log(resultado);

// Exercício 2
let str = "Aprendendo Javascript";
let palavra = str.substring(0, 10).toLocaleLowerCase();
console.log(palavra);

// Exercício 3
let str2 = "Aprendendo Python";
let resultado2 = str2.replace("Python", "Javascript");
// let fraseNova = str2.replace(resultado2, "Javascript");
// let resultado2 = str2.slice(11);
console.log(resultado2);

// Exercício 4
let lista = "cadeira, mesa, sofá, armário";

let array = lista.split(", ");
console.log(array);

array.splice(array.indexOf("sofá"), 1);
console.log(array);
