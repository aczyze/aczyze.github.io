'use strict';

console.log('Próba');

let wyplata = 5000;
let premia = 2500;
let calkowitaWyplata;

calkowitaWyplata = wyplata + premia

console.log(calkowitaWyplata);
console.log(typeof calkowitaWyplata);

//string
let wyplataStr = "5000";
let premiaStr = "2500";
let calkowitaWyplataStr;

calkowitaWyplataStr = wyplataStr + premiaStr

console.log(calkowitaWyplataStr);
console.log(typeof calkowitaWyplataStr);

//boollean

let czyJestSmog
czyJestSmog = true;

if (czyJestSmog) {
    console.log("Jest SMOG");
} else {
    console.log("Nie ma SMOGa");
}

// undefined/null

let niezdefiniowanaZmienna;
let nullowaZmienna = null;

console.log(niezdefiniowanaZmienna*2)
console.log(nullowaZmienna*2);

//znaki specjalne
let imieStudenta = "Michał\"Kroszka\" ";
console.log(imieStudenta)

//znaki specjalne 2 (w ES6)
let nazwisko = "Kroszka";
imieStudenta = `Michał ${nazwisko}`;
console.log(imieStudenta)

