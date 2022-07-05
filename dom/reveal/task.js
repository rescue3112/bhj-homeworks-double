const items = Array.from(document.querySelectorAll('.reveal'));

document.addEventListener('scroll',scrollHandler);

function scrollHandler () {
    items.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < window.innerHeight && elementTop > 0) {
            element.classList.add('reveal_active');
        } else {
            element.classList.remove('reveal_active');
        }
    });
}
