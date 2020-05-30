window.addEventListener("load", event => launchPlayer());

const launchPlayer = () => {
    var AV = require('av');
    require('mp3.js');

    var player = AV.Player.fromURL('https://www.youtube.com/watch?v=eHoA-W3F9hI');

    console.log(player);
    var bouton = document.createElement("button");
    document.body.appendChild(bouton);
    bouton.style.backgroundImage = "lecture.png";
    var img = document.createElement("img");
    img.src = "lecture.png";
    bouton.style.padding = "0px";
    bouton.appendChild(img);



    bouton.addEventListener('click', function () {
        player.play();
    });



    var titre = document.createElement("p");
    document.body.appendChild(titre);
    titre.textContent = "Titre : ";

    var auteur = document.createElement("p");
    document.body.appendChild(auteur);
    auteur.textContent = "Auteur : ";

    var album = document.createElement('p');
    document.body.appendChild(album);
    album.innerHTML = "Album : ";

    var duree = document.createElement('p');
    document.body.appendChild(duree);
    duree.innerHTML = "Durée : ";

    var restant = document.createElement('p');
    document.body.appendChild(restant);
    restant.innerHTML = "Restant : ";
}




