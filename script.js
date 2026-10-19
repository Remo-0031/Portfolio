// Highlight the nav link for whichever section is currently on screen.
const navLinks = document.querySelectorAll(".nav-links a");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        const isActive = link.getAttribute("href") === "#" + entry.target.id;
        link.classList.toggle("active", isActive);
        if (isActive) link.setAttribute("aria-current", "true");
        else link.removeAttribute("aria-current");
      });
    });
  },
  // A section counts as "current" when it crosses the middle of the screen
  { rootMargin: "-45% 0px -50% 0px" }
);

navLinks.forEach((link) => {
  const section = document.querySelector(link.getAttribute("href"));
  if (section) observer.observe(section);
});

// Keep the footer year current
document.getElementById("year").textContent = new Date().getFullYear();
