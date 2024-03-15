// Muestra u oculta el botón de subida dependiendo del desplazamiento de la página
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
        document.getElementById("btnGenerico").style.display = "block";
    } else {
        document.getElementById("btnGenerico").style.display = "none";
    }
}

// Desplaza hacia la parte superior de la página cuando se hace clic en el botón de subida
function scrollToTop() {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
}

function goBack() {
    window.history.back();
}

/*function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');}*/

    document.addEventListener('DOMContentLoaded', function () {
        const btn = document.getElementById('modo-nocturno-btn');
        const body = document.body;
    
        btn.addEventListener('click', function () {
            body.classList.toggle('dark-mode');
            if (body.classList.contains('dark-mode')) {
                // Si el modo nocturno está activado, almacenamos el estado en localStorage
                localStorage.setItem('modoNocturnoActivado', true);
            } else {
                // Si el modo nocturno está desactivado, eliminamos el estado de localStorage
                localStorage.removeItem('modoNocturnoActivado');
            }
        });
    
        // Comprobamos si el modo nocturno está activado en localStorage al cargar la página
        if (localStorage.getItem('modoNocturnoActivado')) {
            body.classList.add('dark-mode');
        }
    });
    