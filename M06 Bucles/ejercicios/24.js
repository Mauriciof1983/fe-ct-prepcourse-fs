function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  
    // Dividir el string en un array de caracteres, invertir el array y unir los caracteres de nuevo
    return texto.split('').reverse().join('');
}

module.exports = invertirTexto;