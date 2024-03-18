const formList = document.querySelectorAll("form.form");

const maskOptions = {
  mask: '+{7} (000) 000-00-00'
};

if (formList) {
  formList.forEach(form => {
    const inputTel = form.querySelector('input[type=tel]');
    const mask = IMask(inputTel, maskOptions);
  });

}






