/**
 * 
 *      MARCOS JAVIER GARCIA CRUZ #2024412
 *      EJERCICIOS COMBINADOS Y DESAFIOS
 *                  #21
 * 
 */

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function filtrarPares(arr) {
    return arr.filter(num => num % 2 === 0);
}
console.log("Números originales:", numeros);
console.log(filtrarPares(numeros));