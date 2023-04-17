const camisetaRenanAzul = true;
const camisetalemaoAzul = false;

const numero = 12;
/* const numeroPar = (numero % 2) == 0; só com dois iguais ele ignora o tipo*/
/*
const isnumeropar = (numero % 2) === 0; //Aqui leva em consideração os tipos das variaveis
//console.log(isnumeropar);

 if(isnumeropar){
    console.log("O numero eh par!");
}

if(!isnumeropar){
    console.log("O numero eh impar!");
}

if(isnumeropar) {
    console.log('Par');
} else {
    console.log("Impar");
}*/

const numeroDivisivelPor5 = (numero % 5) === 0;
console.log(numeroDivisivelPor5)

if (numeroDivisivelPor5 === 0) {
    console.log("O número é inválido!");
}
else if(numeroDivisivelPor5) {
    console.log('Par');
} else {
    console.log("Impar");
}