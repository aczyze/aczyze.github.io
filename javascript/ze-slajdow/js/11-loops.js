'use strict';

/* console.log('Próba');

for (let i=10 ; i>0 ; i --) {
    console.log(i);
}  */

let tablica = ['Krystian', 'Monika', 'Danuta'];

for (let u=0; u < tablica.length; ++u) {
    console.log(tablica[u]);
}

const iteruj = (element, index) => {
    console.log("Element z Indexem: " + index + " ma wartość " + element)
}

tablica.forEach(iteruj);

tablica.forEach((element, index ) => {
    console.log("Element z Indexem: " + index + " ma wartość " + element);
});

//dla parzystych
tablica.forEach((element, index ) => {
    if (index % 2 ==0) {
    console.log("Element z Indexem: " + index + " ma wartość " + element);
    }
});

//for in

let person = {
    name: 'Krystian',
    age: 35
}

for(let key in person) {
    console.log(person[key]);
}

//petla for of
let iterable = [10,20,30];

for (let value of iterable) {
    value += 1;
    console.log(value);
}

let it=0;
while (it<18) {
    console.log(it);
    it++;
}

let iter=20;
do {
    console.log(iter);
    iter++;
} while (it<10)

//przerywanie pętli

let a=0;
while (a<10) {
    console.log(++a);

    if (a==5) {
        break;
    }
} 

for ( let b = 0; b < 10 ; ++b ) {
    if (b == 5) {
        continue;
    } else {
        console.log(b);
    }
    console.log("--");
}