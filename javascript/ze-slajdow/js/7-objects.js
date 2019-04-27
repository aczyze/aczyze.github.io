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

class Osoba {

constructor(imie,nazwisko,wzrost,oczy) {
    this.imie = imie || "imie";//jak imie to podaj to imie a jak nie to "imie" jako placeholder
    this.nazwisko = nazwisko;
    this.wzrost = wzrost;
    this.oczy = oczy;
}

wyswietlInfo() {
    console.log("Imię: " + this.imie + "\n" +
        "Nazwisko: " + this.nazwisko +"\n" +
        "Wzrost: " + this.wzrost + "\n" +
        "Oczy: " + this.oczy + "\n")
}
}

let krystian = new Osoba('Krystian', 'Dziopa', 180, "Niebieskie")
krystian.wzrost=170
krystian.wyswietlInfo();
console.log(krystian)
