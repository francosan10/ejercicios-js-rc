// 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen

let frase = prompt('Ingrese una frase');
frase = frase.toLowerCase();
// console.log(frase.length)
// console.log(frase.charAt(0)); 
// console.log(frase.substring(0,3));
let vocales = "";

for (let i = 0; i < frase.length; i++) {
    letra = frase[i];
    console.log(letra);
    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
        vocales += letra;
        console.log(vocales);
    }
}

document.write(`las vocales de la frase son: ${vocales}`);