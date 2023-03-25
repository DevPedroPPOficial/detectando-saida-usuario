var mouseLeftScreen = false;

document.addEventListener('mouseleave', (event) => {
    if (!mouseLeftScreen) {
        mouseLeftScreen = true;
        alert('Calmaê usuário!');
    }
});