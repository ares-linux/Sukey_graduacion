document.addEventListener('DOMContentLoaded', () => {
    
    const startBtn = document.getElementById('start-btn');
    const startScreen = document.getElementById('start-screen');
    const mainContent = document.getElementById('main-content');
    const bgMusic = document.getElementById('bg-music');

    // Manejar el clic del botón de inicio
    startBtn.addEventListener('click', () => {
        // Intentar reproducir la música de fondo
        bgMusic.play().then(() => {
            console.log("Audio reproducido con éxito.");
        }).catch(error => {
            console.error("La reproducción de audio falló:", error);
            alert("No se pudo reproducir el audio automáticamente. Por favor comprueba tus permisos o intenta de nuevo.");
        });

        // Ocultar la pantalla de inicio con fade out
        startScreen.classList.remove('active');
        startScreen.classList.add('hidden');

        // Mostrar el contenido principal con un pequeño retraso para sincronizar con la música
        setTimeout(() => {
            mainContent.classList.remove('hidden');
            mainContent.classList.add('active');
            
            // Forzar reflow para asegurar las transiciones
            void mainContent.offsetWidth;
            
        }, 800);
    });
});
