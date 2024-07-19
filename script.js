document.addEventListener('DOMContentLoaded', (event) => {
    let slideIndex = 0;
    const slides = document.querySelectorAll('#slides .carousel-image');
    const totalSlides = slides.length;
    let carouselInterval;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${(i - index) * 100}%)`;
        });
    }

    function nextSlide() {
        slideIndex = (slideIndex + 1) % totalSlides;
        showSlide(slideIndex);
    }

    function prevSlide() {
        slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
        showSlide(slideIndex);
    }

    function changeSlide(direction) {
        clearInterval(carouselInterval);
        if (direction === 1) {
            nextSlide();
        } else {
            prevSlide();
        }
        carouselInterval = setInterval(nextSlide, 5000);
    }

    function startCarousel() {
        showSlide(slideIndex);
        carouselInterval = setInterval(nextSlide, 5000);
    }

    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    if (prevButton && nextButton) {
        prevButton.addEventListener('click', () => {
            changeSlide(-1);
        });

        nextButton.addEventListener('click', () => {
            changeSlide(1);
        });
    } else {
        console.error("Botões de navegação não encontrados.");
    }

    startCarousel();

    // Formulário de Contato
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        console.log('Form data:', Object.fromEntries(formData));
        alert('Formulário enviado com sucesso!');
        form.reset();
    });
});












