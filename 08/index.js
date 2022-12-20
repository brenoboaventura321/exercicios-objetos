const usuarios = [
    {
        nome: "João",
        pets: [],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
];

for (const usuario of usuarios) {
  if (usuario.pets.length === 0) {
    console.log(`Olá, eu sou ${usuario.nome} e não tenho pets`);
  }else if(usuario.pets.length === 1) {
    console.log(`Olá eu sou ${usuario.nome} e tenho 1 pet`);
  }else {
    console.log(`Olá eu sou ${usuario.nome} e tenho ${usuario.pets.length} pets`);
  }
}
