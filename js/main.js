/* VentureVerse interactions: each function handles one small feature. */
const menuButton = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");
const header = document.querySelector(".site-header");

function toggleMenu() {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  siteNav.classList.toggle("is-open", !isOpen);
  document.body.classList.toggle("menu-open", !isOpen);
}

function closeMenu() {
  menuButton.setAttribute("aria-expanded", "false");
  siteNav.classList.remove("is-open");
  document.body.classList.remove("menu-open");
}

function updateCountdown() {
  const now = new Date();
  const start = new Date("2026-11-12T10:00:00+05:30");
  const end = new Date("2026-11-12T15:00:00+05:30");
  const status = document.querySelector("#countdown-status");
  const parts = { days: 0, hours: 0, minutes: 0, seconds: 0 };
  let difference = start - now;

  if (now >= end) {
    status.textContent = "Event ended — see you at the next one.";
  } else if (now >= start) {
    status.textContent = "Event started — the room is in motion.";
    difference = 0;
  } else {
    parts.days = Math.floor(difference / 86400000);
    parts.hours = Math.floor((difference % 86400000) / 3600000);
    parts.minutes = Math.floor((difference % 3600000) / 60000);
    parts.seconds = Math.floor((difference % 60000) / 1000);
  }

  Object.entries(parts).forEach(([part, value]) => {
    document.querySelector(`#${part}`).textContent = String(value).padStart(2, "0");
  });
}

function validateForm(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const fields = [
    { input: form.elements.name, error: "name-error", message: "Please add your name." },
    { input: form.elements.email, error: "email-error", message: "Please enter a valid email." },
    { input: form.elements.course, error: "course-error", message: "Please choose your engineering course." },
    { input: form.elements.year, error: "year-error", message: "Please choose your year." }
  ];
  let isValid = true;

  fields.forEach(({ input, error, message }) => {
    const valid = input.checkValidity();
    document.querySelector(`#${error}`).textContent = valid ? "" : message;
    if (!valid) isValid = false;
  });

  const status = document.querySelector("#form-status");
  if (isValid) {
    status.textContent = "Your demo interest is recorded. Nothing was sent.";
    status.style.color = "var(--navy)";
    form.reset();
  } else {
    status.textContent = "A couple of fields need your attention.";
    status.style.color = "#a12f16";
  }
}

function revealOnScroll() {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));
}

menuButton.addEventListener("click", toggleMenu);
siteNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
document.querySelector("#register-form").addEventListener("submit", validateForm);
window.addEventListener("scroll", () => header.classList.toggle("scrolled", window.scrollY > 12), { passive: true });
updateCountdown();
setInterval(updateCountdown, 1000);
revealOnScroll();
