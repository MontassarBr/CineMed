// DOM Elements
const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const navMenu = document.querySelector(".nav-menu");

// Mobile Menu Toggle
if (mobileMenuToggle) {
  mobileMenuToggle.addEventListener("click", function () {
    mobileMenuToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
  });
}

// Close mobile menu on link click
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenuToggle.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// Navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");

  if (window.scrollY > 50) {
    navbar.style.background = "rgba(15, 16, 22, 0.95)";
    navbar.style.padding = "10px 0";
    navbar.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.3)";
  } else {
    navbar.style.background = "rgba(15, 16, 22, 0.9)";
    navbar.style.padding = "15px 0";
    navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.3)";
  }
});

// Function to check if an element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Add scroll-triggered animations
document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll(".animate-on-scroll");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Optional: Stop observing once the animation is triggered
        // observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1 // Trigger when 10% of the element is visible
  });

  animatedElements.forEach(element => {
    observer.observe(element);
  });
});
