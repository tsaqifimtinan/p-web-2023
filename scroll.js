var scroll = document.querySelector('.scroll');
window.addEventListener('scroll', function() {
    var value = window.scrollY;
    scroll.style.transfrom = `scaleY(${value})`;
})