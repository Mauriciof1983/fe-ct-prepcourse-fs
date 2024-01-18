function esMayorDeEdad(fechaNacimiento) {
  // La función recibe un argumento "fechaNacimiento" correspondiente a la fecha
  // de nacimiento de una persona.
  // Determina si esta persona es mayor de edad (tiene 18 años o más).
  // Devuelve true si lo es, caso contrario, retorna false.
  // PISTA: Investiga el método getFullYear() de la clase Date para obtener el año actual.
  // Tu código:
      // Obtenemos la fecha actual
      var fechaActual = new Date();
    
      // Obtenemos el año de nacimiento de la fecha de nacimiento proporcionada
      var añoNacimiento = new Date(fechaNacimiento).getFullYear();
    
      // Calculamos la edad restando el año de nacimiento al año actual
      var edad = fechaActual.getFullYear() - añoNacimiento;
    
      // Comprobamos si la edad es mayor o igual a 18
      console.log(edad)
      return edad >= 18;
}

module.exports = esMayorDeEdad;