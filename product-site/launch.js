const menu = document.querySelector("#menu");
const navLinks = document.querySelector("#nav-links");

menu?.addEventListener("click", () => {
  navLinks?.classList.toggle("open");
  menu.textContent = navLinks?.classList.contains("open") ? "×" : "☰";
});

navLinks?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  if (menu) menu.textContent = "☰";
}));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
