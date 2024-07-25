const targetDate = new Date("2024-11-29T15:00:00").getTime();

const countdownInterval = setInterval(function () {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("day").innerHTML = days;
  document.getElementById("hour").innerHTML = hours;
  document.getElementById("minute").innerHTML = minutes;
  document.getElementById("second").innerHTML = seconds;

  if (days == 0) {
    document.getElementById("day").innerHTML = "00";
  }

  if (hours == 0) {
    document.getElementById("hour").innerHTML = "00";
  }

  if (minutes == 0) {
    document.getElementById("minute").innerHTML = "00";
  }

  if (seconds == 0) {
    document.getElementById("second").innerHTML = "00";
  }

  if (distance < 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown").innerHTML = "¡Llegó el momento!";
  }
}, 1000);

const carousel = document.querySelector(".carousel");
let isDown = false;
let startX;
let scrollLeft;

carousel.addEventListener("mousedown", (e) => {
  isDown = true;
  carousel.classList.add("active");
  startX = e.pageX - carousel.offsetLeft;
  scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener("mouseleave", () => {
  isDown = false;
  carousel.classList.remove("active");
});

carousel.addEventListener("mouseup", () => {
  isDown = false;
  carousel.classList.remove("active");
});

carousel.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - carousel.offsetLeft;
  const walk = (x - startX) * 2; // Velocidad de arrastre
  carousel.scrollLeft = scrollLeft - walk;
});
