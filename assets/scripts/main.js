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

var handleModalClick = function handleModalClick(_ref) {
  var currentTarget = _ref.currentTarget,
    target = _ref.target;
  var isClickedOnBackdrop = target === currentTarget;
  isClickedOnBackdrop && currentTarget.close();
};
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

// Add your text here
var text = "Более 6 лет создаем интерьер передающий черты его владельца, учитывая образ жизни, увлечения и пожелания всех членов семьи, красивая и удобная обстановка в доме положительно сказывается на настроении, здоровье и финансовом успехе";
var about = document.getElementById("about");
if (about) {
  var scrollingText = function scrollingText() {
    var scrollPercentage = window.scrollY / (document.body.offsetHeight - window.innerHeight);
    var spans = document.querySelectorAll('#paragraph span');
    var numSpansToChange = Math.ceil(scrollPercentage * 4 * spans.length);
    spans.forEach(function (span) {
      span.style.opacity = 0.2;
    });
    for (var i = 0; i < numSpansToChange; i++) {
      spans[i].style.opacity = 1;
    }
  };
  var parentElement = document.getElementById('paragraph');
  var words = text.split(' ');
  words.forEach(function (word) {
    var span = document.createElement('span');
    span.style.opacity = 0.2;
    span.textContent = word + ' ';
    parentElement.appendChild(span);
  });
  ;
  window.addEventListener('scroll', scrollingText);
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
  if (footer) document.body.style.marginBottom = footer.offsetHeight + "px";
}
margin();
window.addEventListener('resize', margin);
"use strict";

var formList = document.querySelectorAll("form.form");
var maskOptions = {
  mask: '+{7} (000) 000-00-00'
};
if (formList) {
  formList.forEach(function (form) {
    var inputTel = form.querySelector('input[type=tel]');
    var mask = IMask(inputTel, maskOptions);

    // const inputName = form.querySelector('input[name=name]');
    // inputName.value = inputName.value.replace(/[^a-zа-яё\s]/gi, '');
  });
}
"use strict";

var cardsContainer = document.querySelector('.guarantees__list');
if (cardsContainer) {
  var _aat = aat,
    ScrollObserver = _aat.ScrollObserver,
    valueAtPercentage = _aat.valueAtPercentage;
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

var hero = document.querySelector(".hero");
if (hero) {
  var updateScrollbarClass = function updateScrollbarClass() {
    var activeSlideIndex = Array.from(heroSlides).findIndex(function (slide) {
      return slide.classList.contains('swiper-slide-active');
    });
    swiperScrollbar.classList.remove('first', 'second', 'third');
    if (activeSlideIndex !== -1) {
      var classNames = ['first', 'second', 'third'];
      swiperScrollbar.classList.add(classNames[activeSlideIndex]);
      var activeSlideLink = heroSlides[activeSlideIndex].dataset.src;
      heroLink.href = activeSlideLink;
    }
  };
  var swiper = new Swiper('.hero__slider', {
    // Optional parameters
    loop: true,
    effect: 'fade',
    autoplay: {
      delay: 3000
    },
    pagination: {
      el: document.getElementById('swiperPagination'),
      type: 'fraction',
      formatFractionCurrent: function formatFractionCurrent(number) {
        return ('0' + number).slice(-2);
      },
      formatFractionTotal: function formatFractionTotal(number) {
        return ('0' + number).slice(-2);
      },
      renderFraction: function renderFraction(currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' + '/' + '<span class="' + totalClass + '"></span>';
      }
    },
    scrollbar: {
      el: document.getElementById('swiperScrollbar')
    }
  });
  var heroSlides = hero.querySelectorAll('.hero__slider .swiper-slide');
  var swiperScrollbar = document.getElementById('swiperScrollbar');
  var heroLink = hero.querySelector('.hero__link');
  ;
  var observerHero = new MutationObserver(updateScrollbarClass);
  heroSlides.forEach(function (slide) {
    return observerHero.observe(slide, {
      attributes: "class"
    });
  });
}
"use strict";

function hideLoader() {
  var loader = document.getElementById('loader');
  if (loader) {
    loader.classList.add('hide');
    setTimeout(function () {
      loader.remove();
    }, 500);
  }
}
;
window.addEventListener('load', hideLoader);
"use strict";

var popup = document.getElementById("popup");
if (popup) {
  var btnPopupOpenList = document.querySelectorAll(".js-popup-open");
  btnPopupOpenList.forEach(function (btnPopupOpen) {
    btnPopupOpen.addEventListener("click", function () {
      popup.showModal();
    });
  });
  popup.addEventListener("click", handleModalClick);
}
"use strict";
"use strict";

var quiz = document.getElementById("quiz");
if (quiz) {
  var btnQuizOpenList = document.querySelectorAll(".js-quiz-open");
  btnQuizOpenList.forEach(function (btnQuizOpen) {
    btnQuizOpen.addEventListener("click", function () {
      quiz.showModal();
    });
  });
  quiz.addEventListener("click", handleModalClick);

  // Range Price

  var rangeArea = quiz.querySelector(".quiz-step-2__range-slider");
  var areaField = quiz.querySelector(".quiz-step-2__range-field");
  var minValue = quiz.querySelector(".quiz-step-2__range-min");
  var maxValue = quiz.querySelector(".quiz-step-2__range-max");
  var areaMin = +areaField.dataset.min;
  var areaMax = +areaField.dataset.max;
  minValue.textContent = areaMin;
  maxValue.textContent = areaMax;
  noUiSlider.create(rangeArea, {
    start: [areaMin],
    connect: "lower",
    step: 10,
    range: {
      'min': areaMin,
      'max': areaMax
    }
  });
  rangeArea.noUiSlider.on('update', function (values, handle) {
    // при изменений положения элементов управления слайдера изменяем соответствующие значения
    areaField.value = "".concat(parseInt(values[handle]), " \u043C\xB2");
  });
}
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