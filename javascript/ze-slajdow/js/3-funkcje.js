'use strict';

console.log('Próba');

const PI = 3.14;

//ES5
/* function poleKola(r) {
    let poleKola = PI*r*r;
    console.log(poleKola);
} */

//ES6
    const poleKola=(r,x) => {
    let poleKola = PI*r*r*x;
    return poleKola;
    // console.log(poleKola);
    }

/* poleKola(25,2);

poleKola(50,7); */

let rDuzego=180;
let liczbaDuzych=10;

// poleKola(rDuzego,liczbaDuzych);
let wynikDzialaniaFunkcji = poleKola(rDuzego,liczbaDuzych)

alert(wynikDzialaniaFunkcji)

