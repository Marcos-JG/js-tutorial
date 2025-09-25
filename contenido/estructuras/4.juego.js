/**
 * 
 * SE SOLICITE UN NUMERO A USUARIO PARA ADIVINAR UN NUMERO SECRETO
 * QUE SERA GENERADO ALEATORIAMENTE ENTRE EL RANGO 1y 10
 * 
 */

const numeroSecreto = Math.floor(Math.random()*11-1)
const numeroJugador = parseInt(prompt("Adivina el numero secreto, entre 1 y 10"))

console.log(`EL NUMERO QUE INGRESASTE ES:  ${numeroJugador}`)

if (numeroJugador == numeroSecreto) {
    console.log("FELICIDADES HAS ADIVINADO EL NUMERO SECRETO")
} else if(numeroJugador < numeroSecreto) {
    console.log("CASIII, PERO EL NUMERO SECRETO ES MAS GRANDE")
}else{
    console.log("CASII, PERO EL NUMERO SECRETO ES MAS PEQUEÑO")
}

console.log("EL NUMERO SECRETO ERA: " + numeroSecreto)