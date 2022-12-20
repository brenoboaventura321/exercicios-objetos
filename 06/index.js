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

const jovens = [];

const adultos = [];

for (const item of usuarios) {
  if (item.idade > 17) {
    adultos.push(item);
  }else {
    jovens.push(item);
  }
}

console.log("Jovens: ");
for (const jovem of jovens) {
  console.log(jovem.nome);
}

console.log("Adultos: ");
for (const adulto of adultos)  {
  console.log(adulto.nome);
}
