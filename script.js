
const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

// Open and close mobile navigation
menuToggle.addEventListener("click", () => {
  const isOpen = navbar.classList.toggle("active");
  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close menu when a navigation link is clicked
document.querySelectorAll(".navbar a").forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Automatically update the copyright year
document.getElementById("year").textContent =
  new Date().getFullYear();