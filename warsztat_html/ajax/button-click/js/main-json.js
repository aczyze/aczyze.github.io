$(function() {
    
    let button = $('#daj');

    const getData= async () => {

        $.getJSON(
            "https://jsonplaceholder.typicode.com/users/1", 
            function (data){

        const user = data;
        const paragraf = $("p").add().appendTo( document.body );

        paragraf.html ( `
        <span>User ID: ${user.id}</span><br/>
        <span>User NAME: ${user.name}</span><br/>
        <span>User WEBSITE: ${user.website}</span><br/>
        `);


    }

    button.click(getData)
});
