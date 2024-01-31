function sumarHastaNConBreak(n) {
  // La función recibe un numero n por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Si la suma supera a 100, detén el bucle usando break.
  // Tu código:
  let suma = 0;

  // Utilizar un bucle for para sumar los números desde 1 hasta n
  for (let i = 1; i <= n; i++) {
    suma += i;

    // Si la suma supera a 100, detener el bucle usando break
    if (suma > 100) {
      break;
    }
  }

  return suma;
}

module.exports = sumarHastaNConBreak;