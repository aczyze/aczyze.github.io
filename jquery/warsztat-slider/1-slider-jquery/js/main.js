$(() => {
    // variables
    // zapisujemy to w funkcji, dlatego, ze funkcja nie odpali sie przed zaladowaniem strony, tak na wszelki wypadek
        const slideShow = $('.slide-show');
        const singleSlides = $('.single-slide');
        const slideCount = singleSlides.length; // chodzi o długość array
        const slideWidth = 100 / slideCount;
        const arrowRight = $('.next-slide');
        const arrowLeft = $('.prev-slide');
        let indexCounter = 0

    // USTAWIAMY DYNAMICZNIE SZEROKOSC KONTENERA
    slideShow.css('width', slideCount * 100 + '%'); // chodzi o to zeby tu dostac stringa. Dzieki tej formule tutaj, mamy kontener ktoey wyjezdza odpowiednio daleko za marginesy

    // USTAWIAMY DYNAMICZNIE SZEROKOSC OBRAZKOW
    singleSlides.each(function(index) /*tu nie dziala strzalkowa*/ {
        $(this).css({
            'width': slideWidth + '%',
            'margin-left': index * slideWidth + '%'
        })
    })

    // PODPINANIE EVENTOW POD STRZALKI
    arrowRight.on({
        'click': function() {
            slide(indexCounter + 1)
        }

    });

    arrowLeft.on({
        'click': function() {
        slide(indexCounter - 1);
        }

    });

    function slide(newIndex) { // do tej funkcji odwolanie jest powyzej, wiec newIndex = indexCounter - 1
        console.log(newIndex)
        if (newIndex < 0 || newIndex >= slideCount) {
            return; // return wychodzi z funkcji
        }

        // UKRYWAMY NAPIS
        const currentTitle = $('.slide-caption').eq(newIndex);
        currentTitle.fadeOut();

        //WZOR DO NASZEJ ANIMACJI, PRZESUWA CALY KONTENER W LEWO
        const marginLeft = newIndex * (-100) + '%'

        // WYWOLANIE ANIMACJI
        slideShow.animate({'margin-left': marginLeft
    }, 1000, function () {
        currentTitle.fadeIn();
    });
        indexCounter = newIndex
    }
})


// jak zapetlic zeby chodzilo w kolko?

// strona z gotowymi rozwiazaniami http://kenwheeler.github.io/slick/