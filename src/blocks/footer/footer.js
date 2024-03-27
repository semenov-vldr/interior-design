// Scroll Footer

function margin() {
  const footer = document.querySelector(".footer");
  if (footer) {
    document.body.style.marginBottom = footer.offsetHeight + "px";

    // Copy email
    const email = footer.querySelector(".footer__contacts--email");
    email.addEventListener("click", function() {
      window.navigator.clipboard.writeText(this.textContent);
      alert("Почта скопирована в буфер обмена");
    });
  }
}

margin();
window.addEventListener('resize', margin);