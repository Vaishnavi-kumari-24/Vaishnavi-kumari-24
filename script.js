 const skillSection = document.querySelector('.skill');
const skillBars = document.querySelectorAll('.skill-per');

window.addEventListener('scroll', () => {
    const sectionTop = skillSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight / 1.3;

    if(sectionTop < screenHeight){
        skillBars.forEach(bar => {
            bar.style.width = bar.getAttribute('data-per') + '%';
        });
    }
});
const elements = document.querySelectorAll(".fade-left, .fade-right");

window.addEventListener("scroll", () => {
  const trigger = window.innerHeight - 100;

  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) {
      el.classList.add("show");
    }
  });
});
// education
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

cards.forEach(card => observer.observe(card));
// contact
function scrollTopPage() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}



