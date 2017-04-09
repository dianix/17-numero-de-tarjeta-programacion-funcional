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
  var numeroString = (numeroTarjeta.toString()).split("");
  var numeros = numeroString.map(convertirNumeros);
  console.log(numeros);
  //var indicesNones = (numeros.filter(numImpares)).reverse();
  //var indicesPares = (numeros.filter(numPares)).reverse();
  var paresMultiplicados = numeros.map(multiplicacionPares);
  
  var numerosSumar = paresMultiplicados.map(reducirNum);
 
}

function convertirNumeros(numero){
  return parseInt(numero);
}

function numPares(elemento,i){
  return i % 2 != 0;
}
function numImpares(elemento,i){
  return i%2 == 0;
}

function multiplicacionPares(elemento,i){
  if(i%2 != 0){
    return elemento*2;
  }else{
    return elemento;
  }
}

function reducirNum(num){
  if(num > 9){
    return num-9;
  }else{
    return num;
  }
}

// NO TOCAR ESTE CÓDIGO O EXPLOTARÁ LA PC EN 10 SEGUNDOS
if (typeof exports !== 'undefined') {
    exports.isValidCard = isValidCard;
}
