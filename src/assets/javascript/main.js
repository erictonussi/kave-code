window.addEventListener("scroll", scroll_handler);

function scroll_handler() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.body.classList.add('shrink-nav');
    } else {
        document.body.classList.remove('shrink-nav');
    }
}
