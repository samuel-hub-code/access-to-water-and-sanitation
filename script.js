const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll(".nav-links a")];

window.addEventListener("scroll", () => {
  const current = sections.findLast((section) => section.getBoundingClientRect().top < 180);
  if (!current) return;
  navLinks.forEach((link) => {
    link.style.opacity = link.getAttribute("href") === `#${current.id}` ? "1" : ".82";
  });
}, { passive: true });
