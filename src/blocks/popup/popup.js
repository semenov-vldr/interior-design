const popup = document.getElementById("popup");

if (popup) {
  const btnPopupOpenList = document.querySelectorAll(".js-popup-open");

  btnPopupOpenList.forEach(btnPopupOpen => {
    btnPopupOpen.addEventListener("click", () => {
      popup.showModal();
    });
  });

  popup.addEventListener("click", handleModalClick);

}