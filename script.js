
const fatimaPassword = "#fatima123";
const friendPassword = "famma123";

function checkPassword() {
  const input = document.getElementById("password-input").value;
  const error = document.getElementById("error-message");
  if (input === fatimaPassword) {
    startFullSite(true);
  } else if (input === friendPassword) {
    startFullSite(false);
  } else {
    error.textContent = "Incorrect password. Try again.";
  }
}

function startFullSite(isFatima) {
  document.getElementById("password-container").style.display = "none";
  document.getElementById("main-content").style.display = "block";
  document.getElementById("birthday-audio").play();
  if (isFatima) {
    document.getElementById("photo-section").style.display = "block";
    document.getElementById("comment-section").style.display = "block";
    startPhotoSlideshow();
    setTimeout(() => {
      document.getElementById("photo-audio").play();
    }, 1000);
  } else {
    document.getElementById("comment-section").style.display = "block";
  }
  drawBouquet();
}

function startPhotoSlideshow() {
  const slides = document.querySelectorAll(".photo-slide");
  let index = 0;
  slides[index].style.display = "block";

  const interval = setInterval(() => {
    slides[index].style.display = "none";
    index++;
    if (index >= slides.length) {
      clearInterval(interval);
    } else {
      slides[index].style.display = "block";
    }
  }, 30000); // Show each for 30s
}

function submitComment() {
  const textarea = document.querySelector("textarea");
  const comment = textarea.value.trim();
  if (comment) {
    const commentList = document.getElementById("comments-list");
    const p = document.createElement("p");
    p.textContent = comment;
    commentList.appendChild(p);
    textarea.value = "";
  }
}

function drawBouquet() {
  const canvas = document.getElementById("bouquet-canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  for (let i = 0; i < 100; i++) {
    ctx.fillStyle = "white";
    ctx.beginPath();
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height / 2;
    ctx.arc(x, y, 1.5, 0, 2 * Math.PI);
    ctx.fill();
  }

  const roses = [
    { x: 200, y: 300 },
    { x: 250, y: 260 },
    { x: 300, y: 310 },
    { x: 350, y: 270 },
    { x: 400, y: 320 },
  ];

  let r = 0;
  const lightUp = setInterval(() => {
    if (r >= roses.length) {
      clearInterval(lightUp);
      return;
    }
    ctx.beginPath();
    ctx.arc(roses[r].x, roses[r].y, 20, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
    r++;
  }, 1000);
}
