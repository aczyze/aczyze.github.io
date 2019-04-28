"user strict";

let parFirst = document.getElementById('parFirst');
console.log(parFirst);

let linki = document.getElementsByClassName('link superlink');
console.log(linki);

let linkiPoTagu = document.getElementsByTagName('a');
console.log(linkiPoTagu);

//secector - wybiera pierwszy element
let divPoId = document.querySelector('.superLink');
console.log(divPoId);

let pierwszyLinkPoSelektorze = document.querySelector('.superlink');
console.log(pierwszyLinkPoSelektorze);

let linkPoSelektorze = document.querySelectorAll('.superlink');
console.log(linkPoSelektorze);

linkPoSelektorze.forEach( (linkPaczek, i) => {
    console.log(linkPaczek.outerHTML, i);
});