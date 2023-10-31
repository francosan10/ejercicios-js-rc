// 6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

const numero1 = prompt('Ingrese un número');
const numero2 = prompt('Ingrese otro número');

if (numero1 > numero2) {
    document.write(`${numero1} es mayor que ${numero2}`);
} else {
    document.write(`${numero2} es mayor que ${numero1}`);
}