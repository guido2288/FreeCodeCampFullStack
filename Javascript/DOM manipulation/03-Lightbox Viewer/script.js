let lightbox = document.querySelector('.lightbox');
let galleryImg = document.querySelectorAll('.gallery-item');
let lightboxImage = document.querySelector('#lightbox-image');
let closeBtn = document.querySelector('#close-btn');



galleryImg.forEach( image => {
    image.addEventListener('click', (e) => {
    
        let imgPick = e.target.alt;
    
        lightbox.style.setProperty('display', 'flex');
        lightboxImage.setAttribute('src', `https://cdn.freecodecamp.org/curriculum/labs/${imgPick}.jpg`);
    })

} );


closeBtn.addEventListener('click', () => {
    lightboxImage.setAttribute('src', '');
    lightbox.style.setProperty('display', 'none');
})