// Exercicio 1:
const vendas = {
  produto: "TV",
  quantidade: 2,
  precoUnitari: 1500,
  desconto: 10,

  calcularTotal: function () {
    const total = this.quantidade * this.precoUnitari;
    return total - total * (this.desconto / 100);
  },

  detalharVenda: function () {
    return `Produto: ${this.produto},
    Quantidade: ${this.quantidade}, 
    Preço Unitário: ${this.precoUnitari}, 
    Total: ${this.calcularTotal()}`;
  },
};

console.log(vendas.detalharVenda());

console.log(vendas.calcularTotal());

// Exercicio 2