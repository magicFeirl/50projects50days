const nav = document.querySelector('nav');

document.addEventListener('scroll', (e) => {
    const doc = document.querySelector('html');
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = doc;

    if (scrollTop > clientHeight * 3 / 6) {
        if (!nav.classList.contains('active')) {
            nav.classList.add('active');
        }
    } else {
        nav.classList.remove('active');
    }
})
