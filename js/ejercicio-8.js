// 8.- Escribe un programa que pida un número y diga si es divisible por 2

const numero = prompt('Ingrese un número');

if (numero % 2 === 0) {
    document.write(`${numero} es divisible por 2.`);
} else {
    document.write(`${numero} NO es divisible por 2.`);
}