// let zmienKolor = document.getElementById("toggle");
// zmienKolor.addEventListener("click", () => {
//     zmienKolor.classList.toggle("active");
// })

// zmienKolor.style.color="blue";

const ustawTlo = () => {
    let pierwszy = document.getElementById ("pierwszy");
    let drugi = document.getElementById ("drugi");

    pierwszy.style.backgroundColor="blue";
    drugi.style.backgroundColor="green";

}

let click = document.getElementById ("click");
click.addEventListener('click', ustawTlo);
console.log(click);

let formularz = document.getElementById("formularz");
//console.log(formularz);

//let imie = document.getElementById ("imie");
//console.log(imie.value);


const pobierz = (e) => {
    e.preventDefault();
    let imie = document.getElementById ("imie");
    let nazwisko = document.getElementById ("nazwisko");

    console.log(imie.value);
    console.log(nazwisko.value);

}

formularz.addEventListener('submit', pobierz);