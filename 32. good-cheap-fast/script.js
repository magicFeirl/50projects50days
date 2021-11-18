const cheap = document.querySelector("#cheap");
const good = document.querySelector("#good");
const fast = document.querySelector("#fast");
const labels = document.querySelectorAll(".toggle");

labels.forEach((label) => {
    label.addEventListener("change", (e) => {
        const is_cheap = cheap.checked;
        const is_good = good.checked;
        const is_fast = fast.checked;
        const theClickedOne = e.target;

        if (is_cheap && is_good && is_fast) {
            if (good === theClickedOne) {
                fast.checked = false;
            }

            if (cheap === theClickedOne) {
                good.checked = false;
            }

            if (fast === theClickedOne) {
                cheap.checked = false;
            }
        }
    });
});
