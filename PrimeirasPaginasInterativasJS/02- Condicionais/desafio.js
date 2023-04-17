/*Fazer programa para calcular o valor gasto em combustível em uma viagem.

Você terá 3 variáveis. Sendo elas:
 1- Preço do etanol;
 2- Preço da gasolina;
 3- Tipo de combustivel que sera utilizado;
 4- Gasto médio de combustível do carro po km
 5- Distância em km da viagem
 
 Imprima no console o valor que será gasto para realizar a viagem.*/

const precoEtanol = 4.12;
const precogasolina = 5.39;
const tipoCombustivel = 'etanol';
const kmPorLitro = 10.2;
const distanciaViagem = 100; //Em KM


if (tipoCombustivel == 'etanol') {
    const valorFinal = (distanciaViagem / kmPorLitro) * precoEtanol;
    console.log('O valor gasto para realizar a viagem será: ' + valorFinal.toFixed(2));
}
else {
    const valorFinal = (distanciaViagem / kmPorLitro) * precogasolina;
    console.log('O valor gasto para realizar a viagem será: ' + valorFinal.toFixed(2));
}

//OBS.: Uma característica do JS é que as variáveis criadas com let e const não conseguem
//ser visualizadas fora das chaves que foram criadas. Assim, neste caso, colocamos pra dentro
//o console.log()



