/*
    1) Faça um algorítimo que dado 3 notas de um aluno no semestre, calcule e imprima a média e a
    sua classificação conforme a tabela abaixo:

    media = (nota1 + nota2 + nota3) / 3;

    Classificação:
    - Média menor que 5, reprovado;
    - Média entre 5 e 7, recuperação;
    - Média maior que 7, aprovado;
*/

const nota1 = 5;
const nota2 = 5;
const nota3 = 5;

const media = (nota1 + nota2 + nota3) / 3;
console.log('A média do aluno foi: ' + media.toFixed(2))

if (media > 7) {
    console.log('Aprovado');
} else if (media >= 5 && media <= 7) {
    console.log('Recuperação')
} else {
    console.log('Reprovado')
}