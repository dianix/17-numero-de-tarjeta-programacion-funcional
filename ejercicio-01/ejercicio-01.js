function isValidCard(creditCardNumber) {
    // Escribe tu código aquí
    if(creditCardNumber == undefined){ //Prueba 1
        return("Ingresa un numero");
    }
    if(typeof creditCardNumber != "number"){ //Prueba 2
        return("Error de dato");
    }
    if(cantidadDigitos(creditCardNumber) != true){ //Prueba 3
        return("Faltan numeros");
    }
    if(validarNumero(creditCardNumber) == true){
        return(true);
    } else {
        return (false);
    }
}

//Para prueba 3
function cantidadDigitos(creditCardNumber){
    var numero = creditCardNumber.toString();
    if(numero.length == 16){
        return(true);
    }
}

//Para pruebas 4 y 5
function validarNumero(numeroTarjeta){
  var numeroString = numeroTarjeta.toString();
  numeroString = numeroString.split("");
  var numeros = numeroString.map(convertirNumeros);
  
  var indicesPares = numeros.filter(numPares);
  
}
//Para convertir elementos de arreglo a números
function convertirNumeros(numero){
  return parseInt(numero);
}
//Para seleccionar posiciones pares(como el arreglo empieza en 0 y no 1, son las nones)
function numPares(elemento,i){
  return i % 2 != 0;
}

// NO TOCAR ESTE CÓDIGO O EXPLOTARÁ LA PC EN 10 SEGUNDOS
if (typeof exports !== 'undefined') {
    exports.isValidCard = isValidCard;
}
