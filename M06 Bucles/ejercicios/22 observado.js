function diasEnMes(mes) {
  // La función recibe un mes(número) por argumento.
  // Determine cúantos días tiene el mes correspondiente a ese número.
  // PISTA: Usa un bucle do-while para validar que el mes ingresado sea válido.
  // Tu código:

   // Validar que el mes esté en el rango válido (1 a 12)
   do {
    if (mes < 1 || mes > 12) {
      
      // Solicitar nuevamente el mes al usuario
      mes = prompt("Ingresa un número de mes válido:");
    }
  } while (mes < 1 || mes > 12);

  // Determinar la cantidad de días en el mes
  switch (mes) {
    case 2:
      return "28 o 29 días, dependiendo si es año bisiesto";
    case 4:
    case 6:
    case 9:
    case 11:
      return "30 días";
    default:
      return "31 días";
  }
}

module.exports = diasEnMes;
