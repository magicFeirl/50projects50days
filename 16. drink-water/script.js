const smallCups = document.querySelectorAll('.cup.small');
const bigCup = document.querySelector('.cup.big');

const smallCupV = 250;

function add(idx) {
    return () => {
        let delay = 0;
        // 当点击的杯子之前是 active 时，不做特殊处理会导致这个杯子无法被清空
        // 解决方法：判断当前点击的杯子是否是 active 且为最后一个杯子，如果是，清空 active 属性，并设置杯子数量 -1
        let lastCup = false;
        smallCups.forEach((cup, fidx) => {
            if(fidx === idx && cup.classList.contains('active')) {
                lastCup = true;
            }

            cup.classList.remove('active');

            if (fidx <= idx && !lastCup) {
                cup.classList.add('active');
                const progress = cup.querySelector('.progress');
                progress.style.transitionDelay = delay + 's';
                delay += 0.05;
            }
        })

        const progress = bigCup.querySelector('.progress');
        const text = bigCup.querySelector('.text');
        progress.style.height = (idx + !lastCup)  / smallCups.length * 100 + '%';
        text.innerText = (idx + !lastCup) * 250 + 'ml';
    }
}

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', add(idx));
})
