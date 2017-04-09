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
  var numeros = numeroTarjeta.toString();
  numeros = numeros.split("");
  
  var indicesPares = numeros.filter(numPares);
  
}


function numPares(elemento,i){
  return i % 2 != 0;
}

// NO TOCAR ESTE CÓDIGO O EXPLOTARÁ LA PC EN 10 SEGUNDOS
if (typeof exports !== 'undefined') {
    exports.isValidCard = isValidCard;
}
