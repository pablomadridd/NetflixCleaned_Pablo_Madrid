
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


// Animacion Movies 

document.addEventListener('DOMContentLoaded', () => {
    const movies = document.querySelectorAll('.movie');
    movies.forEach((movie, index) => {
        movie.style.animationDelay = `${index * 0.2}s`; // Escalonar animaciones
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const homeBackground = document.querySelector('#home .background-container');

    if (homeBackground) {
        for (let i = 0; i < 36; i++) {
            const div = document.createElement('div');
            div.className = 'animate-me';
            homeBackground.appendChild(div);
        }

        const divs = homeBackground.querySelectorAll('.animate-me');

        divs.forEach((div, i) => {
            // Generar coordenadas aleatorias para las posiciones iniciales
            const randomX = Math.random() * 100 - 50; // Entre -50% y 50%
            const randomY = Math.random() * 100 - 50; // Entre -50% y 50%

            div.style.setProperty('--x', randomX);
            div.style.setProperty('--y', randomY);

            // Aplicar animaciones
            div.animate([
                {
                    transform: 'scale(0)',
                    opacity: 0,
                },
                {
                    transform: `scale(${Math.random() * 1.5 + 0.5}) translate(${randomX}%, ${randomY}%)`,
                    opacity: 1,
                }
            ], {
                duration: 3000,
                easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                delay: i * 100,
                iterations: Infinity,
                direction: 'alternate',
                fill: 'both',
            });
        });
    }
});



// Profile


document.addEventListener('DOMContentLoaded', () => {
    const settingsButton = document.querySelector('.settings-button');
    const settingsPanel = document.querySelector('.settings-panel');
    const closeSettings = document.querySelector('.close-settings');

    settingsButton.addEventListener('click', () => {
        settingsPanel.style.right = '0'; // Mostrar panel
    });

    closeSettings.addEventListener('click', () => {
        settingsPanel.style.right = '-400px'; // Ocultar panel
    });
});


document.addEventListener('DOMContentLoaded', () => {
    // Función para cambiar avatar
    const changeAvatar = () => {
        const newAvatar = prompt("Enter the URL of your new avatar:");
        if (newAvatar) {
            document.querySelector('.profile-avatar').src = newAvatar;
            alert("Avatar updated successfully!");
        }
    };

    // Función para actualizar email
    const updateEmail = () => {
        const newEmail = prompt("Enter your new email address:");
        if (newEmail) {
            document.querySelector('.profile-card p:nth-of-type(1)').textContent = `Email: ${newEmail}`;
            alert("Email updated successfully!");
        }
    };

    // Función para cambiar contraseña
    const changePassword = () => {
        const newPassword = prompt("Enter your new password:");
        if (newPassword) {
            alert("Password updated successfully!");
            // Aquí podrías agregar una lógica para guardar el password en tu backend o base de datos
        }
    };

    // Agregar eventos a los botones
    document.querySelector('.settings-panel li:nth-of-type(1)').addEventListener('click', changeAvatar);
    document.querySelector('.settings-panel li:nth-of-type(2)').addEventListener('click', updateEmail);
    document.querySelector('.settings-panel li:nth-of-type(3)').addEventListener('click', changePassword);
});


const highlightProfileCard = () => {
    const profileCard = document.querySelector('.profile-card');
    profileCard.classList.add('updated');
    setTimeout(() => profileCard.classList.remove('updated'), 500); // Eliminar la clase tras la animación
};

// Llama a `highlightProfileCard()` después de actualizar el avatar o email:
changeAvatar = () => {
    const newAvatar = prompt("Enter the URL of your new avatar:");
    if (newAvatar) {
        document.querySelector('.profile-avatar').src = newAvatar;
        highlightProfileCard();
        alert("Avatar updated successfully!");
    }
};

updateEmail = () => {
    const newEmail = prompt("Enter your new email address:");
    if (newEmail) {
        document.querySelector('.profile-card p:nth-of-type(1)').textContent = `Email: ${newEmail}`;
        highlightProfileCard();
        alert("Email updated successfully!");
    }
};
