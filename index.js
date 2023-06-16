function navBar() {
  const btnMobile = document.getElementById("btn-mobile");

  function toggleMenu(event) {
    if (event.type === "touchstart") event.preventDefault();
    const nav = document.getElementById("nav");
    nav.classList.toggle("ativo");
  }

  btnMobile.addEventListener("click", toggleMenu);
  btnMobile.addEventListener("touchstart", toggleMenu);
}
navBar();

function navBarScroll() {
  const linkInterno = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  linkInterno.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
navBarScroll();

function initAnimacaoScroll() {
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
initAnimacaoScroll();
