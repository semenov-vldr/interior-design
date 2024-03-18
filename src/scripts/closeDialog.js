function closingDialog ( { target } ) {
  const dialog = target.closest("dialog");
  const form = dialog.querySelector("form");
  dialog.querySelectorAll(".form__message").forEach(message => {
    message.classList.remove('js-message-active');
  });
  dialog.close();
  form.reset();

  if ( dialog.classList.contains("quiz") ) {
    const inputs = dialog.querySelectorAll('input');
    inputs.forEach(input => input.value = "");
  }
}

const closeDialogBtns = document.querySelectorAll(".close-dialog");
if (closeDialogBtns) {
  closeDialogBtns.forEach(closeBtn => {
    closeBtn.addEventListener("click", closingDialog);
  });
}

