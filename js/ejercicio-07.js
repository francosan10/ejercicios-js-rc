// 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

const numero1 = prompt('Ingrese primer número');
const numero2 = prompt('Ingrese segundo número');
const numero3 = prompt('Ingrese tercer número');

if (numero1 > numero2 && numero1 > numero3) {
    document.write(`${numero1} es mayor que ${numero2} y ${numero3}`);
} else if (numero2 > numero1 && numero2 > numero3) {
    document.write(`${numero2} es mayor que ${numero1} y ${numero3}`);
} else if(numero3 > numero1 && numero3 > numero2){
    document.write(`${numero3} es mayor que ${numero1} y ${numero2}`);
} else {
    document.write(`Los 3 números son iguales`);
}