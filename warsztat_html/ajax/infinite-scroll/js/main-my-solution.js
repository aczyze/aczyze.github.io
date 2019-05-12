
document.onscroll = function() {
    
    if(document.documentElement.scrollTop + window.innerHeight == document.documentElement.scrollHeight)
    {
        getData()
        console.log('bottom');
    }
}

const getData= async () => {
    // async powstrzymuje wykonanie do zaladowania danych?
    
    const data = fetch('https://jsonplaceholder.typicode.com/users') 
    .then(response => response.json())
    .then(data => {

        data.forEach(user => {
            const paragraf = document.createElement('p');

            paragraf.innerHTML = `
            <span>User ID: ${user.id}</span><br/>
            <span>User NAME: ${user.name}</span><br/>
            <span>User WEBSITE: ${user.website}</span><br/>
            `;

            fuckThisBullshit.insertAdjacentElement('beforeend', paragraf);

        })  

        });
    }

const fuckThisBullshit = document.getElementById('fuuuck');

// alternatywnie z klasy:
//window.addEventListener('scroll',getData)