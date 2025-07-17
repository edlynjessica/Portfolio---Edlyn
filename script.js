// 🌙 Toggle dark mode
document.getElementById("darkModeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// ✨ Animate hero content on page load
window.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero-content");
  hero.style.opacity = "0";
  hero.style.transform = "translateY(-30px)";
  setTimeout(() => {
    hero.style.transition = "all 0.6s ease";
    hero.style.opacity = "1";
    hero.style.transform = "translateY(0)";
  }, 100);
});
