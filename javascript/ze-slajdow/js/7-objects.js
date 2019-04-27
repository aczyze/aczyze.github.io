'use strict';

console.log('Próba');

let kaja = {
    imie: "Kaja",
    wzrost: 152,
    przedstawOsobe() {
        console.log(this.imie);
    }
}

kaja.przedstawOsobe();

console.log(kaja.wzrost)

let monetaZl = {
    promien: 20,
    nominal: 100,
    waga:50,
    material: "zloto"
}

console.log(monetaZl.material)