const titles = document.querySelectorAll(".title");
const speedEle = document.querySelector("#speed");

speedEle.addEventListener("input", (e) => {
  let speed = +e.target.value;

  if (speed < 1) {
    speed = 1;
  }

  if (speed > 10) {
    speed = 10;
  }

  e.target.value = speed;
});

titles.forEach((title) => {
  autoTextEffect(title);
});

function autoTextEffect(title) {
  const chars = title.textContent.split("");
  title.innerText = "";

  chars.forEach((c, idx) => {
    setTimeout(() => {
      title.innerText = title.textContent + c;

      if (idx == chars.length - 1) {
        setTimeout(() => {
          autoTextEffect(title);
        }, 500);
      }
    }, idx * 500);
  });
}
