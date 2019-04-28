"user strict";

let parSecond = document.querySelector("#parSecond");
console.log(parSecond);

// const klikAlert = () => {
//     alert("kliknięto diva :)");
// }

//dodatkowa opcja z parametrem:
const klikAlert = (e) => {
    e.preventDefault() // na przyklad blokowanie zeby link nas gdzies przeniosl
    alert("kliknięto diva :)");
    // console.log(e.target);
    console.log(e);
}

//drugi sposob uruchomienia funkcji(bez wpisu onclick w css, i bez nawiasu. To jest callback, zapisac z nawiasem to od razu przy zaladowaniu strony by to wyswietlal:
// parSecond.onclick = klikAlert;

//trzeci sposob ktorego uzywac
parSecond.addEventListener('click', klikAlert);

//event listener z funkcja anonimowa
// parSecond.addEventListener('click', () => {
//     alert('anonimowa funkcja click')
// });

// parSecond.removeEventListener('click', klikAlert);

let link = document.querySelector('.link');
link.addEventListener('click', klikAlert);

//-----------

let parWParSecond = document.getElementById ("parWParSecond");
console.log(parWParSecond);

const klikDiv = (e) => {
    console.log("Kliknięto DIV");
}

const klikParagraf = (e) => {
    e.stopPropagation();
    console.log("Kliknięto PARAGRAF");
}

parSecond.addEventListener("click", klikDiv);
parWParSecond.addEventListener("click",klikParagraf);