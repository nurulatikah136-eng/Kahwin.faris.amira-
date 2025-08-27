// ===== Countdown =====
const countdownEl = document.getElementById("countdown");
const weddingDate = new Date("Dec 31, 2025 10:00:00").getTime();
setInterval(() => {
  const now = new Date().getTime();
  const distance = weddingDate - now;
  if (distance < 0) {
    countdownEl.innerHTML = "The Wedding has started 🎉";
    return;
  }
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  countdownEl.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
}, 1000);

// ===== Music Player =====
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

window.addEventListener("load", () => {
  music.play().catch(err => {
    console.log("Autoplay blocked 😅:", err);
  });
});

musicBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    musicBtn.textContent = "⏸ Pause Music";
  } else {
    music.pause();
    musicBtn.textContent = "▶️ Play Music";
  }
});
