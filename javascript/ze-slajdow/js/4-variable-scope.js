'use strict';

console.log('Próba');

let kontoLukasza= 1000000;

const zrobZakupy = (zaIle) => {
    let kontoNatalii = 2000000

    let ileZostaloNaKoncie = kontoLukasza - zaIle;

    return ileZostaloNaKoncie;
}
//uzywamy raczej zmiennych lokalnych, to znaczy wewnatrz funkcji, nie ma do niej dostepu spoza funkcji

console.log(zrobZakupy(500000));