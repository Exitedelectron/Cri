let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    slideIndex++;

    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    }

    const offset = -slideIndex * 100; // Calcola la posizione orizzontale
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;

    setTimeout(showSlides, 3000); // Cambia immagine ogni 3 secondi
}

document.addEventListener('DOMContentLoaded', showSlides);
