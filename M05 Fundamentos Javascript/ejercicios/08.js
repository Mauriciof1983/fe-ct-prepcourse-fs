function esNumeroEntero(numero) {
  // La función recibe un argumento "numero".
  // Verifica si este es un número entero o no.
  // Returna true si lo es, de lo contrario, retorna false.
  // Tu código:
  if (numero % 1 === 0){
    return true;
   }else {
    return false;
   }
}
esNumeroEntero(10)

module.exports = esNumeroEntero;