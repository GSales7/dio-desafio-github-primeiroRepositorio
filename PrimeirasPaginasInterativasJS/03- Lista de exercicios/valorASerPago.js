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

const precoEtiqueta = 100.00;

const tipoPagamento = 5;

if (tipoPagamento === 1) {
    const valorASerPago = precoEtiqueta * 0.9;
    console.log('O preço a ser pago será: ' + valorASerPago.toFixed(2));
} else if (tipoPagamento === 2) {
    const valorASerPago = precoEtiqueta * 0.85;
    console.log('O preço a ser pago será: ' + valorASerPago.toFixed(2));
} else if (tipoPagamento === 3) {
    const valorASerPago = precoEtiqueta;
    console.log('O preço a ser pago será: ' + valorASerPago.toFixed(2));
} else if (tipoPagamento === 4){
    const valorASerPago = precoEtiqueta * 1.1;
    console.log('O preco a ser pago será: ' + valorASerPago.toFixed(2));
} else {
    console.log('Forma de Pagamento Inválida!');
}
/* const tipoPagamento = '3x';
if (tipoPagamento === 'Débito') {
    const valorASerPago = precoEtiqueta * 0.9;
    console.log('O preço a ser pago será: ' + valorASerPago.toFixed(2));
} else if (tipoPagamento === 'Dinheiro' || tipoPagamento === 'PIX') {
    const valorASerPago = precoEtiqueta * 0.85;
    console.log('O preço a ser pago será: ' + valorASerPago.toFixed(2));
} else if (tipoPagamento === '2x') {
    const valorASerPago = precoEtiqueta;
    console.log('O preço a ser pago será: ' + valorASerPago.toFixed(2));
} else {
    const valorASerPago = precoEtiqueta * 1.1;
    console.log('O preco a ser pago será: ' + valorASerPago.toFixed(2));
} */