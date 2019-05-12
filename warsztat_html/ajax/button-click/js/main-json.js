$(function () {

    //let clicked = false // to byla czesc proby zeby sie raz klikal
    const getData = () => {

        $.getJSON(
            "https://jsonplaceholder.typicode.com/users/1",
            response => {

                const paragraf = $("<p>");
                const user = response;

                paragraf.html(`
        <span>User ID: ${user.id}</span><br/>
        <span>User NAME: ${user.name}</span><br/>
        <span>User WEBSITE: ${user.website}</span><br/>
        `);

                $('#daj').after(paragraf);
            });
    }
    $('#daj').click(() => {
        getData();
        // if (!clicked) {
        //     getData();
        //     clicked = true;
        // } else {
        //     return;
        // }

    })
});
