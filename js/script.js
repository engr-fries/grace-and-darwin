// Placeholder for interactivity
console.log("Wedding site loaded.");

// C O U N T D O W N

$(function () {
  const weddingDate = new Date("2025-08-02T15:00:00").getTime();

  setInterval(function () {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) {
      $('#countdown').html("<h4>We're married! 🎉</h4>");
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((distance / 1000 / 60) % 60);
    const secs = Math.floor((distance / 1000) % 60);

    $('#countdown').html(`
      <div><strong>${days}</strong><br>Days</div>
      <div><strong>${hours}</strong><br>Hours</div>
      <div><strong>${mins}</strong><br>Minutes</div>
      <div><strong>${secs}</strong><br>Seconds</div>
    `);
  }, 1000);
});


// NAVBAR BURGER MENU
document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  toggleBtn.addEventListener('click', function () {
    navLinks.classList.toggle('active');
  });
});

// S E E   M O R E
document.querySelectorAll('.toggle-btn').forEach(button => {
  button.addEventListener('click', () => {
    const moreText = button.previousElementSibling.querySelector('.more-text');
    const isHidden = moreText.classList.contains('hidden');

    moreText.classList.toggle('hidden');
    button.textContent = isHidden ? 'Show less' : 'Read more';
  });
});
