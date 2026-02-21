// Scroll Reveal
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(reveal => {
    const windowHeight = window.innerHeight;
    const revealTop = reveal.getBoundingClientRect().top;
    const revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {
      reveal.classList.add("active");
    }
  });
});

// Dark Mode Toggle
const toggle = document.getElementById("darkToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Resume Modal
function openModal() {
  document.getElementById("resumeModal").style.display = "block";
}

function closeModal() {
  document.getElementById("resumeModal").style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("resumeModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
