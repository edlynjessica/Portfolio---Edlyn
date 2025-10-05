// 🌙 Toggle dark mode
document.getElementById("darkModeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// ✨ Animate hero content on page load
window.addEventListener("DOMContentLoaded", () => {
  const heroRight = document.querySelector(".hero-right");
  heroRight.style.opacity = "0";
  heroRight.style.transform = "translateY(20px)";
  setTimeout(() => {
    heroRight.style.transition = "all 0.6s ease";
    heroRight.style.opacity = "1";
    heroRight.style.transform = "translateY(0)";
  }, 300);
});
