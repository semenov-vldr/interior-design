const quiz = document.getElementById("quiz");

if (quiz) {

  // Кнопки с классом, которые открывают Квиз
  const btnQuizOpenList = document.querySelectorAll(".js-quiz-open");

  btnQuizOpenList.forEach(btnQuizOpen => {
    btnQuizOpen.addEventListener("click", () => {
      quiz.showModal();
    });
  });

  // Закрытие квиза по клику вне квиза
  quiz.addEventListener("click", handleModalClick);

  // Закрытие квиза
  const closeQuiz = quiz.querySelector(".quiz__close");
  closeQuiz.addEventListener("click", closingDialog);

  // --- Range Price ---
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

  // при изменений положения элементов управления слайдера изменяем соответствующие значения
  rangeArea.noUiSlider.on('update', function (values, handle) {
    areaField.value = `${parseInt(values[handle])} м²`;
  });


  // --- Переключение шагов квиза ---

  const quizSteps = quiz.querySelectorAll(".quiz__step");
  const quizNextBtn = quiz.querySelector(".quiz__steps-next");
  const step_0 = quiz.querySelector(".quiz__step.quiz__step-0");
  const quizStepList = quiz.querySelector(".quiz__steps");
  const quizStepsFooter = quiz.querySelector(".quiz__steps-footer");
  const quizProgress = quiz.querySelector(".quiz__progress");
  const quizProgressInner = quizProgress.querySelector(".quiz__progress-inner");
  const quizProgressTotal = quizProgress.querySelector(".quiz__progress-total");

  let questionCount = 1;

  // Показ активного шага квиза
  function quizDisplay (questionCount) {
    quizSteps.forEach(quizStep => {
      quizStep.classList.add('hidden');
    });
    quizSteps[questionCount].classList.remove('hidden');
  };

  const learnMoreBtn = quiz.querySelector(".quiz-step-0__btn");
  learnMoreBtn.addEventListener('click', handlerLearnMoreBtn);

  function handlerLearnMoreBtn () {
    step_0.classList.add("hidden");
    quizStepList.classList.remove('hidden');
  }

  function handlerQuizNextBtn () {
    questionCount ++;
    quizDisplay (questionCount);

    quizProgressTotal.textContent = `${questionCount}/${quizSteps.length - 2}`
    quizProgressInner.style.width = `${100 / (quizSteps.length - 2) * questionCount}%`


    if (questionCount === quizSteps.length - 1) {
      quizStepsFooter.classList.add("hidden");
      quizProgress.classList.add("hidden");
      quizStepList.classList.add("hidden");
    }
  }

  quizNextBtn.addEventListener('click', handlerQuizNextBtn);


  // Add File
  const addLayout = quiz.querySelector('.add-layout');
  const inputFile = addLayout.querySelector('#file');
  inputFile.addEventListener('change', function (e) {
    // Get the selected file
    const [file] = e.target.files;
    // Get the file name and size
    const { name: fileName, size } = file;
    // Convert size in bytes to kilo bytes
    const fileSize = (size / 1024 / 1024).toFixed(4);
    // Set the text content
    const fileNameAndSize = `${fileName} - ${fileSize}MB`;
    quiz.querySelector('.add-layout__data').textContent = fileNameAndSize;
    addLayout.classList.add("js-add-file");
  });

}



