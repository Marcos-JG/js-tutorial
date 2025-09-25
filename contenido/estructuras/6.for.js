/**
 * 
 *      CICLO FOR -> PARA
 * 
 */

/*
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    */

let lista = ["comer","dormir","code","repetir"]
for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
    console.log("-------------------------------------")
    }

//FOR-OF -----------------------> FOR EACH
let canasta = ["manzanas","naranjas","mangos","uvas"]

for (frutas of canasta) {
    console.log(frutas)
    console.log("-------------------------------------")
}


//FOR-IN
// itera sobre las propiedades de un objeto
const canastaDeFrutas = {
    nombre : "manzana",
    precio : 5.0,
    tipo : "verde",
    marca : "Chanitas apples"
}

for (fruta in canastaDeFrutas) {
    console.log(fruta)
}

for(fruta in canastaDeFrutas){
    console.log(`${fruta}: ${canastaDeFrutas[fruta]}`)
}

for (fruta of canastaDeFrutas) {
    console.log(fruta)
}