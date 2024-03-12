AOS.init({
  disable: function() {
    const maxWidth = 767;
    return window.innerWidth < maxWidth;
  }
});
