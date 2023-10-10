window.addEventListener('mousemove', function(e) {
    document.documentElement.style.setProperty('--pointerX', e.clientX + 'px');
    document.documentElement.style.setProperty('--pointerY', e.clientY + 'px');
})