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
        '/' +
        '<span class="' + totalClass + '"></span>';
    }
  },

  scrollbar: {
    el: document.getElementById('swiperScrollbar'),
  },



});