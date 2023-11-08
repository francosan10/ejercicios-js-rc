// 11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)

let numero = prompt("Ingrese un número");

if (
  numero % 2 === 0 ||
  numero % 3 === 0 ||
  numero % 5 === 0 ||
  numero % 7 === 0
) {
  switch (true) {
    case numero % 2 === 0:
      document.write("Es divisible por 2 <br>");
      break;
    case numero % 3 === 0:
      document.write("Es divisible por 3 <br>");
      break;
    case numero % 5 === 0:
      document.write("Es divisible por 5 <br>");
      break;
    case numero % 7 === 0:
      document.write("Es divisible por 7 <br>");
      break;
    default:
      document.write(`${numero} no es divisible por 2, 3, 5 ni 7`);
      break;
  }
}
