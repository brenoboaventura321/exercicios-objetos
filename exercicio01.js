const dados= {
    nome : 'José',
    idade : 30,
    altura : 1.73,
    cnh : false,
    apelido : ['Jr', 'Juninho']
};

let textoCNH = (dados.cnh===true ? "possui CNH" : "Não possui CNH");

console.log(`${dados.nome} tem ${dados.idade} anos, ${dados.altura}m de altura, ${textoCNH} e os seguintes apelidos`);
for (let apelido of dados.apelido){
    console.log(`-${apelido}`);
}