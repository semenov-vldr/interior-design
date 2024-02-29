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

// Scroll Footer

function margin() {
  var main = document.querySelector("main");
  var footer = document.querySelector(".footer");
  main.style.marginBottom = footer.offsetHeight + "px";

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