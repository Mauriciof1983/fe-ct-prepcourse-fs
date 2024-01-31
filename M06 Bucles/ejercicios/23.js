function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:

  let contador = 0;

  // Utilizar un bucle do-while para aumentar el valor de num hasta 8 veces
  do {
    num += 5;
    contador++;
  } while (contador < 8);

  // Devolver el valor final
  return num;
}

module.exports = doWhile;