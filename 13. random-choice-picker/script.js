const choices = document.querySelector('.choices');
const textarea = document.querySelector('.input');

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value);

    if (e.key === 'Enter') {
        setTimeout(() => e.target.value = '', 10);
        choiceRandomTag();
    }
})


function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());
    choices.innerHTML = '';

    tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('choice');
        tagEl.innerText = tag;
        choices.appendChild(tagEl);
    })
}


function choiceRandomTag(){
    const times = 30; // random 30 times

    const ivl = setInterval(() => {
        const tag = getRandomTag();
        if(tag) {
            // highlight
            highlightTag(tag);
            // timeout -> cancel highlight
            setTimeout(() => {
                unhighlightTag(tag)
            }, 100)
        }
    }, 100)

    // cancel interval
    setTimeout(() => {
        clearInterval(ivl);
        const tag = getRandomTag();
        highlightTag(tag);
    }, times * 100);
}

function highlightTag(tag) {
    tag.classList.add('highlight');
}

function unhighlightTag(tag) {
    tag.classList.remove('highlight');
}

function getRandomTag() {
    const tags = document.querySelectorAll('.choice')
    return tags[Math.floor(Math.random() * tags.length)]
}
