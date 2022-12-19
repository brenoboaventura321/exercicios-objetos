const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
];

for (const itens of usuarios) {
  if (itens.idade > 17) {
    itens.maiorDeIdade = true;
  }else {
    itens.maiorDeIdade = false;
  }
}
console.log(usuarios);
