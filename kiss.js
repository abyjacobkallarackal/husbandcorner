function checkAnswer(correct) {
  if (!correct) {
    alert("Hmm… not this one 😌 Try again");
    return;
  }

  document.getElementById("kissQuestion").classList.remove("active");
  document.getElementById("kissResult").classList.add("active");
}

function blowKiss() {
  const kiss = document.createElement("div");
  kiss.innerText = "💋";
  kiss.classList.add("flying-kiss");

  kiss.style.left = Math.random() * 80 + "vw";
  kiss.style.bottom = "0px";

  document.getElementById("kissArea").appendChild(kiss);

  setTimeout(() => {
    kiss.remove();
  }, 3000);
}
