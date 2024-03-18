// Dialog popup
const popup = document.getElementById("popup");

if (popup) {
  // Кнопки с классом, которые открывают поп-ап
  const btnPopupOpenList = document.querySelectorAll(".js-popup-open");

  btnPopupOpenList.forEach(btnPopupOpen => {
    btnPopupOpen.addEventListener("click", () => {
      popup.showModal();
    });
  });
  popup.addEventListener("click", handleModalClick);

  const closePopup = popup.querySelector(".popup__close");
  closePopup.addEventListener("click", closingDialog);
}



