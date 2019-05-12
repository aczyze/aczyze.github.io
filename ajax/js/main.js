// AJAX FETCH
// Pobierz dane z adresu URL - funkcja fetch(zwraca obiekt Promise - Obietnica)
// Jeśli Promise zostanie rozwiązany to fetch() zwróci obiekt odpowiedzi (response)
// Zwracamy obiekt odpowiedzi przetworzony na obiekt JSON
// Od tego momemtu możemy korzystać z tych danych
// fetch('https://jsonplaceholder.typicode.com/posts') // lub /1 , co to oznaczalo?
// .then(response =>response.json())
// .then(response=>{
// console.log(response);
// });

// 2.AJAX $.getJSON(). To samo można przez fetch

// $.getJSON('https://jsonplaceholder.typicode.com/posts',
//     response => {
//         console.log(response);
//     }
// )

// 3 AJAX - $.AJAX() *zostawiłem tu sobie ten pierwszy element

// $.ajax({
//     url: "https://jsonplaceholder.typicode.com/users/1",
//     dataType: "json",
//     success: function (resultJSON) {
//     console.log(resultJSON);
//     },
//     onerror: function (msg) {
//     console.log(msg);
//     }
//     });
   
const ajax = (method, url) => {
    // tworzymy obiekt
    let httpReq= new XMLHttpRequest();

    // otwieramy połączenie
    httpReq.open(method,url);

    // w momencie dotarcia do serwera
    httpReq.onreadystatechange = () => {

        // jezeli sie udalo i dane zostaly zwrocone
        if (httpReq.readyState === 4 && httpReq.status === 200) {

            //wrzucamy gotowe dane do zmiennej
            let response = httpReq.responseText;
            // !!! .parse potrzebujemy, zeby teraz zaczac odwolywac sie do tego zciagnietego obiektu
            response = JSON.parse(response);
            console.log(response);

            // rozlaczamy sie z serwerem
            httpReq = null;

        }
    }

    // wywolanie funkcji(wysylamy polaczenie)
    httpReq.send();

}

setInterval(() => {
    ajax('GET', 'https://jsonplaceholder.typicode.com/users');
}, 3000);