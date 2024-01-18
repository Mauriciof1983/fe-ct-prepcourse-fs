function esPositivo(num) {
  // La función recibe un entero. Devuelve como resultado un string que indica si el número
  // es positivo o negativo.
  // Si el número es positivo ---> "Es positivo".
  // Si el número es negativo ---> "Es negativo".
  // Si el número es 0, devuelve false.
  // Tu código:
  if (num > 0){
    return ("Es Positivo");
  }else if (num < 0){
    return ("Es Negarivo");
  }else {
    return false;
  }
}

module.exports = esPositivo;