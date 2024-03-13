// Add your text here
const text = "Более 6 лет создаем интерьер передающий черты его владельца, учитывая образ жизни, увлечения и пожелания всех членов семьи, красивая и удобная обстановка в доме положительно сказывается на настроении, здоровье и финансовом успехе";

const about = document.getElementById("about");

if (about) {

  gsap.registerPlugin(ScrollTrigger);

  const parentElement = document.getElementById('paragraph');
  const words = text.split(' ');

  words.forEach(word => {
    const span = document.createElement('span');
    // span.style.opacity = 0.2;
    span.textContent = word + ' ';
    parentElement.appendChild(span);
  });


  gsap.to("#paragraph span", {
    backgroundPositionX: "0%",
    stagger: 1,
    scrollTrigger: {
      trigger: "#paragraph",
      scrub: true,
      start: "top 75%",
      end: "top 30%",
    }
  });



}




