

document.onscroll = function() {
    //http://jsfiddle.net/cSer6/46/
    if(document.documentElement.scrollTop + window.innerHeight == document.documentElement.scrollHeight)
    {
        getData()
        console.log('bottom');
    }
}

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
            console.log(paragraf)
            fuckThisBullshit.insertAdjacentElement('beforeend', paragraf);
    

        });
    }

const fuckThisBullshit = document.getElementById('fuuuck');