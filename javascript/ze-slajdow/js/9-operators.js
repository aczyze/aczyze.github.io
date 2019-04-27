'use strict';

console.log('Próba');

let liczba1 = 8, liczba2 = 3;

let wynik;

wynik = liczba1 % liczba2;
console.log(wynik);

//liczba1 = liczba 1 + 100
liczba1 += 100;
console.log(liczba1)

if ("2" === 2) {
    console.log("prawda")
} else {
    console.log("nie")
}

// ! oznacza negację

if (!(("2" !== 2) && (8<4))) {
    document.write("<br> prawda")
} else {
    console.log("nie")
}

let wynikLogiczny = (5>=5) ? "prawda" : "fałsz";
console.log(wynikLogiczny);