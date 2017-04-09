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
}

//Para prueba 3
function cantidadDigitos(creditCardNumber){
    var numero = creditCardNumber.toString();
    if(numero.length == 16){
        return(true);
    }
}

// NO TOCAR ESTE CÓDIGO O EXPLOTARÁ LA PC EN 10 SEGUNDOS
if (typeof exports !== 'undefined') {
    exports.isValidCard = isValidCard;
}
