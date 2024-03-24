function closingDialog ( { target } ) {
  const dialog = target.closest("dialog");
  const form = dialog.querySelector("form");
  dialog.querySelectorAll(".form__message").forEach(message => {
    message.classList.remove('js-message-active');
  });

  dialog.close();
  form.reset();

  // if ( dialog.classList.contains("quiz") ) {
  //   const inputs = dialog.querySelectorAll('input');
  //   inputs.forEach(input => {
  //     input.value = "";
  //     input.checked = false;
  //   });
  //
  //   const quizStepList = dialog.querySelector(".quiz__steps");
  //   const quizStep_0_5 = dialog.querySelectorAll('.quiz__step');
  //   const quizStepForm = dialog.querySelector('.quiz__step--form');
  //   const quizStepsFooter = dialog.querySelector(".quiz__steps-footer");
  //   const quizProgress = dialog.querySelector(".quiz__progress");
  //   quizStep_0_5[0].classList.remove("hidden");
  //   quizStep_0_5[1].classList.remove("hidden");
  //   quizStepsFooter.classList.remove("hidden");
  //   quizProgress.classList.remove("hidden");
  //
  //   [ quizStep_0_5[2],
  //     quizStep_0_5[3],
  //     quizStep_0_5[4],
  //     quizStep_0_5[5],
  //     quizStepForm,
  //     quizStepList
  //   ].forEach(step => step.classList.add("hidden"));
  // }
}


