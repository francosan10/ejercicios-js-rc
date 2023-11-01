// 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen

const frase = prompt('Ingrese una frase');

console.log(frase.length)
// console.log(frase.charAt(0)); 
// console.log(frase.substring(0,3));
vocales = "";

for (let letra = 0; letra < frase.length; letra++) {
    console.log(letra);
    if ('aeiouAEIOU'.includes(frase)) {
        vocales += letra;
        console.log(vocales);
    }
}

// falta hacer