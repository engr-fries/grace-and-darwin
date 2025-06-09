$(function () {
  const weddingDate = new Date("2025-12-12T00:00:00").getTime();

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
