function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:

   // Convertir el string a minúsculas y quitar espacios en blanco
   const textoProcesado = string.toLowerCase().replace(/\s/g, '');

   // Invertir el string y comparar con el original
   const textoInvertido = textoProcesado.split('').reverse().join('');
   
   return textoProcesado === textoInvertido;
}

module.exports = esPalindromo;
