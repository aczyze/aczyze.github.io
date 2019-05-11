// let paragrafy = $('p');
// console.log(paragrafy.text())

// paragrafy.text('Nowy tekst paragrafow')

// to jest metoda innerhtml?

// let paragrafyByHtml = $('p');
// console.log(paragrafyByHtml.html())

// paragrafyByHtml.html('<span>Treść znacznika span</span>')

// let naglowek2 = $('#naglowek-2');
// naglowek2.prepend('prependujemy tresc | ');
// naglowek2.append(' | apendujemy tresc');

// naglowek2.before('beforujemy tresc | ');
// naglowek2.after(' | afterujemy tresc'); 

// naglowek2.empty();
// naglowek2.remove();

// naglowek2.replaceWith("<span> Span <span>"); //outerHTML in pure JS

//let paragrafy = $('p');
//paragrafy.css('background-color', 'green');

// a jak chcemy zmienic kilka wlasciwosci na raz to robimy tak (przekrztalcamy w obiekt):

// let paragrafy = $('p');
// paragrafy.css({
//     'background-color': 'green',
//     'font-size': '2em',
//     'color': 'yellow',
// });

// let pierwszyParagraf = $('.par').eq(0);
// console.log(pierwszyParagraf);

// pierwszyParagraf.addClass('red')

// // pierwszyParagraf.text('red is bad, noooot')

// pierwszyParagraf.removeClass()

$('input#input-1').val('Jan Kowalski');

$('input#input-1').change(function() {
    console.log($(this).val());
});