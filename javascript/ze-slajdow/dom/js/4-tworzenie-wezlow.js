"user strict";

let btn = document.createElement("button");
console.log(btn)
let txtBtn = document.createTextNode("Kliknij mnie!");
console.log(txtBtn);
let classBtn = document.createAttribute("class");
classBtn.value = "btn";
console.log(classBtn);

//teraz appendami łączymy te elementy w całość
btn.appendChild(txtBtn);
btn.setAttributeNode(classBtn);
btn.setAttribute("onclick","btnClick();");

//wrzucanie na stronę
document.body.appendChild(btn);

//usuwanie
btn.removeAttribute("onclick");

btn.parentElement.removeChild(btn);
//document.body.removeChild(btn);