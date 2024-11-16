// Redeclarações
let nome = "Bernardo"; // ERRO 
const nomeProfessor = "Daniel"; // ERRO

var mensagem = "Olá";
console.log(mensagem);
var mensagem = "Bem Vindo!";
console.log(mensagem);

// Reatribuições - Mutabilidade
nome = "Lira";
console.log(nome);

mensagem = "Olá, Bem Vindo!";
console.log(mensagem);
// TIPO CONST - ERRO

// Hoisting
var segundaMensagem; // não atribui nenhum valor
console.log(segundaMensagem);
var segundaMensagem = "Utilizando Hoisting";
console.log(segundaMensagem);

// console.log(terceiraMensagem);
// const terceiraMensagem = "Olá eu sou let"; // Let e const - Não fazem Hoisting

// Visibilidade

{
    console.log("Isso é um bloco");
    let idade = 60;
    const real = 50;
    console.log(idade);
    console.log(real);
}

// {instruções} // bloco de instrução
// function () {instruções - tarefa especificas} // bloco de função

function executar() {
    // instruções dentro da função
    console.log("Dentro da função");
    var numero = 10;
    console.log(numero);
}