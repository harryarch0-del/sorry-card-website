// Floating bubbles generator
function createBubbles(count = 20) {
  for (let i = 0; i < count; i++) {
    const bubble = document.createElement("div");
    bubble.classList.add("floating-bubble");
    bubble.style.left = Math.random() * 100 + "vw";
    bubble.style.animationDuration = (6 + Math.random() * 5) + "s";
    bubble.style.animationDelay = (Math.random() * 5) + "s";
    document.body.appendChild(bubble);
  }
}
createBubbles(25); // adjust intensity

// Confetti
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const canvas = document.getElementById("confetti");
let ctx = canvas?.getContext("2d");

if (canvas) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function launchConfetti() {
  let particles = [];
  for (let i = 0; i < 120; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      r: Math.random() * 6 + 2,
      color: `hsl(${Math.random() * 360},100%,50%)`,
    });
  }
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x, p.y, p.r, p.r);
    });
    update();
  }
  function update() {
    particles.forEach(p => {
      p.y += 3;
      if (p.y > canvas.height) p.y = -10;
    });
  }
  setInterval(draw, 20);
}

if (yesBtn) {
  yesBtn.addEventListener("click", () => {
    launchConfetti();
    setTimeout(() => {
      window.location.href = "https://media4.giphy.com/media/v1.Y2lkPTZjMDliOTUyMTJucGcyNmN3cDdqNGZhcWJyZmM5bXl2MmV5OHo1aXFpbGE4cGNuaiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/OKvq25SbsTURpQOSWS/200.gif";
    }, 1500);
  });
}

if (noBtn) {
  noBtn.addEventListener("click", () => {
    noBtn.classList.add("shake");
    setTimeout(() => {
      window.location.href = "https://media.giphy.com/media/l4FGuhL4U2WyjdkaY/giphy.gif";
    }, 800);
  });
}
