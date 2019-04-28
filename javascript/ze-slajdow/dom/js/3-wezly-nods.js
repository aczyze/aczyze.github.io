"user strict";

let pierwszyDiv = document.getElementById('parFirst');
console.log(pierwszyDiv);
console.log(pierwszyDiv.parentNode);
console.log(pierwszyDiv.parentElement);

console.log(pierwszyDiv.childNodes);
console.log(pierwszyDiv.childNodes[1]);
console.log(pierwszyDiv.children);

console.log(pierwszyDiv.firstChild);
console.log(pierwszyDiv.lastChild);

let pierwszyChild = pierwszyDiv.childNodes[0];
console.log(pierwszyChild);
console.log(pierwszyChild.nextElementSibling.nextElementSibling);

pierwszyChild = pierwszyDiv.childNodes[6];
console.log(pierwszyChild);
console.log
(pierwszyChild.previousElementSibling);