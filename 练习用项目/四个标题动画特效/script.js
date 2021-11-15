const h1 = document.querySelector('h1')
h1.innerHTML = h1.textContent.replace(/\S/g, "<span>$&</span>")

function setAnimation(name, delay = 0.1) {
    document.querySelectorAll('span').forEach((span, index) => {
        span.style.setProperty('--delay', `${index * delay}s`);
    })

    h1.style.setProperty('--animation', name)
}


document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', e => {

        setAnimation(e.target.getAttribute('data-animation'))
        h1.classList.remove('animate')
        void h1.offsetWidth
        h1.classList.add('animate')
    })
})
