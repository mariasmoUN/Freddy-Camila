var bodyHidden = document.getElementById("body");

/* Sonido de fondo */
function PlayAudio() {
  document.getElementById("background-music").play();
}

/* Loader de inicio */
document.getElementById("btn-play").addEventListener("click", () => {
  const contenedorLoader = document.querySelector(".container--loader");
  const cover = document.querySelector(".video_cover");

  contenedorLoader.style.opacity = 0;
  contenedorLoader.style.visibility = "hidden";
  cover.style.display = "block";
  bodyHidden.style.overflow = "auto";
});

/* Contador de tiempo */
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

/* Galery */
document.addEventListener("DOMContentLoaded", function () {
  const thumbnails = document.querySelectorAll(".thumbnail");
  const overlay = document.getElementById("overlay");
  const overlayImg = document.getElementById("overlayImg");
  const closeBtn = document.getElementById("closeBtn");

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", function () {
      overlay.style.display = "flex";
      overlayImg.style.backgroundImage = this.style.backgroundImage;
      bodyHidden.style.overflow = "hidden";
    });
  });

  closeBtn.addEventListener("click", function () {
    overlay.style.display = "none";
    overlayImg.style.backgroundImage = "";
    bodyHidden.style.overflow = "auto";
  });
});
