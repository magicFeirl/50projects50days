const numbers = document.querySelectorAll(".numbers input");

numbers[0].focus();

numbers.forEach((number, idx) => {
    number.addEventListener("keydown", (e) => {
        if (e.key >= 0 && e.key <= 9) {
            numbers[idx].value = "";
            if (idx + 1 < numbers.length) {
                setTimeout(() => numbers[idx + 1].focus(), 10);
            }
        }
    });
});
