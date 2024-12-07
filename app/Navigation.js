
/**
 * Navigation.js
 * Este archivo gestiona la navegación entre las secciones de la aplicación con un efecto "Cubo".
 */

document.addEventListener('DOMContentLoaded', () => {
    // Inicialización de Swiper con efecto "Cubo"
    const swiper = new Swiper('.swiper', {
        effect: 'cube', // Efecto cubo
        grabCursor: true, // Permitir que el cursor cambie al deslizar
        cubeEffect: {
            shadow: true, // Sombra detrás del cubo
            slideShadows: true, // Sombras en las diapositivas
            shadowOffset: 20, // Desplazamiento de la sombra
            shadowScale: 0.94, // Escala de la sombra
        },
        speed: 1000, // Duración de la transición
        pagination: {
            el: '.swiper-pagination', // Paginación interactiva
            clickable: true, // Permitir clic en los puntos de paginación
        },
        navigation: {
            nextEl: '.swiper-button-next', // Botón para ir a la siguiente diapositiva
            prevEl: '.swiper-button-prev', // Botón para ir a la diapositiva anterior
        },
        keyboard: {
            enabled: true, // Habilitar navegación con teclado
        },
    });

    // Sincronización con los enlaces del menú
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const slideIndex = parseInt(event.target.dataset.slide, 10); // Obtener índice de la diapositiva
            swiper.slideTo(slideIndex); // Navegar a la diapositiva correspondiente
        });
    });

    // Evento al cambiar de sección
    swiper.on('slideChange', () => {
        const activeIndex = swiper.activeIndex; // Índice actual de la diapositiva activa
        console.log(`Sección activa: ${activeIndex}`);

        // Lógica personalizada para secciones específicas
        const activeSlide = document.querySelectorAll('.swiper-slide')[activeIndex];
        const sectionId = activeSlide.querySelector('section')?.id;

        if (sectionId === 'movies') {
            console.log('Sección Movies activa');
        } else if (sectionId === 'profile') {
            console.log('Sección Profile activa');
        } else if (sectionId === 'home') {
            console.log('Sección Home activa');
        }
    });
});
