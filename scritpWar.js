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

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');}
    