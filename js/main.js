// Placeholder for interactivity
console.log("Wedding site loaded.");

document.addEventListener("DOMContentLoaded", function () {
  const targetDate = new Date("2025-08-02T15:00:00").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      document.getElementById("countdown").innerHTML = "<strong>It's Wedding Time! 🎉</strong>";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    document.getElementById("countdown").innerHTML = `
      <span><strong>${days}</strong> Days</span>
      <span><strong>${hours}</strong> Hours</span>
      <span><strong>${minutes}</strong> Minutes</span>
      <span><strong>${seconds}</strong> Seconds</span>
    `;
  }

  setInterval(updateCountdown, 1000);
});
