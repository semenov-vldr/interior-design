function mobileNav () {
  const header = document.querySelector("header.header");
  if (!header) return;
  const nav = header.querySelector(".header__nav");
  const burger = header.querySelector(".header__burger");

  // Открытие мобильного меню Бургер
  burger.addEventListener("click", () => {
    nav.classList.toggle("js-mobile-nav-open");
    document.querySelector('html').classList.toggle('js-no-scroll');

  });
}

mobileNav() ;