//$('#naglowek-1').hide('slow').show('slow');

//$('p').hide('slow').show('slow');

//$('#naglowek-1').fadeOut('slow').fadeIn('slow');
//$('#naglowek-1').slideUp('slow').slideDown('slow');

//!!!!!!!!!!!!!!!!!do zmiany koloru potrzebna biblioteka

function przesunNaSrodek() {
    $('#naglowek-1').animate({
        'margin-left': '500px',
        'font-size': '4em'
    }, 3000, przesunWLewo);
}

function przesunWLewo() {
    $('#naglowek-1').delay(1000).animate({
        'margin-left': '0px',
        'font-size': '1em' // probowalismy initial/inherit ale nie dziala
    }, 3000, przesunNaSrodek)
}

przesunNaSrodek();