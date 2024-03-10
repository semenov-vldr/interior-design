const handleModalClick = ({ currentTarget, target }) => {
  const isClickedOnBackdrop = target === currentTarget;
  isClickedOnBackdrop && currentTarget.close();
}