const hero = document.querySelector(".hero");

if (hero) {

const swiper = new Swiper('.hero__slider', {

  // Optional parameters
  loop: true,
  effect: 'fade',
  autoplay: {
    delay: 3000,
  },

  pagination: {
    el: document.getElementById('swiperPagination'),
    type: 'fraction',

    formatFractionCurrent: (number) => ('0' + number).slice(-2),
    formatFractionTotal: (number) => ('0' + number).slice(-2),
    renderFraction: function (currentClass, totalClass) {
      return '<span class="' + currentClass + '"></span>' +
        '/' + '<span class="' + totalClass + '"></span>';
    }
  },

  scrollbar: {
    el: document.getElementById('swiperScrollbar'),
  },
});


  const heroSlides = hero.querySelectorAll('.hero__slider .swiper-slide');
  const swiperScrollbar = document.getElementById('swiperScrollbar');
  const heroLink = hero.querySelector('.hero__link');

    function updateScrollbarClass () {
    const activeSlideIndex = Array.from(heroSlides)
      .findIndex(slide => slide.classList.contains('swiper-slide-active'));
    swiperScrollbar.classList.remove('first', 'second', 'third');

    if (activeSlideIndex !== -1) {
      const classNames = ['first', 'second', 'third'];
      swiperScrollbar.classList.add(classNames[activeSlideIndex]);

      const activeSlideLink = heroSlides[activeSlideIndex].dataset.src;
      heroLink.href = activeSlideLink;
    }
  };

  let observerHero = new MutationObserver(updateScrollbarClass);
  heroSlides.forEach(slide => observerHero.observe(slide, {attributes: "class"}));


}