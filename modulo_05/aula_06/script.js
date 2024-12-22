// split(delimiter[, limit]);

let texto = "maça banana          laranja                 uva";
// let frutas = texto.split(","); // delimitador ,
// let frutasLimite = texto.split(",", 4); // delimitador + limite de elementos da nossa lista
// let frutas0 = texto.split();

let frutas = texto.split(/\s+/);

console.log(frutas);

// splice(indice, numeroDeItensRemover, item1...)
frutas.splice(1, 2);
console.log(frutas);
