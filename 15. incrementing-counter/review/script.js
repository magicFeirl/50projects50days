const h2Eles = document.querySelectorAll(".container h2");
const inc = 800;
const timeout = 20;

h2Eles.forEach((h2) => {
    const eleVal = +h2.textContent;
    h2.textContent = "0";

    const incFunc = () => {
        const n = +h2.textContent + inc;

        if (n > eleVal) {
            h2.textContent = eleVal;
            return;
        }
        h2.textContent = n;
        setTimeout(incFunc, timeout);
    };

    setTimeout(incFunc, timeout);
});
