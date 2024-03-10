// Add your text here
const text = "Более 6 лет создаем интерьер передающий черты его владельца, учитывая образ жизни, увлечения и пожелания всех членов семьи, красивая и удобная обстановка в доме положительно сказывается на настроении, здоровье и финансовом успехе";


const about = document.getElementById("about");

if (about) {

  const parentElement = document.getElementById('paragraph');
  const words = text.split(' ');

  words.forEach(word => {
    const span = document.createElement('span');
    span.style.opacity = 0.2;
    span.textContent = word + ' ';
    parentElement.appendChild(span);
  });

  function scrollingText () {
    const scrollPercentage = window.scrollY / (document.body.offsetHeight - window.innerHeight);
    const spans = document.querySelectorAll('#paragraph span');
    const numSpansToChange = Math.ceil(scrollPercentage * 4* spans.length);

    spans.forEach(span => {
      span.style.opacity = 0.2;
    });

    for (let i = 0; i < numSpansToChange; i++) {
      spans[i].style.opacity = 1;
    }
  };

  window.addEventListener('scroll', scrollingText);

}




