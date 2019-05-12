
const getData= async () => {
    if (window.scrollY + window.innerHeight > document.body.offsetHeight) {
        fetch('https://jsonplaceholder.typicode.com/users/1') 
            .then(response => response.json())
            .then(response => {
                const user = response;
                const paragraf = document.createElement('p');


                
                    paragraf.innerHTML = `
                    <span>User ID: ${user.id}</span><br/>
                    <span>User NAME: ${user.name}</span><br/>
                    <span>User WEBSITE: ${user.website}</span><br/>
                    `;

                        
                    console.log(paragraf)
                    fuckThisBullshit.insertAdjacentElement('beforeend', paragraf);
            }                
        }
                });
    

window.addEventListener('scroll', getData)