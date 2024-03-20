const cursor = document.querySelector('.cursor');

if (cursor) {
  const $bigBall = document.querySelector('.cursor__ball--big');
  const $smallBall = document.querySelector('.cursor__ball--small');

  //document.body.addEventListener('mousemove', onMouseMove);

  function onMouseMove(e) {
    gsap.to($bigBall, .4, {
      x: e.pageX - 12,
      y: e.pageY - 12
    });

    gsap.to($smallBall, .1, {
      x: e.pageX - 5,
      y: e.pageY - 8
    });

    const footer = document.querySelector("#footer");
    const isFooterHover = e.pageY > document.documentElement.scrollHeight - footer.offsetHeight;
    //footer && cursor.classList.toggle("hover-footer", isFooterHover);

  }

}


