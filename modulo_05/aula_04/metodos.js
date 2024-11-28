// String - Sequência de caracteres
let string = "Olá, Mundo!";

console.log(string.toUpperCase()); // letras maiúsculas
console.log(string.toLowerCase()); // letras minúsculas

// slice(start,end)
// console.log(string[5]);

console.log(string.slice(2, 5));
console.log(string.slice(-6)); // da  trás para frente - inverso

// substring(start, end)
console.log(string.substring(0, 5));
// console.log(string.substring(-6)); // converte 0 = substring(0);
console.log(string.substring(7, 3)); // inverter esse valores (3, 7);
