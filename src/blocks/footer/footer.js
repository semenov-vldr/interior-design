// Scroll Footer

function margin() {
  const footer = document.querySelector(".footer");
  document.body.style.marginBottom = footer.offsetHeight + "px";

  // const hero = document.querySelector(".hero");
  // const guarantees = document.querySelector(".guarantees");
  // guarantees.style.marginTop = hero.offsetHeight + "px";
}
margin();
window.addEventListener('resize', margin);