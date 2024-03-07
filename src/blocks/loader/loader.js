
function hideLoader () {
  const loader = document.getElementById('loader');
  loader.classList.add('hide');
  setTimeout(() => {
    loader.remove();
  }, 500);
};

loader && window.addEventListener('load', hideLoader);