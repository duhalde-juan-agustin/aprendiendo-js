//saber si la suma de los digitos de un numero da 7 (numero de la suerte)
let numero = prompt("Ingresa un número:");

let sumaDigitos = 0;

for (let i = 0; i < numero.length; i++) {
    sumaDigitos += parseInt(numero[i]);
}

if (sumaDigitos === 7) {
    console.log(`¡${numero} es un número de la suerte!`);
} else {
    console.log(`${numero} no es un número de la suerte.`);
}
//seleccionar numero par

let numero_a_ingresar = prompt("Ingresa un número:");

while (isNaN(numero_a_ingresar) || numero_a_ingresar % 2 !== 0) {
    alert("Número no válido. Por favor, ingresa un número par.");
    numero_a_ingresar = prompt("Ingresa un número:");
}

console.log("¡Número válido! Has ingresado un número par.");