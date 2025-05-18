// Mobile Navigation
const  menuicon = document.querySelector(".menuicon");
const navLinks = document.querySelector(".nav-links");
const navLink = document.querySelectorAll(".nav-link");

menuicon.addEventListener("click", () => {
  menuicon.classList.toggle("active");
  navLinks.classList.toggle("active");
});

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    menuicon.classList.remove("active");
    navLinks.classList.remove("active");
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Button scroll to destinations
document
  .getElementById("scrollToDestinations")
  .addEventListener("click", function () {
    document.getElementById("Destinations").scrollIntoView({
      behavior: "smooth",
    });
  });

// Contact button
document.getElementById("ContactBtn").addEventListener("click", function () {
  document.getElementById("Contact").scrollIntoView({
    behavior: "smooth",
  });
});

// Slider functionality
const slides = document.querySelectorAll(".slide");
const navBtns = document.querySelectorAll(".nav-btn");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  navBtns.forEach((btn) => btn.classList.remove("active"));

  slides[index].classList.add("active");
  navBtns[index].classList.add("active");
  currentSlide = index;
}

navBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const slideIndex = parseInt(btn.getAttribute("data-index"));
    showSlide(slideIndex);
  });
});

// Auto slide
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 5000);

// Header scroll effect
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});



