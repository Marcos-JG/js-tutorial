/*
            TIPO DE DATO NUMBER `number`

*/

// 1. entero
const enter = 33
const decimal = 3.34
//2.notacion cientifica
const cientifica = 5e4
//3.  inf y NaN(no es un numero)
const infinito = Infinity
const noEsNumero = NaN


//OPERACIONES ARITMETICAS
//1. suma,resta,multiplicacion y division

const suma = 5+6
const resta = 5-6
const multiplicacion = 5*6
const division = 5/6

//2.modulo y exponenciacion

const modulo = 16%8 //0
const exponenciacion = 2**3 //8

//La Presicion de JavaScript
const resultado = 0.1 + 0.2 //0.30000000000000004
console.log(resultado)
console.log(resultado.toFixed(1))
console.log(resultado.toFixed(1)==0.3) //false