/*CONVERSIONES -> EXPLICTA E IMPLICITO */

//Conversion Explicit Type Casting

const string = '54'
const integer = parseInt(string)

console.log(typeof string)
console.log(typeof integer)

const float = parseFloat("3.14")

console.log(typeof float)

const binario = '1010' //10
const decimal = parseInt(binario, 2)

console.log(decimal)

const hexa = 'CAFE'
const decimalHexa = parseInt(hexa, 16)

console.log(decimalHexa)


//Conversion Implicit Type Casting
const resultado = '5'+ 3 //8
console.log(typeof resultado)

const sumaConBoolean = '3'+ true
console.log(sumaConBoolean)

const sumaConNumero = 2 + true
console.log(sumaConNumero)

const valorString = '20'
const valorNumber = 20
const valorBoolean = true

console.log('----------------------------------------------------------')

console.log(valorString+valorString)//concatenar
console.log(valorString+valorNumber)//concatenar
console.log(valorString+valorBoolean)//concatenar

console.log('----------------------------------------------------------')

console.log(valorNumber+valorString)//Sumar
console.log(valorNumber+valorNumber)//concatenar
console.log(valorNumber+valorBoolean)//Sumar

console.log('----------------------------------------------------------')

console.log(valorBoolean+valorString)//Sumar
console.log(valorBoolean+valorNumber)//Sumar
console.log(valorBoolean+valorBoolean)//concatenar
