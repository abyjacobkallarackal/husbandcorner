const text =
  "Joash Achacha, will you always be my today, tomorrow, and forever?";

let i = 0;
const speed = 60;

function typeText() {
  if (i < text.length) {
    document.getElementById("proposalText").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeText, speed);
  }
}

window.onload = () => {
  typeText();
};

function sheSaidYes() {
  document.getElementById("bgMusic").play();
  alert("Forever starts now 💍🤍");
}

