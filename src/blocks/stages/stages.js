const stages = document.getElementById("stages");

if (stages) {

  const stagesList = stages.querySelectorAll(".stages__item");

  stagesList.forEach(scrollStages);

  function scrollStages (stagesItem) {

    const options = {
      threshold: 1,
      rootMargin: '100px 0px -50% 0px',
    };


    function handlerScrollText (entries) {
      entries.forEach(entry => {
        entry.target.classList.toggle('js-stages-scroll', entry.isIntersecting);
      });
    };
    const observer = new IntersectionObserver(handlerScrollText, options)
    observer.observe(stagesItem)
  }

}

