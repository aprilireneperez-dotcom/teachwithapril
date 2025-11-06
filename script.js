const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const clsBtn = document.getElementById("clsBtn");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
});
clsBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
});

// Optional: close menu when a link is clicked
document.querySelectorAll("#mobileMenu a").forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
    });
});

function openModal() { document.getElementById('meet').style.display = 'flex'; }
function closeModal() { document.getElementById('meet').style.display = 'none'; }
// Simple esc-to-close
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

function scrollDeck(dir) {
    const el = document.getElementById('deck');
    const step = 280; // width of a rule card
    el.scrollBy({ left: step * dir, behavior: 'smooth' });
}