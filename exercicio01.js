const dados= {
    nome : 'José',
    idade : 30,
    altura : 1.73,
    cnh : false,
    apelido : ['Jr', 'Juninho']
};

if(dados.cnh){
    dados.cnh = 'possui CNH';
}else{
    dados.cnh = 'não possui CNH';
}

console.log(`${dados.nome} tem ${dados.idade} anos, ${dados.altura}m de altura, ${dados.cnh} e os seguintes apelidos:
- ${dados.apelido[0]}
- ${dados.apelido[1]}
`);