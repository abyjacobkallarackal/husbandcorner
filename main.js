function login() {
  if (document.getElementById("password").value.length >= 8) {
    location.href = "home.html";
  } else {
    alert("Wrong password 💔");
  }
}

function playMusic() {
  document.getElementById("bgMusic").play();
}

// slideshow
let i = 0;
setInterval(() => {
  const slides = document.querySelectorAll(".slide");
  slides.forEach(s => s.classList.remove("active"));
  slides[i = (i+1)%slides.length].classList.add("active");
}, 3000);
