function esVocal(letra) {
  // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  // Si el usuario ingresa un string de más de un caracter, debes retornar el mensaje: "Dato incorrecto".
  // Si no es vocal, tambien debe retornar "Dato incorrecto".
  // Tu código:
  if (letra > 1){
    console.log("Dato Incorrecto");
    return("Dato incorrecto");
}
if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
    console.log("Es vocal");
    return ("Es vocal");
}else {
    console.log("Dato incorrecto");
    return ("Dato incorrecto")
}

}

module.exports = esVocal;
