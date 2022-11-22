produtosConsumidos = [
    {
        nome: "Pão de Alho",
        precoUnit: 1500,
        quantidade: 5
    },
    {
        nome:"Cerveja",
        precoUnit: 1000,
        quantidade: 2
    },
    {
        nome: "agua",
        precoUnit:500,
        quantidade: 1
    }
];

const cartao = {
    nome: "josé",
    idade: 30,
    produtosConsumidos
}

console.log(cartao);
console.log(cartao.nome);
console.log(cartao.idade);

cartao.idade = 31;
console.log(cartao.idade);

console.log(produtosConsumidos[0].nome);
console.log(produtosConsumidos[produtosConsumidos.length -1].precoUnit);

let valorASerPago = 0;

for (let produto of produtosConsumidos){
    valorASerPago += produto.precoUnit * produto.quantidade;
}
console.log(`Sr(a) ${cartao.nome}, o total a pagar é de R$ ${(valorASerPago/100).toFixed(2)}`);