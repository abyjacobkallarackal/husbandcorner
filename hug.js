let current = 0;
let score = 0;

const questions = document.querySelectorAll(".question");

function showNext() {
  questions[current].classList.remove("active");
  current++;

  if (current < questions.length) {
    questions[current].classList.add("active");
  }
}

function answer(correct) {
  if (correct) score++;
  setTimeout(showNext, 400);
}

function alwaysGod() {
  alert("Nah… God is always right 🙏");
  setTimeout(showNext, 400);
}

function both() {
  alert("Sorry ❌\nCorrect answer is: BOTH 🫂");
  setTimeout(showNext, 400);
}

function showFinal() {
  showNext();
}
