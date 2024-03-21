//Dato un array di oggetti letterali con:
 //url dell’immagine
 //titolo
 //descrizione
//Creare un carosello come nella foto allegata.
//Al click dell'utente sulle frecce verso alto o basso, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
//Milestone 2:
//Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso l'alto, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso il basso.

//creo un array di oggetti 
//con l'URL dell'immagine, titolo e descrizione
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morales',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

let activeItem = 0;

//Per ogni immagine nell'array la leggo e la inserisco in pagina come immagine e come thumbnails
const imagesContainer = document.querySelector('.images-container');
const thumbnailsContainer = document.querySelector('.thumbnails-container');

for(let i = 0; i < images.length; i++) {
    const thisImage = images[i];

    const newImage = `
    <div class="image">
        <img src="${thisImage.image}">
        <div class="text">
            <h1>${thisImage.title}</h1>
            <p>${thisImage.text}</p>
        </div>
    </div>
    `;

    imagesContainer.innerHTML += newImage;

    const newThumbnail = `
    <div class="thumbnail">
        <img src="${thisImage.image}">
    </div>
    `;

    thumbnailsContainer.innerHTML += newThumbnail;
}

//aggiungere la classe active alla prima immagine
const allImages = document.querySelectorAll('.image');
allImages[activeItem].classList.add('active');

const allThumbnails = document.querySelectorAll('.thumbnail');
allThumbnails[activeItem].classList.add('active');

//al click sulle frecce
const nextArrow = document.querySelector('.arrow.next');
nextArrow.addEventListener('click', function() {
    //rimuovere la classe active dall'immagine 
    document.querySelector('.image.active').classList.remove('active');
    document.querySelector('.thumbnail.active').classList.remove('active');

    //aumentare activeItem di 1
    if(activeItem < allImages.length - 1) {
        activeItem++;
    } else {
        activeItem = 0;
    }

    //aggiungere la classe active alla nuova immagine
    allImages[activeItem].classList.add('active');
    allThumbnails[activeItem].classList.add('active');
});

const previousArrow = document.querySelector('.arrow.before');
previousArrow.addEventListener('click', function() {
    //rimuovere la classe active dall'immagine
    document.querySelector('.image.active').classList.remove('active');
    document.querySelector('.thumbnail.active').classList.remove('active');

    //diminuire activeItem di 1
    if(activeItem > 0) {
        activeItem--;
    } else {
        activeItem = allImages.length - 1;
    }

    //aggiungere active alla nuova immagine
    allImages[activeItem].classList.add('active');
    allThumbnails[activeItem].classList.add('active');
});