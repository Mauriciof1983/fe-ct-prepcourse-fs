function esAnagrama(str1, str2) {
  // La función recibe dos argumentos "str1" y "str2" que son strings.
  // Determina si los dos strings son anagramas.
  // Devuelve true de ser así, sino retorna false.
  // IMPORTANTE: Un anagrama es una palabra que se forma
  // con las mismas letras que otra, pero en orden diferente.
  // Tu código:

  // Convertir los strings a minúsculas y quitar espacios en blanco
  const textoProcesado1 = str1.toLowerCase().replace(/\s/g, '');
  const textoProcesado2 = str2.toLowerCase().replace(/\s/g, '');

  // Convertir los strings a arrays, ordenarlos y convertirlos nuevamente a strings
  const strOrdenado1 = textoProcesado1.split('').sort().join('');
  const strOrdenado2 = textoProcesado2.split('').sort().join('');

  // Comparar los strings ordenados
  return strOrdenado1 === strOrdenado2;
}

module.exports = esAnagrama;
