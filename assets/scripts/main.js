"use strict";

var html = document.querySelector('html');
var classBlockScroll = "js-block-scroll";
function blockScrollBody() {
  if (!html.classList.contains(classBlockScroll)) {
    html.classList.add(classBlockScroll);
  }
}
;
function unblockScrollBody() {
  if (html.classList.contains(classBlockScroll)) {
    html.classList.remove(classBlockScroll);
  }
}
;
function toggleBlockScrollBody() {
  if (html.classList.contains(classBlockScroll)) {
    html.classList.remove(classBlockScroll);
  } else {
    html.classList.add(classBlockScroll);
  }
}
;
"use strict";
"use strict";

var phoneInputs = document.querySelectorAll('input[data-tel-input]');
var getInputNumbersValue = function getInputNumbersValue(input) {
  return input.value.replace(/\D/g, "");
};
var onPhoneInput = function onPhoneInput(evt) {
  var input = evt.target;
  var inputNumbersValue = getInputNumbersValue(input);
  var formattedInputValue = "";
  var selectionStart = input.selectionStart;
  if (!inputNumbersValue) input.value = "";
  if (input.value.length !== selectionStart) {
    if (evt.data && /\D/g.test(evt.data)) {
      input.value = formattedInputValue;
    }
    return;
  }
  if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
    // Российские номера
    if (inputNumbersValue[0] === "9") inputNumbersValue = "7" + inputNumbersValue;
    var firstSymbols = inputNumbersValue[0] === "8" ? "8" : "+7";
    formattedInputValue = firstSymbols + " ";
    if (inputNumbersValue[0] === "8") {
      //phoneInputs[0].setAttribute("pattern", ".{17,}");
      console.log(phoneInputs[0].getAttribute("pattern"));
    }
    if (inputNumbersValue.length > 1) {
      formattedInputValue += "(" + inputNumbersValue.slice(1, 4);
    }
    if (inputNumbersValue.length >= 5) {
      formattedInputValue += ") " + inputNumbersValue.slice(4, 7);
    }
    if (inputNumbersValue.length >= 8) {
      formattedInputValue += "-" + inputNumbersValue.slice(7, 9);
    }
    if (inputNumbersValue.length >= 10) {
      formattedInputValue += "-" + inputNumbersValue.slice(9, 11);
    }

    // Не российские номера
  } else formattedInputValue = "+" + inputNumbersValue;
  input.value = formattedInputValue;
};

// Стирание первого символа
var onPhoneKeyDown = function onPhoneKeyDown(evt) {
  var input = evt.target;
  if (evt.keyCode === 8 && getInputNumbersValue(input).length === 1) {
    input.value = "";
  }
};

// Вставка цифр в любое место
var onPhonePaste = function onPhonePaste(evt) {
  var pasted = evt.clipboardData || window.clipboardData;
  var input = evt.target;
  var inputNumbersValue = getInputNumbersValue(input);
  if (pasted) {
    var pastedText = pasted.getData("Text");
    if (/\D/g.test(pastedText)) {
      input.value = inputNumbersValue;
    }
  }
};
phoneInputs.forEach(function (input) {
  input.addEventListener('input', onPhoneInput);
  input.addEventListener("keydown", onPhoneKeyDown);
  input.addEventListener("paste", onPhonePaste);
});
"use strict";

var about = document.getElementById("about");
if (about) {
  var scrollText = function scrollText(aboutTextBlock) {
    var options = {
      threshold: 1,
      rootMargin: '100px 0px -50% 0px'
    };
    var pList = aboutTextBlock.querySelectorAll("p");
    function handlerScrollText(entries) {
      entries.forEach(function (entry) {
        entry.target.classList.toggle('scroll-text', entry.isIntersecting);
      });
    }
    ;
    var observer = new IntersectionObserver(handlerScrollText, options);
    pList.forEach(function (p) {
      return observer.observe(p);
    });
  };
  var aboutTextList = about.querySelectorAll(".about__text");
  aboutTextList.forEach(scrollText);
}
"use strict";

var faq = document.getElementById("faq");
if (faq) {
  var accordionItems = faq.querySelectorAll('.faq__item'); // список элементов аккордиона
  var toggleClass = function toggleClass(item) {
    return item.classList.toggle('js-faq-active');
  };
  accordionItems.forEach(function (accordionItem) {
    accordionItem.addEventListener('click', function () {
      return toggleClass(accordionItem);
    });
  });
}
"use strict";

// Scroll Footer

function margin() {
  var footer = document.querySelector(".footer");
  document.body.style.marginBottom = footer.offsetHeight + "px";

  // const hero = document.querySelector(".hero");
  // const guarantees = document.querySelector(".guarantees");
  // guarantees.style.marginTop = hero.offsetHeight + "px";
}

margin();
window.addEventListener('resize', margin);
"use strict";

var _aat = aat,
  ScrollObserver = _aat.ScrollObserver,
  valueAtPercentage = _aat.valueAtPercentage;
var cardsContainer = document.querySelector('.guarantees__list');
if (cardsContainer) {
  var cards = document.querySelectorAll('.guarantees__item');
  Array.from(cards).forEach(function (card, index) {
    var offsetTop = 20 + index * 20;
    card.style.paddingTop = "".concat(offsetTop, "px");
    if (index === cards.length - 1) {
      return;
    }
    var toScale = 1 - (cards.length - 1 - index) * 0.1;
    var nextCard = cards[index + 1];
    ScrollObserver.Element(nextCard, {
      offsetTop: offsetTop,
      offsetBottom: window.innerHeight - card.clientHeight
    }).onScroll(function (_ref) {
      var percentageY = _ref.percentageY;
      card.style.scale = valueAtPercentage({
        from: 1,
        to: toScale,
        percentage: percentageY
      });
      card.style.filter = "brightness(".concat(valueAtPercentage({
        from: 1,
        to: 0.6,
        percentage: percentageY
      }), ")");
    });
  });
}
"use strict";

function mobileNav() {
  var header = document.querySelector("header.header");
  if (!header) return;
  var nav = header.querySelector(".header__nav");
  var burger = header.querySelector(".header__burger");

  // Открытие мобильного меню Бургер
  burger.addEventListener("click", function () {
    nav.classList.toggle("js-mobile-nav-open");
    document.querySelector('html').classList.toggle('js-no-scroll');
  });
  window.onscroll = function () {
    header.classList.toggle('js-scroll', window.scrollY > 1);
  };
}
mobileNav();
"use strict";

var loader = document.getElementById('loader');
function hideLoader() {
  loader.classList.add('hide');
  setTimeout(function () {
    loader.remove();
  }, 500);
}
;
if (loader) window.addEventListener('load', hideLoader);
"use strict";
"use strict";
"use strict";

var stages = document.getElementById("stages");
if (stages) {
  var scrollStages = function scrollStages(stageItem) {
    var options = {
      threshold: 1,
      rootMargin: '-25% 0px -35% 0px'
    };
    function handlerScrollStages(entries) {
      entries.forEach(function (entry) {
        entry.target.classList.toggle('js-stages-scroll', entry.isIntersecting);
        var dataStage = +stageItem.dataset.stage;
        var stageIndex = dataStage - 1;
        if (stageItem.classList.contains('js-stages-scroll')) {
          stagesImages.forEach(function (img) {
            return img.classList.remove('js-stages-scroll');
          });
          stagesImages[stageIndex].classList.remove('js-abroad');
          stagesImages[stageIndex].classList.add('js-stages-scroll');
        } else {
          stagesImages[stageIndex].classList.add('js-abroad');
        }
      });
    }
    ;
    var observer = new IntersectionObserver(handlerScrollStages, options);
    observer.observe(stageItem);
  };
  var stagesList = stages.querySelectorAll(".stages__item");
  var stagesImages = stages.querySelectorAll(".stages__image-wrapper img");
  stagesList.forEach(scrollStages);
}