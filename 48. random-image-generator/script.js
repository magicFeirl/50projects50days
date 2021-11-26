const container = document.querySelector(".container");

function generateRandomImage(size) {
    for (let i = 0; i < size; i++) {
        const img = document.createElement("img");
        const [x, y] = getRandomSize(300, 300);

        img.src = `https://source.unsplash.com/random/${x}x${y}`;
        container.appendChild(img);
    }
}

function getRandomSize(x, y) {
    const getRandomNum = () => Math.floor(Math.random() * 10);
    return [getRandomNum() + x, getRandomNum() + y];
}

generateRandomImage(18);

window.addEventListener("scroll", () => {
    const html = document.querySelector("html");
    if (html.scrollTop + html.clientHeight > html.scrollHeight * 0.9) {
        generateRandomImage(18);
    }
});
