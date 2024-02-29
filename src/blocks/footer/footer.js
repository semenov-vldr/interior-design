// Scroll Footer

function margin() {
  const main = document.querySelector("main");
  const footer = document.querySelector(".footer");
  main.style.marginBottom = footer.offsetHeight + "px";

  // const hero = document.querySelector(".hero");
  // const guarantees = document.querySelector(".guarantees");
  // guarantees.style.marginTop = hero.offsetHeight + "px";
}
margin();
window.addEventListener('resize', margin);