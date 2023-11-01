// 11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)

const numero = prompt('Ingrese un número');

if (numero % 2 === 0) {
    document.write(`${numero} es divisible por 2.`);
} else if (numero % 3 === 0) {
    document.write(`${numero} es divisible por 3.`);
} else if (numero % 5 === 0) {
    document.write(`${numero} es divisible por 5.`);
} else if (numero % 7 === 0) {
    document.write(`${numero} es divisible por 7.`);
} else {
    document.write(`${numero} no es divisible por 2, 3, 5 ni 7`);
}

// falta completar