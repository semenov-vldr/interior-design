const about = document.getElementById("about");

if (about) {

  const aboutTextList = about.querySelectorAll(".about__text");

  aboutTextList.forEach(scrollText);

  function scrollText (aboutTextBlock) {
    const options = {
      threshold: 1,
      rootMargin: '100px 0px -50% 0px',
    };

    const pList = aboutTextBlock.querySelectorAll("p");

    function handlerScrollText (entries) {
      entries.forEach(entry => {
        entry.target.classList.toggle('scroll-text', entry.isIntersecting);
      });
    };
    const observer = new IntersectionObserver(handlerScrollText, options)
    pList.forEach(p => observer.observe(p));
  }










}

