/**
 * 
 * FUNCIONES -> js -> tipos de datos
 * Una función es un bloque de código diseñado para realizar una tarea específica.
 * 
 */

//como duenos de una empresa necesitamos una funcion que calcule el descuento de un producto en oferta
function calcularDescuento(precio, porcentajeDescuento) {
    const descuento = (precio * porcentajeDescuento) / 100;
    const precioConDescuento = precio - descuento;
    return precioConDescuento;
}

const precioOriginal = 1000;
const porcentajeDescuento = 15;
const precioFinal = calcularDescuento(precioOriginal, porcentajeDescuento);
console.log("El precio original es: Q" + precioOriginal);
console.log("El porcentaje de descuento es: " + porcentajeDescuento + "%");
console.log("El precio final con descuento es: Q" + precioFinal);


