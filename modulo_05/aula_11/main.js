let frutas = ["maça", "melão", "manga", "kiwi"];

console.log(frutas.includes("manga"));
console.log(frutas.includes(50));

console.log(
  frutas.every(function (fruta) {
    return fruta.includes("m");
  })
); // localizar todos os elementos

console.log(
  frutas.some(function (fruta) {
    return fruta.includes("m");
  })
); // localiza algum elemento

console.log(frutas.join())