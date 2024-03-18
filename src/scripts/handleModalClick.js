const handleModalClick = (evt) => {
  const isClickedOnBackdrop = evt.target === evt.currentTarget;
  isClickedOnBackdrop && closingDialog (evt);
}