let produtos = ["Carrinho", "Boneco", "Bola"];

produtos.push(50, 10, 30); // -> Adiciona no final da lista
console.log(produtos);

produtos.unshift("Video Game"); // -> Adiciona no Inicio da lista
console.log(produtos);

produtos.pop(); // remover o último elemento
console.log(produtos);

produtos.shift(); // remove primeiro elemento
console.log(produtos);
