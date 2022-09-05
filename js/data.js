URL = "https://jsonplaceholder.typicode.com/posts";
fetch(URL)
    .then((response) => {
        return response.json();
    })
    .then((data) => {

        for (let i = 0; i < 100; i++) {
            var main = document.getElementById('scroll');
            var card = document.createElement('td');
            card.setAttribute('id', 'card');
            var p = document.createElement('p');
            var p1 = document.createElement('p');
            var p2 = document.createElement('p');
            var p3 = document.createElement('p');
            var p4 = document.createElement('p');
            var p5 = document.createElement('p');
            p1.innerHTML = "userId : " + data[i].userId;
            p2.innerHTML = "Id : " + data[i].id;
            p3.innerHTML = "title : " + data[i].title;
            p4.innerHTML = "body: " + data[i].body;

            card.appendChild(p);
            card.appendChild(p1);
            card.appendChild(p2);
            card.appendChild(p3);
            card.appendChild(p4);
            card.appendChild(p5);
            main.appendChild(card);
        }
    })
    .catch((error) => {
        main.innerText = "Error : " + error;
    });