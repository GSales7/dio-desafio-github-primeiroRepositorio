/*Fazer programa para calcular o valor gasto em combustível em uma viagem.

Você terá 3 variáveis. Sendo elas:
 1- Preço do combustível
 2- Gasto médio de combustível do carro po km
 3- Distância em km da viagem
 
 Imprima no console o valor que será gasto para realizar a viagem.*/

const precoCombustivel = 5.39;
const kmPorLitro = 10.2;
const distanciaViagem = 100; //Em KM

const valorFinal = (distanciaViagem / kmPorLitro) * precoCombustivel;

console.log("O valor gasto para realizar a viagem será: " + valorFinal.toFixed(2));
