function escrevaMeuNome(nome) {
    console.log('Meu nome é: ' + nome);
    return nome;
}

escrevaMeuNome('Gabriel');
escrevaMeuNome('Renan');

function testarSeMaiorDeIdade(nome, idade) {
    if (idade >= 18) {
        console.log(escrevaMeuNome(nome) + ' é maior de Idade!');
    } else {
        console.log(escrevaMeuNome(nome) + ' é menor de Idade!');
    }
}

testarSeMaiorDeIdade('Gabriel', 20);
testarSeMaiorDeIdade('Gabriel', 18);
testarSeMaiorDeIdade('Gabriel', 15);
