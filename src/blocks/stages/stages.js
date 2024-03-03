const stages = document.getElementById("stages");

if (stages) {

  const stagesList = stages.querySelectorAll(".stages__item");
  const stagesImages = stages.querySelectorAll(".stages__image-wrapper img");

  stagesList.forEach(scrollStages);

  function scrollStages (stageItem) {

    const options = {
      threshold: 1,
      rootMargin: '-25% 0px -35% 0px',
    };

    function handlerScrollStages (entries) {
      entries.forEach((entry) => {
        entry.target.classList.toggle('js-stages-scroll', entry.isIntersecting);

        const dataStage = +stageItem.dataset.stage;
        const stageIndex = dataStage - 1;

        if (stageItem.classList.contains('js-stages-scroll')) {
          stagesImages.forEach(img => img.classList.remove('js-stages-scroll'));
          stagesImages[stageIndex].classList.remove('js-abroad');
          stagesImages[stageIndex].classList.add('js-stages-scroll');
        } else {
          stagesImages[stageIndex].classList.add('js-abroad');
        }

      });
    };

    const observer = new IntersectionObserver(handlerScrollStages, options);
    observer.observe(stageItem);
  }

}

