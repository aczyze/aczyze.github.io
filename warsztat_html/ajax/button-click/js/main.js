// metoada nauczyvielki ze sprytna metoda na paragraf

const button = document.getElementById('daj');

const getData= async () => {
    // async powstrzymuje wykonanie do zaladowania danych?
    
    const data = fetch('https://jsonplaceholder.typicode.com/users/1') 
    .then(response => response.json())
    .then(response => {
        const user = response;
        const paragraf = document.createElement('p');


            // tu ponizej to nie cudzyslow tylki tilda
            paragraf.innerHTML = `
            <span>User ID: ${user.id}</span><br/>
            <span>User NAME: ${user.name}</span><br/>
            <span>User WEBSITE: ${user.website}</span><br/>
            `;

            // bylo alternatywne rozwiazanie, nie zanotowalem     

            button.insertAdjacentElement('afterend', paragraf);
    

        });
    }
    
    button.addEventListener('click', getData, false); // funkcja bez nawiasu zeby nie wywolywala sie na zaladowaniu strony tylko na guziku


// ------- moja metoda która dzialala
    // const getData= async () => {
// // async powstrzymuje wykonanie do zaladowania danych?

//     fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(response =>response.json())
//     .then(response=>{

//         console.log(response)

//         const destination = document.getElementById('dane');

//         destination.innerHTML = response.id + '<br>' + response.title;
//     });
// }

// const button = document.getElementById('daj');

// button.addEventListener('click', getData, false); // funkcja bez nawiasu zeby nie wywolywala sie na zaladowaniu strony tylko na guziku