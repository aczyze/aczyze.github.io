'use strict';

console.log('Próba');

let imiona = ['Monika','Krystian','Łukasz'];
imiona[2]='Ela';

console.log(imiona);

imiona.push('Geralt');

console.log(imiona);

imiona.pop();

console.log(imiona);

//w ten sposob wpisane podaje liczbe elementow
console.log(imiona.unshift('Robert'));

console.log(imiona);

console.log(imiona.length);

let imionaStr = imiona.join('-');

console.log(imionaStr);

imiona.reverse();

console.log(imiona);

imiona.unshift('Zenek');

imiona.sort();

console.log(imiona);