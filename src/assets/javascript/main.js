var querySelector = document.querySelector.bind(document);

window.addEventListener('scroll', scroll_handler);

function scroll_handler() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.body.classList.add('shrink-nav');
    } else {
        document.body.classList.remove('shrink-nav');
    }
}

scroll_handler();

querySelector('.menu-icon').addEventListener('change', function(event) {
  if ( event.currentTarget.checked ) {
    document.body.style.overflow = 'hidden';
  } else {
    // debugger;
    document.body.style.overflow = '';
  }
})
