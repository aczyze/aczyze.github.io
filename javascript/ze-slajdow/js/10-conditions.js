'use strict';

console.log('Próba');

let wzrostMateusz = 190;
let wzrostOlgi = 190;

if (wzrostOlgi > wzrostMateusz) {
    console.log('Olga jest wyższa :)');
} else if (wzrostOlgi==wzrostMateusz){
    console.log('Olga jest tak wysoka jak Mateusz :)');
} else {
    console.log("Olga jest niższa");
}

let kolor = 'zielony';

//trzeba pisać breaki, inaczej napisze wszystko od case ktory go pusci do srodka
switch (kolor) {
    case 'czerwony':
        console.log('Kolor czerwony');
        break;
    case 'zielony':
        console.log('Kolor zielony');
        break;
    case 'niebieski':
        console.log('Kolor niebieski');
        break;
    default:
        console.log('Inny kolor');

    
}