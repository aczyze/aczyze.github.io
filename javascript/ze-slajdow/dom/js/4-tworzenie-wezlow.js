"user strict";

let btn = document.createElement("button");
console.log(btn)
let txtBtn = document.createTextNode("Kliknij mnie!");
console.log(txtBtn);
let classBtn = document.createAttribute("class");
classBtn.value = "btn";
console.log(classBtn);

//tera appendami łączymy te elementy w całość
btn.appendChild(txtBtn);
btn.setAttributeNode(classBtn);
btn.setAttribute("onclick","btnClick();");