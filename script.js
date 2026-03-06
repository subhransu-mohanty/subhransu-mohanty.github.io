// Simple smooth nav toggle for mobile
const navToggle = document.querySelector(".nav-toggle");
const navRoot = document.querySelector(".nav");

if (navToggle && navRoot) {
  navToggle.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      document.body.classList.remove("nav-open");
    });
  });
}

// 3D tilt interaction for hero card
const heroCard = document.getElementById("hero3d");

if (heroCard) {
  const bounds = { width: 0, height: 0, left: 0, top: 0 };

  const updateBounds = () => {
    const rect = heroCard.getBoundingClientRect();
    bounds.width = rect.width;
    bounds.height = rect.height;
    bounds.left = rect.left + window.scrollX;
    bounds.top = rect.top + window.scrollY;
  };

  window.addEventListener("resize", updateBounds);
  window.addEventListener("scroll", () => {
    // keep things roughly in sync on scroll
    updateBounds();
  });

  updateBounds();

  heroCard.addEventListener("mousemove", (event) => {
    const x = event.clientX - (bounds.left - window.scrollX);
    const y = event.clientY - (bounds.top - window.scrollY);

    const rotateY = ((x / bounds.width) - 0.5) * 20; // left / right
    const rotateX = ((y / bounds.height) - 0.5) * -16; // up / down

    heroCard.style.transform = `rotateX(${12 + rotateX}deg) rotateY(${-18 + rotateY}deg) translateZ(0)`;
  });

  heroCard.addEventListener("mouseleave", () => {
    heroCard.style.transform = "rotateX(12deg) rotateY(-18deg) translateZ(0)";
  });
}

// Demo contact form handler
function handleContactSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const name = form.name.value.trim();

  alert(
    name
      ? `Thanks, ${name}! \n\nYou can contact me directly at: ssmohanty@gmail.com`
      : "Thanks for reaching out! This demo form is not wired to a backend yet.\n\nYou can contact me directly at: ssmohanty@gmail.com"
  );

  form.reset();
}

