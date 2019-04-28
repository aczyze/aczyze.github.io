"user strict";

//przypisujemy naglowek strony do zmiennej
let mainHeader = document.getElementById('header');

console.log(mainHeader.innerHTML);
console.log(mainHeader.innerText);
console.log(mainHeader.outerText);
console.log(mainHeader.outerHTML);

mainHeader.id = "nowe-id";

mainHeader.setAttribute("class", "header");

mainHeader.className = "nowa-klasa";

console.log(mainHeader.outerHTML);

let klasy = mainHeader.className;

console.log(klasy);

let zmienKolor = document.getElementById("toggle");
zmienKolor.addEventListener("click", () => {
    zmienKolor.classList.toggle("active");
})

//kolory zmienione w java script nadpisuja toggle, bo sa wpisane jako inline w html. Mozemy to importantem zablokowac
zmienKolor.style.color="blue";
