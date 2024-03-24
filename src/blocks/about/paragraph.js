const about = document.getElementById("about");

if (about) {

  gsap.registerPlugin(ScrollTrigger);

  const parentElement = document.getElementById('paragraph');
  const words = parentElement.textContent.split(' ');
  parentElement.textContent = "";

  words.forEach(word => {
    const span = document.createElement('span');
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




