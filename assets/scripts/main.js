"use strict";

// Отправка данных формы в Телеграм
var TOKEN = "6388509099:AAFIQyVlZ4MapEiXhH2vQJh8CyZFgFoJ_mA";
var CHAT_ID = "-1002008090284";
var URL_API = "https://api.telegram.org/bot".concat(TOKEN, "/sendMessage");
var URL_API_DOC = "https://api.telegram.org/bot".concat(TOKEN, "/sendDocument");
var forms = document.querySelectorAll("form.form");
if (forms) {
  forms.forEach(function (form) {
    return form.addEventListener("submit", sendMessageTelegram);
  });
}
function sendMessageTelegram(evt) {
  evt.preventDefault();
  var typeConnection = this.querySelector(".form__connection-fieldset input[type='radio']:checked");
  var successFormMessage = this.querySelector('.form__message--success');
  var errorFormMessage = this.querySelector('.form__message--error');
  var quiz = this.closest("#quiz");
  function formSuccess() {
    successFormMessage.classList.add('js-message-active');
    quiz && setTimeout(function () {
      return location.reload();
    }, 3000);
  }
  function formError() {
    errorFormMessage.classList.add('js-message-active');
    quiz && setTimeout(function () {
      return location.reload();
    }, 3000);
  }
  var message = "<b>\u0417\u0430\u044F\u0432\u043A\u0430 \u0414\u0438\u0437\u0430\u0439\u043D \u0418\u043D\u0442\u0435\u0440\u044C\u0435\u0440\u0430</b>\n";
  message += "<b>\u0418\u043C\u044F: ".concat(this.name.value, " </b>\n");
  message += "<b>\u0422\u0435\u043B\u0435\u0444\u043E\u043D: ".concat(this.tel.value, " </b>\n");
  message += "<b>\u0421\u043F\u043E\u0441\u043E\u0431 \u0441\u0432\u044F\u0437\u0438: ".concat(typeConnection.value, " </b>\n");

  // Если форма в квизе
  if (quiz) {
    var areaField = quiz.querySelector(".quiz-step-2__range-field");
    var checkedRoomType = quiz.querySelector(".quiz__step-1 fieldset input[type='radio']:checked");
    var checkedBudget = quiz.querySelector(".quiz__step-3 fieldset input[type='radio']:checked");
    var checkedStyleRoom = quiz.querySelector(".quiz__step-4 fieldset input[type='radio']:checked");
    message += "<b>----------</b>\n";
    checkedRoomType ? message += "<b>\u0422\u0438\u043F \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u044F: ".concat(checkedRoomType.value, " </b>\n") : null;
    areaField ? message += "<b>\u041F\u043B\u043E\u0449\u0430\u0434\u044C \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u044F: ".concat(areaField.value, " </b>\n") : null;
    checkedBudget ? message += "<b>\u0411\u044E\u0434\u0436\u0435\u0442: ".concat(checkedBudget.value, " </b>\n") : null;
    checkedStyleRoom ? message += "<b>\u0421\u0442\u0438\u043B\u044C \u0438\u043D\u0442\u0435\u0440\u044C\u0435\u0440\u0430: ".concat(checkedStyleRoom.value, " </b>\n") : null;
  }
  axios.post(URL_API, {
    chat_id: CHAT_ID,
    parse_mode: "html",
    text: message
  }).then(function () {
    console.log("Заявка отправлена");
    formSuccess();
  })["catch"](function (err) {
    console.warn(err);
    formError();
  })["finally"](function () {
    console.log("Конец");
  });
  this.reset();

  // Send Doc
  var inputFile = quiz.querySelector(".add-layout input[type='file']").files[0];
  if (inputFile) {
    var formData = new FormData();
    formData.append('chat_id', CHAT_ID);
    formData.append('document', inputFile);
    axios.post(URL_API_DOC, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(function () {
      console.log("Документ отправлен");
    })["catch"](function (err) {
      console.warn(err);
    })["finally"](function () {
      console.log("Конец");
    });
    this.reset();
  }
}
;
"use strict";

var html = document.querySelector('html');
var classBlockScroll = "js-no-scroll";
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

function closingDialog(_ref) {
  var target = _ref.target;
  var dialog = target.closest("dialog");
  var form = dialog.querySelector("form");
  dialog.querySelectorAll(".form__message").forEach(function (message) {
    message.classList.remove('js-message-active');
  });
  dialog.close();
  form.reset();

  // if ( dialog.classList.contains("quiz") ) {
  //   const inputs = dialog.querySelectorAll('input');
  //   inputs.forEach(input => {
  //     input.value = "";
  //     input.checked = false;
  //   });
  //
  //   const quizStepList = dialog.querySelector(".quiz__steps");
  //   const quizStep_0_5 = dialog.querySelectorAll('.quiz__step');
  //   const quizStepForm = dialog.querySelector('.quiz__step--form');
  //   const quizStepsFooter = dialog.querySelector(".quiz__steps-footer");
  //   const quizProgress = dialog.querySelector(".quiz__progress");
  //   quizStep_0_5[0].classList.remove("hidden");
  //   quizStep_0_5[1].classList.remove("hidden");
  //   quizStepsFooter.classList.remove("hidden");
  //   quizProgress.classList.remove("hidden");
  //
  //   [ quizStep_0_5[2],
  //     quizStep_0_5[3],
  //     quizStep_0_5[4],
  //     quizStep_0_5[5],
  //     quizStepForm,
  //     quizStepList
  //   ].forEach(step => step.classList.add("hidden"));
  // }
}
"use strict";

var handleModalClick = function handleModalClick(evt) {
  var isClickedOnBackdrop = evt.target === evt.currentTarget;
  isClickedOnBackdrop && closingDialog(evt);
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

var about = document.getElementById("about");
if (about) {
  gsap.registerPlugin(ScrollTrigger);
  var parentElement = document.getElementById('paragraph');
  var words = parentElement.textContent.split(' ');
  parentElement.textContent = "";
  words.forEach(function (word) {
    var span = document.createElement('span');
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
      end: "top 30%"
    }
  });
}
"use strict";

var cursor = document.querySelector('.cursor');
if (cursor) {
  var onMouseMove = function onMouseMove(e) {
    gsap.to($bigBall, .4, {
      x: e.pageX - 12,
      y: e.pageY - 12
    });
    gsap.to($smallBall, .1, {
      x: e.pageX - 5,
      y: e.pageY - 8
    });
    var footer = document.querySelector("#footer");
    var isFooterHover = e.pageY > document.documentElement.scrollHeight - footer.offsetHeight;
    footer && cursor.classList.toggle("hover-footer", isFooterHover);
  };
  var $bigBall = document.querySelector('.cursor__ball--big');
  var $smallBall = document.querySelector('.cursor__ball--small');
  document.body.addEventListener('mousemove', onMouseMove);
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
  if (footer) {
    document.body.style.marginBottom = footer.offsetHeight + "px";
  }
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
  var navLinks = nav.querySelectorAll(".header-nav__link");
  function closeMenu() {
    nav.classList.remove("js-mobile-nav-open");
    unblockScrollBody();
  }
  ;

  // Открытие мобильного меню Бургер
  burger.addEventListener("click", function () {
    nav.classList.toggle("js-mobile-nav-open");
    toggleBlockScrollBody();

    // Скрытие меню по клику вне блока
    if (nav.classList.contains("js-mobile-nav-open")) {
      document.addEventListener("click", function (evt) {
        if (!evt.target.closest(".header")) closeMenu();
      });
    }
  });
  window.onscroll = function () {
    header.classList.toggle('js-scroll', window.scrollY > 1);
  };
  navLinks.forEach(function (navLink) {
    navLink.addEventListener("click", closeMenu);
  });
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

// Dialog popup
var popup = document.getElementById("popup");
if (popup) {
  // Кнопки с классом, которые открывают поп-ап
  var btnPopupOpenList = document.querySelectorAll(".js-popup-open");
  btnPopupOpenList.forEach(function (btnPopupOpen) {
    btnPopupOpen.addEventListener("click", function () {
      popup.showModal();
    });
  });
  popup.addEventListener("click", handleModalClick);
  var closePopup = popup.querySelector(".popup__close");
  closePopup.addEventListener("click", closingDialog);
}
"use strict";

AOS.init({
  disable: function disable() {
    var maxWidth = 767;
    return window.innerWidth < maxWidth;
  }
});
"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var quiz = document.getElementById("quiz");
if (quiz) {
  // Показ активного шага квиза
  var quizDisplay = function quizDisplay(questionCount) {
    quizSteps.forEach(function (quizStep) {
      quizStep.classList.add('hidden');
    });
    quizSteps[questionCount].classList.remove('hidden');
  };
  var handlerLearnMoreBtn = function handlerLearnMoreBtn() {
    step_0.classList.add("hidden");
    quizStepList.classList.remove('hidden');
  };
  var handlerQuizNextBtn = function handlerQuizNextBtn() {
    questionCount++;
    quizDisplay(questionCount);
    quizProgressTotal.textContent = "".concat(questionCount, "/").concat(quizSteps.length - 2);
    quizProgressInner.style.width = "".concat(100 / (quizSteps.length - 2) * questionCount, "%");
    if (questionCount === quizSteps.length - 1) {
      quizStepsFooter.classList.add("hidden");
      quizProgress.classList.add("hidden");
      quizStepList.classList.add("hidden");
    }
    if (questionCount === 2) stepNextBtn.disabled = true;
  };
  // Счетчик шагов
  var questionCount = 1;

  // Кнопки с классом, которые открывают Квиз
  var btnQuizOpenList = document.querySelectorAll(".js-quiz-open");
  btnQuizOpenList.forEach(function (btnQuizOpen) {
    btnQuizOpen.addEventListener("click", function () {
      quiz.showModal();
    });
  });

  // Закрытие квиза по клику вне квиза
  quiz.addEventListener("click", handleModalClick);

  // Закрытие квиза
  var closeQuiz = quiz.querySelector(".quiz__close");
  closeQuiz.addEventListener("click", function (evt) {
    closingDialog(evt);
    //questionCount = 1;
    //
    // const rangeArea = quiz.querySelector(".quiz-step-2__range-slider");
    // rangeArea.noUiSlider.reset();
  });

  // --- Range Price ---
  var step_2 = quiz.querySelector(".quiz__step.quiz__step-2");
  var rangeArea = quiz.querySelector(".quiz-step-2__range-slider");
  var areaField = quiz.querySelector(".quiz-step-2__range-field");
  var minValue = quiz.querySelector(".quiz-step-2__range-min");
  var maxValue = quiz.querySelector(".quiz-step-2__range-max");
  var stepNextBtn = quiz.querySelector(".quiz__steps-footer .quiz__steps-next");
  var areaMin = +areaField.dataset.min;
  var areaMax = +areaField.dataset.max;
  minValue.textContent = areaMin;
  maxValue.textContent = areaMax;
  noUiSlider.create(rangeArea, {
    start: [areaMin],
    connect: "lower",
    step: 5,
    range: {
      'min': areaMin,
      'max': areaMax
    }
  });

  // при изменений положения элементов управления слайдера изменяем соответствующие значения
  rangeArea.noUiSlider.on('update', function (values, handle) {
    areaField.value = "".concat(parseInt(values[handle]), " \u043C\xB2");
    stepNextBtn.disabled = false;
  });

  // --- Переключение шагов квиза ---
  var quizSteps = quiz.querySelectorAll(".quiz__step");
  var quizNextBtn = quiz.querySelector(".quiz__steps-next");
  var step_0 = quiz.querySelector(".quiz__step.quiz__step-0");
  var quizStepList = quiz.querySelector(".quiz__steps");
  var quizStepsFooter = quiz.querySelector(".quiz__steps-footer");
  var quizProgress = quiz.querySelector(".quiz__progress");
  var quizProgressInner = quizProgress.querySelector(".quiz__progress-inner");
  var quizProgressTotal = quizProgress.querySelector(".quiz__progress-total");
  ;
  var learnMoreBtn = quiz.querySelector(".quiz-step-0__btn");
  learnMoreBtn.addEventListener('click', handlerLearnMoreBtn);
  quizNextBtn.addEventListener('click', handlerQuizNextBtn);

  // Add File
  var addLayout = quiz.querySelector('.add-layout');
  var inputFile = addLayout.querySelector('#file');
  inputFile.addEventListener('change', function (e) {
    // Get the selected file
    var _e$target$files = _slicedToArray(e.target.files, 1),
      file = _e$target$files[0];
    // Get the file name and size
    var fileName = file.name,
      size = file.size;
    // Convert size in bytes to kilo bytes
    var fileSize = (size / 1024 / 1024).toFixed(4);
    // Set the text content
    var fileNameAndSize = "".concat(fileName, " - ").concat(fileSize, "MB");
    quiz.querySelector('.add-layout__data').textContent = fileNameAndSize;
    addLayout.classList.add("js-add-file");
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