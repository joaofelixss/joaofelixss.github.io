export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll(".js-scroll");
  if (sections.lengh) {
    const windowDetalhe = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowDetalhe < 0;
        if (isSectionVisible) {
          section.classList.add("ativo");
        }
      });
    }

    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}