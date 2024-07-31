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
  cover.setAttribute("autoplay", "true");
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

/* Carrusel de imagenes */
/* let startX;
let currentX;
let isDragging = false;
let translateX = 0;
let slideIndex = 0;
const slide = document.querySelector(".carousel-slide");

slide.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
  isDragging = true;
  slide.style.transition = "none";
});

slide.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  currentX = e.touches[0].clientX;
  translateX = currentX - startX;
  const offset = -slideIndex * slide.offsetWidth + translateX;
  slide.style.transform = `translateX(${offset}px)`;
});

slide.addEventListener("touchend", () => {
  isDragging = false;
  const threshold = slide.offsetWidth / 8;
  if (translateX < -threshold) {
    slideIndex = Math.min(
      slideIndex + 1,
      document.querySelectorAll(".carousel-slide img").length - 1
    );
  } else if (translateX > threshold) {
    slideIndex = Math.max(slideIndex - 1, 0);
  }
  showSlide(slideIndex);
});

function showSlide(index) {
  const offset = -index * slide.offsetWidth;
  slide.style.transition = "transform 0.4s ease-in-out";
  slide.style.transform = `translateX(${offset}px)`;
}

document.addEventListener("DOMContentLoaded", () => {
  showSlide(slideIndex);
}); */

/* ------------------------- */

/* let startX;
let currentX;
let isDragging = false;
const slide = document.querySelector(".carousel-slide");

slide.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
  isDragging = true;
  slide.style.transition = "none";
});

slide.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  currentX = e.touches[0].clientX;
  const translateX = currentX - startX;
  slide.style.transform = `translateX(${translateX}px)`;
});

slide.addEventListener("touchend", () => {
  isDragging = false;
  const translateX = currentX - startX;
  const threshold = slide.offsetWidth / 2; // Cambia la imagen si se ha arrastrado más de un cuarto del ancho
  if (translateX < -threshold) {
    nextSlide();
  } else if (translateX > threshold) {
    prevSlide();
  } else {
    slide.style.transition = "transform 0.4s ease-in-out";
    slide.style.transform = `translateX(0px)`;
  }
});

let slideIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".carousel-slide img");
  const totalSlides = slides.length;

  if (index >= totalSlides) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = totalSlides - 1;
  } else {
    slideIndex = index;
  }

  const offset = -slideIndex * 100;
  slide.style.transition = "transform 0.4s ease-in-out";
  slide.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  showSlide(slideIndex + 1);
}

function prevSlide() {
  showSlide(slideIndex - 1);
}

document.addEventListener("DOMContentLoaded", () => {
  showSlide(slideIndex);
}); */
