var mouseLeftScreen = false;

window.addEventListener('mousemove', (event) => {
    if (!mouseLeftScreen) {
        if (event.clientX <= 0 || event.clientY <= 0 ||
            event.clientX >= window.innerWidth ||
            event.clientY >= window.innerHeight) {
            mouseLeftScreen = true;
            alert('Calmaê usuário!');
        }
    }
}); 