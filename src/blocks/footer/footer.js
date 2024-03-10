// Scroll Footer

function margin() {
  const footer = document.querySelector(".footer");
  if (footer) document.body.style.marginBottom = footer.offsetHeight + "px";
}

margin();
window.addEventListener('resize', margin);