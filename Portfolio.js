function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Animate sections on scroll
const faders = document.querySelectorAll(".fade-in");

let year = document.querySelector(".year");
const today = new Date();
const newyear = today.getFullYear();
year.innerHTML = newyear;
