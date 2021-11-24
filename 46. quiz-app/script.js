const questions = [{
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        ans: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        ans: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        ans: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        ans: "b",
    },
];

const container = document.querySelector(".container");
const questionTitle = document.querySelector(".question");
const ansEls = document.querySelectorAll('input[name="answer"]');
const label_a = document.querySelector("#a_text");
const label_b = document.querySelector("#b_text");
const label_c = document.querySelector("#c_text");
const label_d = document.querySelector("#d_text");
const submit = document.querySelector(".submit");

let currentAnsIdx = 0;
let passCount = 0;

function getSelectedAnswer() {
    let answer = null;

    ansEls.forEach((e) => {
        if (e.checked) {
            answer = e.id;
        }
    });

    return answer;
}

function loadQuiz() {
    deselectAllQuiz();
    questionTitle.innerText = questions[currentAnsIdx].question;
    label_a.innerText = questions[currentAnsIdx].a;
    label_b.innerText = questions[currentAnsIdx].b;
    label_c.innerText = questions[currentAnsIdx].c;
    label_d.innerText = questions[currentAnsIdx].d;
}

function deselectAllQuiz() {
    ansEls.forEach((e) => {
        e.checked = false;
    });
}

loadQuiz();

submit.addEventListener("click", () => {
    const ans = getSelectedAnswer();

    if (!ans) {
        return;
    }

    if (ans === questions[currentAnsIdx].ans) {
        passCount++;
    }

    currentAnsIdx++;

    if (currentAnsIdx < questions.length) {
        loadQuiz();
    }

    if (currentAnsIdx === questions.length) {
        container.innerHTML = `
          <h2 style="height: 55px;">You answered ${passCount}/${questions.length} question correctly.</h2>
          <button class="submit" onclick="location.reload()">Reload</button>
        `;
    }
});
