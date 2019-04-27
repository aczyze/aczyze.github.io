'use strict';

console.log('Próba');

//stale zapisujemy duzymi literami, to "samokomentujący się kod"
const PI=3.14;

//let to nowa nazwa, zamiast var, który też jest poprawny i są pozostałości
//camelCase
let promienDuzego = 10;
let promienMalego = 5;

//const vs let: const nie nadpiszemy, a let tak

let poleDuzego = PI * promienDuzego * promienDuzego;

console.log(poleDuzego);