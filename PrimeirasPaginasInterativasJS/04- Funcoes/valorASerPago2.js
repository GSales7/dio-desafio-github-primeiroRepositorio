/* 
    3) Elabore um algorítmo que calcule o que deve ser pago por um produto, considerando o preco normal de etiqueta e
    a escolha de pagamento.
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código Condições de Pagamento:
    1- À vista Débito => recebe 10% de desonto;
    2- À vista Dinheiro ou PIX => recebe 15% de desconto;
    3- Em 2x => preço normal da etiqueta;
    4- Acima de 2x => preco da etiqueta + 10% de juros.

*/

function calcularValorComDesconto(valor, desconto){
    return (valor - (valor * (desconto / 100))).toFixed(2);
}

function aplicarJuros(valor, juros) {
    return (valor + (valor * (juros/100))).toFixed(2);
}

const precoEtiqueta = 100.00;
const tipoPagamento = 3;

if (tipoPagamento === 1) {
    console.log('O preço a ser pago será: ' + calcularValorComDesconto(precoEtiqueta, 10));
} else if (tipoPagamento === 2) {
    console.log('O preço a ser pago será: ' + calcularValorComDesconto(precoEtiqueta, 15));
} else if (tipoPagamento === 3) {
    console.log('O preço a ser pago será: ' + calcularValorComDesconto(precoEtiqueta, 0));
} else if (tipoPagamento === 4){
    console.log('O preco a ser pago será: ' + aplicarJuros(precoEtiqueta, 10));
} else {
    console.log('Forma de Pagamento Inválida!');
}