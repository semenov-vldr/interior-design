const quiz = document.getElementById("quiz");

if (quiz) {

  const btnQuizOpenList = document.querySelectorAll(".js-quiz-open");

  btnQuizOpenList.forEach(btnQuizOpen => {
    btnQuizOpen.addEventListener("click", () => {
      quiz.showModal();
    });
  });

  quiz.addEventListener("click", handleModalClick);



  // Range Price

  const rangeArea = quiz.querySelector(".quiz-step-2__range-slider");
  const areaField = quiz.querySelector(".quiz-step-2__range-field");
  const minValue = quiz.querySelector(".quiz-step-2__range-min");
  const maxValue = quiz.querySelector(".quiz-step-2__range-max");
  const areaMin = +areaField.dataset.min;
  const areaMax = +areaField.dataset.max;
  minValue.textContent = areaMin;
  maxValue.textContent = areaMax;


  noUiSlider.create(rangeArea, {
    start: [areaMin],
    connect: "lower",
    step: 10,
    range: {
      'min': areaMin,
      'max': areaMax,
    },
  });

  rangeArea.noUiSlider.on('update', function (values, handle) { // при изменений положения элементов управления слайдера изменяем соответствующие значения
    areaField.value = `${parseInt(values[handle])} м²`;
  });

}



