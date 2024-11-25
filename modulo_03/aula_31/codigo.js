let listaA = [1, 2, 3];

let listaB = listaA;
listaB[0] = 99;

console.log(listaB);
console.log(listaA);

// let string = "Olá";
// let mensagem = string;
// mensagem = "Bem Vindo";
// console.log(string);
// console.log(mensagem);

let objA = { nome: "Bernardo" };
let objB = objA;
objB.idade = 14;

console.log(objB);
console.log(objA);

let listaC = [...listaA]; // [...] -> Cria uma copia
console.log(listaC);
listaC[3] = 100;

console.log(listaC);
console.log(listaA);

let objC = { ...objA };
objC.corDeCabelo = "Preto";
console.log(objC);
console.log(objA);
