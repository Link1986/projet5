/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/jquery.flexslider-min.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/jquery.flexslider-min.js":
/*!********************************************!*\
  !*** ./assets/js/jquery.flexslider-min.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate) {var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
 * jQuery FlexSlider v2.5.0
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */!function ($) {
  $.flexslider = function (e, t) {
    var a = $(e);a.vars = $.extend({}, $.flexslider.defaults, t);var n = a.vars.namespace,
        i = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
        s = ("ontouchstart" in window || i || window.DocumentTouch && document instanceof DocumentTouch) && a.vars.touch,
        r = "click touchend MSPointerUp keyup",
        o = "",
        l,
        c = "vertical" === a.vars.direction,
        d = a.vars.reverse,
        u = a.vars.itemWidth > 0,
        v = "fade" === a.vars.animation,
        p = "" !== a.vars.asNavFor,
        m = {},
        f = !0;$.data(e, "flexslider", a), m = { init: function init() {
        a.animating = !1, a.currentSlide = parseInt(a.vars.startAt ? a.vars.startAt : 0, 10), isNaN(a.currentSlide) && (a.currentSlide = 0), a.animatingTo = a.currentSlide, a.atEnd = 0 === a.currentSlide || a.currentSlide === a.last, a.containerSelector = a.vars.selector.substr(0, a.vars.selector.search(" ")), a.slides = $(a.vars.selector, a), a.container = $(a.containerSelector, a), a.count = a.slides.length, a.syncExists = $(a.vars.sync).length > 0, "slide" === a.vars.animation && (a.vars.animation = "swing"), a.prop = c ? "top" : "marginLeft", a.args = {}, a.manualPause = !1, a.stopped = !1, a.started = !1, a.startTimeout = null, a.transitions = !a.vars.video && !v && a.vars.useCSS && function () {
          var e = document.createElement("div"),
              t = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];for (var n in t) {
            if (void 0 !== e.style[t[n]]) return a.pfx = t[n].replace("Perspective", "").toLowerCase(), a.prop = "-" + a.pfx + "-transform", !0;
          }return !1;
        }(), a.ensureAnimationEnd = "", "" !== a.vars.controlsContainer && (a.controlsContainer = $(a.vars.controlsContainer).length > 0 && $(a.vars.controlsContainer)), "" !== a.vars.manualControls && (a.manualControls = $(a.vars.manualControls).length > 0 && $(a.vars.manualControls)), "" !== a.vars.customDirectionNav && (a.customDirectionNav = 2 === $(a.vars.customDirectionNav).length && $(a.vars.customDirectionNav)), a.vars.randomize && (a.slides.sort(function () {
          return Math.round(Math.random()) - .5;
        }), a.container.empty().append(a.slides)), a.doMath(), a.setup("init"), a.vars.controlNav && m.controlNav.setup(), a.vars.directionNav && m.directionNav.setup(), a.vars.keyboard && (1 === $(a.containerSelector).length || a.vars.multipleKeyboard) && $(document).bind("keyup", function (e) {
          var t = e.keyCode;if (!a.animating && (39 === t || 37 === t)) {
            var n = 39 === t ? a.getTarget("next") : 37 === t ? a.getTarget("prev") : !1;a.flexAnimate(n, a.vars.pauseOnAction);
          }
        }), a.vars.mousewheel && a.bind("mousewheel", function (e, t, n, i) {
          e.preventDefault();var s = a.getTarget(0 > t ? "next" : "prev");a.flexAnimate(s, a.vars.pauseOnAction);
        }), a.vars.pausePlay && m.pausePlay.setup(), a.vars.slideshow && a.vars.pauseInvisible && m.pauseInvisible.init(), a.vars.slideshow && (a.vars.pauseOnHover && a.hover(function () {
          a.manualPlay || a.manualPause || a.pause();
        }, function () {
          a.manualPause || a.manualPlay || a.stopped || a.play();
        }), a.vars.pauseInvisible && m.pauseInvisible.isHidden() || (a.vars.initDelay > 0 ? a.startTimeout = setTimeout(a.play, a.vars.initDelay) : a.play())), p && m.asNav.setup(), s && a.vars.touch && m.touch(), (!v || v && a.vars.smoothHeight) && $(window).bind("resize orientationchange focus", m.resize), a.find("img").attr("draggable", "false"), setTimeout(function () {
          a.vars.start(a);
        }, 200);
      }, asNav: { setup: function setup() {
          a.asNav = !0, a.animatingTo = Math.floor(a.currentSlide / a.move), a.currentItem = a.currentSlide, a.slides.removeClass(n + "active-slide").eq(a.currentItem).addClass(n + "active-slide"), i ? (e._slider = a, a.slides.each(function () {
            var e = this;e._gesture = new MSGesture(), e._gesture.target = e, e.addEventListener("MSPointerDown", function (e) {
              e.preventDefault(), e.currentTarget._gesture && e.currentTarget._gesture.addPointer(e.pointerId);
            }, !1), e.addEventListener("MSGestureTap", function (e) {
              e.preventDefault();var t = $(this),
                  n = t.index();$(a.vars.asNavFor).data("flexslider").animating || t.hasClass("active") || (a.direction = a.currentItem < n ? "next" : "prev", a.flexAnimate(n, a.vars.pauseOnAction, !1, !0, !0));
            });
          })) : a.slides.on(r, function (e) {
            e.preventDefault();var t = $(this),
                i = t.index(),
                s = t.offset().left - $(a).scrollLeft();0 >= s && t.hasClass(n + "active-slide") ? a.flexAnimate(a.getTarget("prev"), !0) : $(a.vars.asNavFor).data("flexslider").animating || t.hasClass(n + "active-slide") || (a.direction = a.currentItem < i ? "next" : "prev", a.flexAnimate(i, a.vars.pauseOnAction, !1, !0, !0));
          });
        } }, controlNav: { setup: function setup() {
          a.manualControls ? m.controlNav.setupManual() : m.controlNav.setupPaging();
        }, setupPaging: function setupPaging() {
          var e = "thumbnails" === a.vars.controlNav ? "control-thumbs" : "control-paging",
              t = 1,
              i,
              s;if (a.controlNavScaffold = $('<ol class="' + n + "control-nav " + n + e + '"></ol>'), a.pagingCount > 1) for (var l = 0; l < a.pagingCount; l++) {
            if (s = a.slides.eq(l), i = "thumbnails" === a.vars.controlNav ? '<img src="' + s.attr("data-thumb") + '"/>' : "<a>" + t + "</a>", "thumbnails" === a.vars.controlNav && !0 === a.vars.thumbCaptions) {
              var c = s.attr("data-thumbcaption");"" !== c && void 0 !== c && (i += '<span class="' + n + 'caption">' + c + "</span>");
            }a.controlNavScaffold.append("<li>" + i + "</li>"), t++;
          }a.controlsContainer ? $(a.controlsContainer).append(a.controlNavScaffold) : a.append(a.controlNavScaffold), m.controlNav.set(), m.controlNav.active(), a.controlNavScaffold.delegate("a, img", r, function (e) {
            if (e.preventDefault(), "" === o || o === e.type) {
              var t = $(this),
                  i = a.controlNav.index(t);t.hasClass(n + "active") || (a.direction = i > a.currentSlide ? "next" : "prev", a.flexAnimate(i, a.vars.pauseOnAction));
            }"" === o && (o = e.type), m.setToClearWatchedEvent();
          });
        }, setupManual: function setupManual() {
          a.controlNav = a.manualControls, m.controlNav.active(), a.controlNav.bind(r, function (e) {
            if (e.preventDefault(), "" === o || o === e.type) {
              var t = $(this),
                  i = a.controlNav.index(t);t.hasClass(n + "active") || (a.direction = i > a.currentSlide ? "next" : "prev", a.flexAnimate(i, a.vars.pauseOnAction));
            }"" === o && (o = e.type), m.setToClearWatchedEvent();
          });
        }, set: function set() {
          var e = "thumbnails" === a.vars.controlNav ? "img" : "a";a.controlNav = $("." + n + "control-nav li " + e, a.controlsContainer ? a.controlsContainer : a);
        }, active: function active() {
          a.controlNav.removeClass(n + "active").eq(a.animatingTo).addClass(n + "active");
        }, update: function update(e, t) {
          a.pagingCount > 1 && "add" === e ? a.controlNavScaffold.append($("<li><a>" + a.count + "</a></li>")) : 1 === a.pagingCount ? a.controlNavScaffold.find("li").remove() : a.controlNav.eq(t).closest("li").remove(), m.controlNav.set(), a.pagingCount > 1 && a.pagingCount !== a.controlNav.length ? a.update(t, e) : m.controlNav.active();
        } }, directionNav: { setup: function setup() {
          var e = $('<ul class="' + n + 'direction-nav"><li class="' + n + 'nav-prev"><a class="' + n + 'prev" href="#">' + a.vars.prevText + '</a></li><li class="' + n + 'nav-next"><a class="' + n + 'next" href="#">' + a.vars.nextText + "</a></li></ul>");a.customDirectionNav ? a.directionNav = a.customDirectionNav : a.controlsContainer ? ($(a.controlsContainer).append(e), a.directionNav = $("." + n + "direction-nav li a", a.controlsContainer)) : (a.append(e), a.directionNav = $("." + n + "direction-nav li a", a)), m.directionNav.update(), a.directionNav.bind(r, function (e) {
            e.preventDefault();var t;("" === o || o === e.type) && (t = a.getTarget($(this).hasClass(n + "next") ? "next" : "prev"), a.flexAnimate(t, a.vars.pauseOnAction)), "" === o && (o = e.type), m.setToClearWatchedEvent();
          });
        }, update: function update() {
          var e = n + "disabled";1 === a.pagingCount ? a.directionNav.addClass(e).attr("tabindex", "-1") : a.vars.animationLoop ? a.directionNav.removeClass(e).removeAttr("tabindex") : 0 === a.animatingTo ? a.directionNav.removeClass(e).filter("." + n + "prev").addClass(e).attr("tabindex", "-1") : a.animatingTo === a.last ? a.directionNav.removeClass(e).filter("." + n + "next").addClass(e).attr("tabindex", "-1") : a.directionNav.removeClass(e).removeAttr("tabindex");
        } }, pausePlay: { setup: function setup() {
          var e = $('<div class="' + n + 'pauseplay"><a></a></div>');a.controlsContainer ? (a.controlsContainer.append(e), a.pausePlay = $("." + n + "pauseplay a", a.controlsContainer)) : (a.append(e), a.pausePlay = $("." + n + "pauseplay a", a)), m.pausePlay.update(a.vars.slideshow ? n + "pause" : n + "play"), a.pausePlay.bind(r, function (e) {
            e.preventDefault(), ("" === o || o === e.type) && ($(this).hasClass(n + "pause") ? (a.manualPause = !0, a.manualPlay = !1, a.pause()) : (a.manualPause = !1, a.manualPlay = !0, a.play())), "" === o && (o = e.type), m.setToClearWatchedEvent();
          });
        }, update: function update(e) {
          "play" === e ? a.pausePlay.removeClass(n + "pause").addClass(n + "play").html(a.vars.playText) : a.pausePlay.removeClass(n + "play").addClass(n + "pause").html(a.vars.pauseText);
        } }, touch: function touch() {
        function t(t) {
          t.stopPropagation(), a.animating ? t.preventDefault() : (a.pause(), e._gesture.addPointer(t.pointerId), w = 0, p = c ? a.h : a.w, f = Number(new Date()), l = u && d && a.animatingTo === a.last ? 0 : u && d ? a.limit - (a.itemW + a.vars.itemMargin) * a.move * a.animatingTo : u && a.currentSlide === a.last ? a.limit : u ? (a.itemW + a.vars.itemMargin) * a.move * a.currentSlide : d ? (a.last - a.currentSlide + a.cloneOffset) * p : (a.currentSlide + a.cloneOffset) * p);
        }function n(t) {
          t.stopPropagation();var a = t.target._slider;if (a) {
            var n = -t.translationX,
                i = -t.translationY;return w += c ? i : n, m = w, y = c ? Math.abs(w) < Math.abs(-n) : Math.abs(w) < Math.abs(-i), t.detail === t.MSGESTURE_FLAG_INERTIA ? void setImmediate(function () {
              e._gesture.stop();
            }) : void ((!y || Number(new Date()) - f > 500) && (t.preventDefault(), !v && a.transitions && (a.vars.animationLoop || (m = w / (0 === a.currentSlide && 0 > w || a.currentSlide === a.last && w > 0 ? Math.abs(w) / p + 2 : 1)), a.setProps(l + m, "setTouch"))));
          }
        }function s(e) {
          e.stopPropagation();var t = e.target._slider;if (t) {
            if (t.animatingTo === t.currentSlide && !y && null !== m) {
              var a = d ? -m : m,
                  n = t.getTarget(a > 0 ? "next" : "prev");t.canAdvance(n) && (Number(new Date()) - f < 550 && Math.abs(a) > 50 || Math.abs(a) > p / 2) ? t.flexAnimate(n, t.vars.pauseOnAction) : v || t.flexAnimate(t.currentSlide, t.vars.pauseOnAction, !0);
            }r = null, o = null, m = null, l = null, w = 0;
          }
        }var r,
            o,
            l,
            p,
            m,
            f,
            g,
            h,
            _S,
            y = !1,
            x = 0,
            b = 0,
            w = 0;i ? (e.style.msTouchAction = "none", e._gesture = new MSGesture(), e._gesture.target = e, e.addEventListener("MSPointerDown", t, !1), e._slider = a, e.addEventListener("MSGestureChange", n, !1), e.addEventListener("MSGestureEnd", s, !1)) : (g = function g(t) {
          a.animating ? t.preventDefault() : (window.navigator.msPointerEnabled || 1 === t.touches.length) && (a.pause(), p = c ? a.h : a.w, f = Number(new Date()), x = t.touches[0].pageX, b = t.touches[0].pageY, l = u && d && a.animatingTo === a.last ? 0 : u && d ? a.limit - (a.itemW + a.vars.itemMargin) * a.move * a.animatingTo : u && a.currentSlide === a.last ? a.limit : u ? (a.itemW + a.vars.itemMargin) * a.move * a.currentSlide : d ? (a.last - a.currentSlide + a.cloneOffset) * p : (a.currentSlide + a.cloneOffset) * p, r = c ? b : x, o = c ? x : b, e.addEventListener("touchmove", h, !1), e.addEventListener("touchend", _S, !1));
        }, h = function h(e) {
          x = e.touches[0].pageX, b = e.touches[0].pageY, m = c ? r - b : r - x, y = c ? Math.abs(m) < Math.abs(x - o) : Math.abs(m) < Math.abs(b - o);var t = 500;(!y || Number(new Date()) - f > t) && (e.preventDefault(), !v && a.transitions && (a.vars.animationLoop || (m /= 0 === a.currentSlide && 0 > m || a.currentSlide === a.last && m > 0 ? Math.abs(m) / p + 2 : 1), a.setProps(l + m, "setTouch")));
        }, _S = function S(t) {
          if (e.removeEventListener("touchmove", h, !1), a.animatingTo === a.currentSlide && !y && null !== m) {
            var n = d ? -m : m,
                i = a.getTarget(n > 0 ? "next" : "prev");a.canAdvance(i) && (Number(new Date()) - f < 550 && Math.abs(n) > 50 || Math.abs(n) > p / 2) ? a.flexAnimate(i, a.vars.pauseOnAction) : v || a.flexAnimate(a.currentSlide, a.vars.pauseOnAction, !0);
          }e.removeEventListener("touchend", _S, !1), r = null, o = null, m = null, l = null;
        }, e.addEventListener("touchstart", g, !1));
      }, resize: function resize() {
        !a.animating && a.is(":visible") && (u || a.doMath(), v ? m.smoothHeight() : u ? (a.slides.width(a.computedW), a.update(a.pagingCount), a.setProps()) : c ? (a.viewport.height(a.h), a.setProps(a.h, "setTotal")) : (a.vars.smoothHeight && m.smoothHeight(), a.newSlides.width(a.computedW), a.setProps(a.computedW, "setTotal")));
      }, smoothHeight: function smoothHeight(e) {
        if (!c || v) {
          var t = v ? a : a.viewport;e ? t.animate({ height: a.slides.eq(a.animatingTo).height() }, e) : t.height(a.slides.eq(a.animatingTo).height());
        }
      }, sync: function sync(e) {
        var t = $(a.vars.sync).data("flexslider"),
            n = a.animatingTo;switch (e) {case "animate":
            t.flexAnimate(n, a.vars.pauseOnAction, !1, !0);break;case "play":
            t.playing || t.asNav || t.play();break;case "pause":
            t.pause();}
      }, uniqueID: function uniqueID(e) {
        return e.filter("[id]").add(e.find("[id]")).each(function () {
          var e = $(this);e.attr("id", e.attr("id") + "_clone");
        }), e;
      }, pauseInvisible: { visProp: null, init: function init() {
          var e = m.pauseInvisible.getHiddenProp();if (e) {
            var t = e.replace(/[H|h]idden/, "") + "visibilitychange";document.addEventListener(t, function () {
              m.pauseInvisible.isHidden() ? a.startTimeout ? clearTimeout(a.startTimeout) : a.pause() : a.started ? a.play() : a.vars.initDelay > 0 ? setTimeout(a.play, a.vars.initDelay) : a.play();
            });
          }
        }, isHidden: function isHidden() {
          var e = m.pauseInvisible.getHiddenProp();return e ? document[e] : !1;
        }, getHiddenProp: function getHiddenProp() {
          var e = ["webkit", "moz", "ms", "o"];if ("hidden" in document) return "hidden";for (var t = 0; t < e.length; t++) {
            if (e[t] + "Hidden" in document) return e[t] + "Hidden";
          }return null;
        } }, setToClearWatchedEvent: function setToClearWatchedEvent() {
        clearTimeout(l), l = setTimeout(function () {
          o = "";
        }, 3e3);
      } }, a.flexAnimate = function (e, t, i, r, o) {
      if (a.vars.animationLoop || e === a.currentSlide || (a.direction = e > a.currentSlide ? "next" : "prev"), p && 1 === a.pagingCount && (a.direction = a.currentItem < e ? "next" : "prev"), !a.animating && (a.canAdvance(e, o) || i) && a.is(":visible")) {
        if (p && r) {
          var l = $(a.vars.asNavFor).data("flexslider");if (a.atEnd = 0 === e || e === a.count - 1, l.flexAnimate(e, !0, !1, !0, o), a.direction = a.currentItem < e ? "next" : "prev", l.direction = a.direction, Math.ceil((e + 1) / a.visible) - 1 === a.currentSlide || 0 === e) return a.currentItem = e, a.slides.removeClass(n + "active-slide").eq(e).addClass(n + "active-slide"), !1;a.currentItem = e, a.slides.removeClass(n + "active-slide").eq(e).addClass(n + "active-slide"), e = Math.floor(e / a.visible);
        }if (a.animating = !0, a.animatingTo = e, t && a.pause(), a.vars.before(a), a.syncExists && !o && m.sync("animate"), a.vars.controlNav && m.controlNav.active(), u || a.slides.removeClass(n + "active-slide").eq(e).addClass(n + "active-slide"), a.atEnd = 0 === e || e === a.last, a.vars.directionNav && m.directionNav.update(), e === a.last && (a.vars.end(a), a.vars.animationLoop || a.pause()), v) s ? (a.slides.eq(a.currentSlide).css({ opacity: 0, zIndex: 1 }), a.slides.eq(e).css({ opacity: 1, zIndex: 2 }), a.wrapup(f)) : (a.slides.eq(a.currentSlide).css({ zIndex: 1 }).animate({ opacity: 0 }, a.vars.animationSpeed, a.vars.easing), a.slides.eq(e).css({ zIndex: 2 }).animate({ opacity: 1 }, a.vars.animationSpeed, a.vars.easing, a.wrapup));else {
          var f = c ? a.slides.filter(":first").height() : a.computedW,
              g,
              h,
              S;u ? (g = a.vars.itemMargin, S = (a.itemW + g) * a.move * a.animatingTo, h = S > a.limit && 1 !== a.visible ? a.limit : S) : h = 0 === a.currentSlide && e === a.count - 1 && a.vars.animationLoop && "next" !== a.direction ? d ? (a.count + a.cloneOffset) * f : 0 : a.currentSlide === a.last && 0 === e && a.vars.animationLoop && "prev" !== a.direction ? d ? 0 : (a.count + 1) * f : d ? (a.count - 1 - e + a.cloneOffset) * f : (e + a.cloneOffset) * f, a.setProps(h, "", a.vars.animationSpeed), a.transitions ? (a.vars.animationLoop && a.atEnd || (a.animating = !1, a.currentSlide = a.animatingTo), a.container.unbind("webkitTransitionEnd transitionend"), a.container.bind("webkitTransitionEnd transitionend", function () {
            clearTimeout(a.ensureAnimationEnd), a.wrapup(f);
          }), clearTimeout(a.ensureAnimationEnd), a.ensureAnimationEnd = setTimeout(function () {
            a.wrapup(f);
          }, a.vars.animationSpeed + 100)) : a.container.animate(a.args, a.vars.animationSpeed, a.vars.easing, function () {
            a.wrapup(f);
          });
        }a.vars.smoothHeight && m.smoothHeight(a.vars.animationSpeed);
      }
    }, a.wrapup = function (e) {
      v || u || (0 === a.currentSlide && a.animatingTo === a.last && a.vars.animationLoop ? a.setProps(e, "jumpEnd") : a.currentSlide === a.last && 0 === a.animatingTo && a.vars.animationLoop && a.setProps(e, "jumpStart")), a.animating = !1, a.currentSlide = a.animatingTo, a.vars.after(a);
    }, a.animateSlides = function () {
      !a.animating && f && a.flexAnimate(a.getTarget("next"));
    }, a.pause = function () {
      clearInterval(a.animatedSlides), a.animatedSlides = null, a.playing = !1, a.vars.pausePlay && m.pausePlay.update("play"), a.syncExists && m.sync("pause");
    }, a.play = function () {
      a.playing && clearInterval(a.animatedSlides), a.animatedSlides = a.animatedSlides || setInterval(a.animateSlides, a.vars.slideshowSpeed), a.started = a.playing = !0, a.vars.pausePlay && m.pausePlay.update("pause"), a.syncExists && m.sync("play");
    }, a.stop = function () {
      a.pause(), a.stopped = !0;
    }, a.canAdvance = function (e, t) {
      var n = p ? a.pagingCount - 1 : a.last;return t ? !0 : p && a.currentItem === a.count - 1 && 0 === e && "prev" === a.direction ? !0 : p && 0 === a.currentItem && e === a.pagingCount - 1 && "next" !== a.direction ? !1 : e !== a.currentSlide || p ? a.vars.animationLoop ? !0 : a.atEnd && 0 === a.currentSlide && e === n && "next" !== a.direction ? !1 : a.atEnd && a.currentSlide === n && 0 === e && "next" === a.direction ? !1 : !0 : !1;
    }, a.getTarget = function (e) {
      return a.direction = e, "next" === e ? a.currentSlide === a.last ? 0 : a.currentSlide + 1 : 0 === a.currentSlide ? a.last : a.currentSlide - 1;
    }, a.setProps = function (e, t, n) {
      var i = function () {
        var n = e ? e : (a.itemW + a.vars.itemMargin) * a.move * a.animatingTo,
            i = function () {
          if (u) return "setTouch" === t ? e : d && a.animatingTo === a.last ? 0 : d ? a.limit - (a.itemW + a.vars.itemMargin) * a.move * a.animatingTo : a.animatingTo === a.last ? a.limit : n;switch (t) {case "setTotal":
              return d ? (a.count - 1 - a.currentSlide + a.cloneOffset) * e : (a.currentSlide + a.cloneOffset) * e;case "setTouch":
              return d ? e : e;case "jumpEnd":
              return d ? e : a.count * e;case "jumpStart":
              return d ? a.count * e : e;default:
              return e;}
        }();return -1 * i + "px";
      }();a.transitions && (i = c ? "translate3d(0," + i + ",0)" : "translate3d(" + i + ",0,0)", n = void 0 !== n ? n / 1e3 + "s" : "0s", a.container.css("-" + a.pfx + "-transition-duration", n), a.container.css("transition-duration", n)), a.args[a.prop] = i, (a.transitions || void 0 === n) && a.container.css(a.args), a.container.css("transform", i);
    }, a.setup = function (e) {
      if (v) a.slides.css({ width: "100%", "float": "left", marginRight: "-100%", position: "relative" }), "init" === e && (s ? a.slides.css({ opacity: 0, display: "block", webkitTransition: "opacity " + a.vars.animationSpeed / 1e3 + "s ease", zIndex: 1 }).eq(a.currentSlide).css({ opacity: 1, zIndex: 2 }) : 0 == a.vars.fadeFirstSlide ? a.slides.css({ opacity: 0, display: "block", zIndex: 1 }).eq(a.currentSlide).css({ zIndex: 2 }).css({ opacity: 1 }) : a.slides.css({ opacity: 0, display: "block", zIndex: 1 }).eq(a.currentSlide).css({ zIndex: 2 }).animate({ opacity: 1 }, a.vars.animationSpeed, a.vars.easing)), a.vars.smoothHeight && m.smoothHeight();else {
        var t, i;"init" === e && (a.viewport = $('<div class="' + n + 'viewport"></div>').css({ overflow: "hidden", position: "relative" }).appendTo(a).append(a.container), a.cloneCount = 0, a.cloneOffset = 0, d && (i = $.makeArray(a.slides).reverse(), a.slides = $(i), a.container.empty().append(a.slides))), a.vars.animationLoop && !u && (a.cloneCount = 2, a.cloneOffset = 1, "init" !== e && a.container.find(".clone").remove(), a.container.append(m.uniqueID(a.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(m.uniqueID(a.slides.last().clone().addClass("clone")).attr("aria-hidden", "true"))), a.newSlides = $(a.vars.selector, a), t = d ? a.count - 1 - a.currentSlide + a.cloneOffset : a.currentSlide + a.cloneOffset, c && !u ? (a.container.height(200 * (a.count + a.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function () {
          a.newSlides.css({ display: "block" }), a.doMath(), a.viewport.height(a.h), a.setProps(t * a.h, "init");
        }, "init" === e ? 100 : 0)) : (a.container.width(200 * (a.count + a.cloneCount) + "%"), a.setProps(t * a.computedW, "init"), setTimeout(function () {
          a.doMath(), a.newSlides.css({ width: a.computedW, "float": "left", display: "block" }), a.vars.smoothHeight && m.smoothHeight();
        }, "init" === e ? 100 : 0));
      }u || a.slides.removeClass(n + "active-slide").eq(a.currentSlide).addClass(n + "active-slide"), a.vars.init(a);
    }, a.doMath = function () {
      var e = a.slides.first(),
          t = a.vars.itemMargin,
          n = a.vars.minItems,
          i = a.vars.maxItems;a.w = void 0 === a.viewport ? a.width() : a.viewport.width(), a.h = e.height(), a.boxPadding = e.outerWidth() - e.width(), u ? (a.itemT = a.vars.itemWidth + t, a.minW = n ? n * a.itemT : a.w, a.maxW = i ? i * a.itemT - t : a.w, a.itemW = a.minW > a.w ? (a.w - t * (n - 1)) / n : a.maxW < a.w ? (a.w - t * (i - 1)) / i : a.vars.itemWidth > a.w ? a.w : a.vars.itemWidth, a.visible = Math.floor(a.w / a.itemW), a.move = a.vars.move > 0 && a.vars.move < a.visible ? a.vars.move : a.visible, a.pagingCount = Math.ceil((a.count - a.visible) / a.move + 1), a.last = a.pagingCount - 1, a.limit = 1 === a.pagingCount ? 0 : a.vars.itemWidth > a.w ? a.itemW * (a.count - 1) + t * (a.count - 1) : (a.itemW + t) * a.count - a.w - t) : (a.itemW = a.w, a.pagingCount = a.count, a.last = a.count - 1), a.computedW = a.itemW - a.boxPadding;
    }, a.update = function (e, t) {
      a.doMath(), u || (e < a.currentSlide ? a.currentSlide += 1 : e <= a.currentSlide && 0 !== e && (a.currentSlide -= 1), a.animatingTo = a.currentSlide), a.vars.controlNav && !a.manualControls && ("add" === t && !u || a.pagingCount > a.controlNav.length ? m.controlNav.update("add") : ("remove" === t && !u || a.pagingCount < a.controlNav.length) && (u && a.currentSlide > a.last && (a.currentSlide -= 1, a.animatingTo -= 1), m.controlNav.update("remove", a.last))), a.vars.directionNav && m.directionNav.update();
    }, a.addSlide = function (e, t) {
      var n = $(e);a.count += 1, a.last = a.count - 1, c && d ? void 0 !== t ? a.slides.eq(a.count - t).after(n) : a.container.prepend(n) : void 0 !== t ? a.slides.eq(t).before(n) : a.container.append(n), a.update(t, "add"), a.slides = $(a.vars.selector + ":not(.clone)", a), a.setup(), a.vars.added(a);
    }, a.removeSlide = function (e) {
      var t = isNaN(e) ? a.slides.index($(e)) : e;a.count -= 1, a.last = a.count - 1, isNaN(e) ? $(e, a.slides).remove() : c && d ? a.slides.eq(a.last).remove() : a.slides.eq(e).remove(), a.doMath(), a.update(t, "remove"), a.slides = $(a.vars.selector + ":not(.clone)", a), a.setup(), a.vars.removed(a);
    }, m.init();
  }, $(window).blur(function (e) {
    focused = !1;
  }).focus(function (e) {
    focused = !0;
  }), $.flexslider.defaults = { namespace: "flex-", selector: ".slides > li", animation: "fade", easing: "swing", direction: "horizontal", reverse: !1, animationLoop: !0, smoothHeight: !1, startAt: 0, slideshow: !0, slideshowSpeed: 7e3, animationSpeed: 600, initDelay: 0, randomize: !1, fadeFirstSlide: !0, thumbCaptions: !1, pauseOnAction: !0, pauseOnHover: !1, pauseInvisible: !0, useCSS: !0, touch: !0, video: !1, controlNav: !0, directionNav: !0, prevText: "Previous", nextText: "Next", keyboard: !0, multipleKeyboard: !1, mousewheel: !1, pausePlay: !1, pauseText: "Pause", playText: "Play", controlsContainer: "", manualControls: "", customDirectionNav: "", sync: "", asNavFor: "", itemWidth: 0, itemMargin: 0, minItems: 1, maxItems: 0, move: 0, allowOneSlide: !0, start: function start() {}, before: function before() {}, after: function after() {}, end: function end() {}, added: function added() {}, removed: function removed() {}, init: function init() {} }, $.fn.flexslider = function (e) {
    if (void 0 === e && (e = {}), "object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) return this.each(function () {
      var t = $(this),
          a = e.selector ? e.selector : ".slides > li",
          n = t.find(a);1 === n.length && e.allowOneSlide === !0 || 0 === n.length ? (n.fadeIn(400), e.start && e.start(t)) : void 0 === t.data("flexslider") && new $.flexslider(this, e);
    });var t = $(this).data("flexslider");switch (e) {case "play":
        t.play();break;case "pause":
        t.pause();break;case "stop":
        t.stop();break;case "next":
        t.flexAnimate(t.getTarget("next"), !0);break;case "prev":case "previous":
        t.flexAnimate(t.getTarget("prev"), !0);break;default:
        "number" == typeof e && t.flexAnimate(e, !0);}
  };
}(jQuery);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../node_modules/timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjJkMzM0MDEzN2EzZDM0MWM0YzUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2pxdWVyeS5mbGV4c2xpZGVyLW1pbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zZXRpbW1lZGlhdGUvc2V0SW1tZWRpYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aW1lcnMtYnJvd3NlcmlmeS9tYWluLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiXSwibmFtZXMiOlsiJCIsImZsZXhzbGlkZXIiLCJlIiwidCIsImEiLCJ2YXJzIiwiZXh0ZW5kIiwiZGVmYXVsdHMiLCJuIiwibmFtZXNwYWNlIiwiaSIsIndpbmRvdyIsIm5hdmlnYXRvciIsIm1zUG9pbnRlckVuYWJsZWQiLCJNU0dlc3R1cmUiLCJzIiwiRG9jdW1lbnRUb3VjaCIsImRvY3VtZW50IiwidG91Y2giLCJyIiwibyIsImwiLCJjIiwiZGlyZWN0aW9uIiwiZCIsInJldmVyc2UiLCJ1IiwiaXRlbVdpZHRoIiwidiIsImFuaW1hdGlvbiIsInAiLCJhc05hdkZvciIsIm0iLCJmIiwiZGF0YSIsImluaXQiLCJhbmltYXRpbmciLCJjdXJyZW50U2xpZGUiLCJwYXJzZUludCIsInN0YXJ0QXQiLCJpc05hTiIsImFuaW1hdGluZ1RvIiwiYXRFbmQiLCJsYXN0IiwiY29udGFpbmVyU2VsZWN0b3IiLCJzZWxlY3RvciIsInN1YnN0ciIsInNlYXJjaCIsInNsaWRlcyIsImNvbnRhaW5lciIsImNvdW50IiwibGVuZ3RoIiwic3luY0V4aXN0cyIsInN5bmMiLCJwcm9wIiwiYXJncyIsIm1hbnVhbFBhdXNlIiwic3RvcHBlZCIsInN0YXJ0ZWQiLCJzdGFydFRpbWVvdXQiLCJ0cmFuc2l0aW9ucyIsInZpZGVvIiwidXNlQ1NTIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwicGZ4IiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwiZW5zdXJlQW5pbWF0aW9uRW5kIiwiY29udHJvbHNDb250YWluZXIiLCJtYW51YWxDb250cm9scyIsImN1c3RvbURpcmVjdGlvbk5hdiIsInJhbmRvbWl6ZSIsInNvcnQiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJlbXB0eSIsImFwcGVuZCIsImRvTWF0aCIsInNldHVwIiwiY29udHJvbE5hdiIsImRpcmVjdGlvbk5hdiIsImtleWJvYXJkIiwibXVsdGlwbGVLZXlib2FyZCIsImJpbmQiLCJrZXlDb2RlIiwiZ2V0VGFyZ2V0IiwiZmxleEFuaW1hdGUiLCJwYXVzZU9uQWN0aW9uIiwibW91c2V3aGVlbCIsInByZXZlbnREZWZhdWx0IiwicGF1c2VQbGF5Iiwic2xpZGVzaG93IiwicGF1c2VJbnZpc2libGUiLCJwYXVzZU9uSG92ZXIiLCJob3ZlciIsIm1hbnVhbFBsYXkiLCJwYXVzZSIsInBsYXkiLCJpc0hpZGRlbiIsImluaXREZWxheSIsInNldFRpbWVvdXQiLCJhc05hdiIsInNtb290aEhlaWdodCIsInJlc2l6ZSIsImZpbmQiLCJhdHRyIiwic3RhcnQiLCJmbG9vciIsIm1vdmUiLCJjdXJyZW50SXRlbSIsInJlbW92ZUNsYXNzIiwiZXEiLCJhZGRDbGFzcyIsIl9zbGlkZXIiLCJlYWNoIiwiX2dlc3R1cmUiLCJ0YXJnZXQiLCJhZGRFdmVudExpc3RlbmVyIiwiY3VycmVudFRhcmdldCIsImFkZFBvaW50ZXIiLCJwb2ludGVySWQiLCJpbmRleCIsImhhc0NsYXNzIiwib24iLCJvZmZzZXQiLCJsZWZ0Iiwic2Nyb2xsTGVmdCIsInNldHVwTWFudWFsIiwic2V0dXBQYWdpbmciLCJjb250cm9sTmF2U2NhZmZvbGQiLCJwYWdpbmdDb3VudCIsInRodW1iQ2FwdGlvbnMiLCJzZXQiLCJhY3RpdmUiLCJkZWxlZ2F0ZSIsInR5cGUiLCJzZXRUb0NsZWFyV2F0Y2hlZEV2ZW50IiwidXBkYXRlIiwicmVtb3ZlIiwiY2xvc2VzdCIsInByZXZUZXh0IiwibmV4dFRleHQiLCJhbmltYXRpb25Mb29wIiwicmVtb3ZlQXR0ciIsImZpbHRlciIsImh0bWwiLCJwbGF5VGV4dCIsInBhdXNlVGV4dCIsInN0b3BQcm9wYWdhdGlvbiIsInciLCJoIiwiTnVtYmVyIiwiRGF0ZSIsImxpbWl0IiwiaXRlbVciLCJpdGVtTWFyZ2luIiwiY2xvbmVPZmZzZXQiLCJ0cmFuc2xhdGlvblgiLCJ0cmFuc2xhdGlvblkiLCJ5IiwiYWJzIiwiZGV0YWlsIiwiTVNHRVNUVVJFX0ZMQUdfSU5FUlRJQSIsInNldEltbWVkaWF0ZSIsInN0b3AiLCJzZXRQcm9wcyIsImNhbkFkdmFuY2UiLCJnIiwiUyIsIngiLCJiIiwibXNUb3VjaEFjdGlvbiIsInRvdWNoZXMiLCJwYWdlWCIsInBhZ2VZIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImlzIiwid2lkdGgiLCJjb21wdXRlZFciLCJ2aWV3cG9ydCIsImhlaWdodCIsIm5ld1NsaWRlcyIsImFuaW1hdGUiLCJwbGF5aW5nIiwidW5pcXVlSUQiLCJhZGQiLCJ2aXNQcm9wIiwiZ2V0SGlkZGVuUHJvcCIsImNsZWFyVGltZW91dCIsImNlaWwiLCJ2aXNpYmxlIiwiYmVmb3JlIiwiZW5kIiwiY3NzIiwib3BhY2l0eSIsInpJbmRleCIsIndyYXB1cCIsImFuaW1hdGlvblNwZWVkIiwiZWFzaW5nIiwidW5iaW5kIiwiYWZ0ZXIiLCJhbmltYXRlU2xpZGVzIiwiY2xlYXJJbnRlcnZhbCIsImFuaW1hdGVkU2xpZGVzIiwic2V0SW50ZXJ2YWwiLCJzbGlkZXNob3dTcGVlZCIsIm1hcmdpblJpZ2h0IiwicG9zaXRpb24iLCJkaXNwbGF5Iiwid2Via2l0VHJhbnNpdGlvbiIsImZhZGVGaXJzdFNsaWRlIiwib3ZlcmZsb3ciLCJhcHBlbmRUbyIsImNsb25lQ291bnQiLCJtYWtlQXJyYXkiLCJmaXJzdCIsImNsb25lIiwicHJlcGVuZCIsIm1pbkl0ZW1zIiwibWF4SXRlbXMiLCJib3hQYWRkaW5nIiwib3V0ZXJXaWR0aCIsIml0ZW1UIiwibWluVyIsIm1heFciLCJhZGRTbGlkZSIsImFkZGVkIiwicmVtb3ZlU2xpZGUiLCJyZW1vdmVkIiwiYmx1ciIsImZvY3VzZWQiLCJmb2N1cyIsImFsbG93T25lU2xpZGUiLCJmbiIsImZhZGVJbiIsImpRdWVyeSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM3REE7Ozs7R0FJRyxDQUFDLFVBQVNBLENBQVQsRUFBVztBQUFDQSxJQUFFQyxVQUFGLEdBQWEsVUFBU0MsQ0FBVCxFQUFXQyxDQUFYLEVBQWE7QUFBQyxRQUFJQyxJQUFFSixFQUFFRSxDQUFGLENBQU4sQ0FBV0UsRUFBRUMsSUFBRixHQUFPTCxFQUFFTSxNQUFGLENBQVMsRUFBVCxFQUFZTixFQUFFQyxVQUFGLENBQWFNLFFBQXpCLEVBQWtDSixDQUFsQyxDQUFQLENBQTRDLElBQUlLLElBQUVKLEVBQUVDLElBQUYsQ0FBT0ksU0FBYjtBQUFBLFFBQXVCQyxJQUFFQyxPQUFPQyxTQUFQLElBQWtCRCxPQUFPQyxTQUFQLENBQWlCQyxnQkFBbkMsSUFBcURGLE9BQU9HLFNBQXJGO0FBQUEsUUFBK0ZDLElBQUUsQ0FBQyxrQkFBaUJKLE1BQWpCLElBQXlCRCxDQUF6QixJQUE0QkMsT0FBT0ssYUFBUCxJQUFzQkMsb0JBQW9CRCxhQUF2RSxLQUF1RlosRUFBRUMs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Ozs7Ozs7Ozs7OztBQ0pIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7Ozs7Ozs7Ozs7Ozs7QUN2THRDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixpQkFBaUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBDQUEwQyxzQkFBc0IsRUFBRTtBQUNsRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUN6TEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLG1CQUFPLENBQUMsaUVBQWM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzlEQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1QyIsImZpbGUiOiJqcy9mbGV4c2xpZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2J1aWxkL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hc3NldHMvanMvanF1ZXJ5LmZsZXhzbGlkZXItbWluLmpzXCIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDYyZDMzNDAxMzdhM2QzNDFjNGM1IiwiLypcbiAqIGpRdWVyeSBGbGV4U2xpZGVyIHYyLjUuMFxuICogQ29weXJpZ2h0IDIwMTIgV29vVGhlbWVzXG4gKiBDb250cmlidXRpbmcgQXV0aG9yOiBUeWxlciBTbWl0aFxuICovIWZ1bmN0aW9uKCQpeyQuZmxleHNsaWRlcj1mdW5jdGlvbihlLHQpe3ZhciBhPSQoZSk7YS52YXJzPSQuZXh0ZW5kKHt9LCQuZmxleHNsaWRlci5kZWZhdWx0cyx0KTt2YXIgbj1hLnZhcnMubmFtZXNwYWNlLGk9d2luZG93Lm5hdmlnYXRvciYmd2luZG93Lm5hdmlnYXRvci5tc1BvaW50ZXJFbmFibGVkJiZ3aW5kb3cuTVNHZXN0dXJlLHM9KFwib250b3VjaHN0YXJ0XCJpbiB3aW5kb3d8fGl8fHdpbmRvdy5Eb2N1bWVudFRvdWNoJiZkb2N1bWVudCBpbnN0YW5jZW9mIERvY3VtZW50VG91Y2gpJiZhLnZhcnMudG91Y2gscj1cImNsaWNrIHRvdWNoZW5kIE1TUG9pbnRlclVwIGtleXVwXCIsbz1cIlwiLGwsYz1cInZlcnRpY2FsXCI9PT1hLnZhcnMuZGlyZWN0aW9uLGQ9YS52YXJzLnJldmVyc2UsdT1hLnZhcnMuaXRlbVdpZHRoPjAsdj1cImZhZGVcIj09PWEudmFycy5hbmltYXRpb24scD1cIlwiIT09YS52YXJzLmFzTmF2Rm9yLG09e30sZj0hMDskLmRhdGEoZSxcImZsZXhzbGlkZXJcIixhKSxtPXtpbml0OmZ1bmN0aW9uKCl7YS5hbmltYXRpbmc9ITEsYS5jdXJyZW50U2xpZGU9cGFyc2VJbnQoYS52YXJzLnN0YXJ0QXQ/YS52YXJzLnN0YXJ0QXQ6MCwxMCksaXNOYU4oYS5jdXJyZW50U2xpZGUpJiYoYS5jdXJyZW50U2xpZGU9MCksYS5hbmltYXRpbmdUbz1hLmN1cnJlbnRTbGlkZSxhLmF0RW5kPTA9PT1hLmN1cnJlbnRTbGlkZXx8YS5jdXJyZW50U2xpZGU9PT1hLmxhc3QsYS5jb250YWluZXJTZWxlY3Rvcj1hLnZhcnMuc2VsZWN0b3Iuc3Vic3RyKDAsYS52YXJzLnNlbGVjdG9yLnNlYXJjaChcIiBcIikpLGEuc2xpZGVzPSQoYS52YXJzLnNlbGVjdG9yLGEpLGEuY29udGFpbmVyPSQoYS5jb250YWluZXJTZWxlY3RvcixhKSxhLmNvdW50PWEuc2xpZGVzLmxlbmd0aCxhLnN5bmNFeGlzdHM9JChhLnZhcnMuc3luYykubGVuZ3RoPjAsXCJzbGlkZVwiPT09YS52YXJzLmFuaW1hdGlvbiYmKGEudmFycy5hbmltYXRpb249XCJzd2luZ1wiKSxhLnByb3A9Yz9cInRvcFwiOlwibWFyZ2luTGVmdFwiLGEuYXJncz17fSxhLm1hbnVhbFBhdXNlPSExLGEuc3RvcHBlZD0hMSxhLnN0YXJ0ZWQ9ITEsYS5zdGFydFRpbWVvdXQ9bnVsbCxhLnRyYW5zaXRpb25zPSFhLnZhcnMudmlkZW8mJiF2JiZhLnZhcnMudXNlQ1NTJiZmdW5jdGlvbigpe3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksdD1bXCJwZXJzcGVjdGl2ZVByb3BlcnR5XCIsXCJXZWJraXRQZXJzcGVjdGl2ZVwiLFwiTW96UGVyc3BlY3RpdmVcIixcIk9QZXJzcGVjdGl2ZVwiLFwibXNQZXJzcGVjdGl2ZVwiXTtmb3IodmFyIG4gaW4gdClpZih2b2lkIDAhPT1lLnN0eWxlW3Rbbl1dKXJldHVybiBhLnBmeD10W25dLnJlcGxhY2UoXCJQZXJzcGVjdGl2ZVwiLFwiXCIpLnRvTG93ZXJDYXNlKCksYS5wcm9wPVwiLVwiK2EucGZ4K1wiLXRyYW5zZm9ybVwiLCEwO3JldHVybiExfSgpLGEuZW5zdXJlQW5pbWF0aW9uRW5kPVwiXCIsXCJcIiE9PWEudmFycy5jb250cm9sc0NvbnRhaW5lciYmKGEuY29udHJvbHNDb250YWluZXI9JChhLnZhcnMuY29udHJvbHNDb250YWluZXIpLmxlbmd0aD4wJiYkKGEudmFycy5jb250cm9sc0NvbnRhaW5lcikpLFwiXCIhPT1hLnZhcnMubWFudWFsQ29udHJvbHMmJihhLm1hbnVhbENvbnRyb2xzPSQoYS52YXJzLm1hbnVhbENvbnRyb2xzKS5sZW5ndGg+MCYmJChhLnZhcnMubWFudWFsQ29udHJvbHMpKSxcIlwiIT09YS52YXJzLmN1c3RvbURpcmVjdGlvbk5hdiYmKGEuY3VzdG9tRGlyZWN0aW9uTmF2PTI9PT0kKGEudmFycy5jdXN0b21EaXJlY3Rpb25OYXYpLmxlbmd0aCYmJChhLnZhcnMuY3VzdG9tRGlyZWN0aW9uTmF2KSksYS52YXJzLnJhbmRvbWl6ZSYmKGEuc2xpZGVzLnNvcnQoZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKS0uNX0pLGEuY29udGFpbmVyLmVtcHR5KCkuYXBwZW5kKGEuc2xpZGVzKSksYS5kb01hdGgoKSxhLnNldHVwKFwiaW5pdFwiKSxhLnZhcnMuY29udHJvbE5hdiYmbS5jb250cm9sTmF2LnNldHVwKCksYS52YXJzLmRpcmVjdGlvbk5hdiYmbS5kaXJlY3Rpb25OYXYuc2V0dXAoKSxhLnZhcnMua2V5Ym9hcmQmJigxPT09JChhLmNvbnRhaW5lclNlbGVjdG9yKS5sZW5ndGh8fGEudmFycy5tdWx0aXBsZUtleWJvYXJkKSYmJChkb2N1bWVudCkuYmluZChcImtleXVwXCIsZnVuY3Rpb24oZSl7dmFyIHQ9ZS5rZXlDb2RlO2lmKCFhLmFuaW1hdGluZyYmKDM5PT09dHx8Mzc9PT10KSl7dmFyIG49Mzk9PT10P2EuZ2V0VGFyZ2V0KFwibmV4dFwiKTozNz09PXQ/YS5nZXRUYXJnZXQoXCJwcmV2XCIpOiExO2EuZmxleEFuaW1hdGUobixhLnZhcnMucGF1c2VPbkFjdGlvbil9fSksYS52YXJzLm1vdXNld2hlZWwmJmEuYmluZChcIm1vdXNld2hlZWxcIixmdW5jdGlvbihlLHQsbixpKXtlLnByZXZlbnREZWZhdWx0KCk7dmFyIHM9YS5nZXRUYXJnZXQoMD50P1wibmV4dFwiOlwicHJldlwiKTthLmZsZXhBbmltYXRlKHMsYS52YXJzLnBhdXNlT25BY3Rpb24pfSksYS52YXJzLnBhdXNlUGxheSYmbS5wYXVzZVBsYXkuc2V0dXAoKSxhLnZhcnMuc2xpZGVzaG93JiZhLnZhcnMucGF1c2VJbnZpc2libGUmJm0ucGF1c2VJbnZpc2libGUuaW5pdCgpLGEudmFycy5zbGlkZXNob3cmJihhLnZhcnMucGF1c2VPbkhvdmVyJiZhLmhvdmVyKGZ1bmN0aW9uKCl7YS5tYW51YWxQbGF5fHxhLm1hbnVhbFBhdXNlfHxhLnBhdXNlKCl9LGZ1bmN0aW9uKCl7YS5tYW51YWxQYXVzZXx8YS5tYW51YWxQbGF5fHxhLnN0b3BwZWR8fGEucGxheSgpfSksYS52YXJzLnBhdXNlSW52aXNpYmxlJiZtLnBhdXNlSW52aXNpYmxlLmlzSGlkZGVuKCl8fChhLnZhcnMuaW5pdERlbGF5PjA/YS5zdGFydFRpbWVvdXQ9c2V0VGltZW91dChhLnBsYXksYS52YXJzLmluaXREZWxheSk6YS5wbGF5KCkpKSxwJiZtLmFzTmF2LnNldHVwKCkscyYmYS52YXJzLnRvdWNoJiZtLnRvdWNoKCksKCF2fHx2JiZhLnZhcnMuc21vb3RoSGVpZ2h0KSYmJCh3aW5kb3cpLmJpbmQoXCJyZXNpemUgb3JpZW50YXRpb25jaGFuZ2UgZm9jdXNcIixtLnJlc2l6ZSksYS5maW5kKFwiaW1nXCIpLmF0dHIoXCJkcmFnZ2FibGVcIixcImZhbHNlXCIpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXthLnZhcnMuc3RhcnQoYSl9LDIwMCl9LGFzTmF2OntzZXR1cDpmdW5jdGlvbigpe2EuYXNOYXY9ITAsYS5hbmltYXRpbmdUbz1NYXRoLmZsb29yKGEuY3VycmVudFNsaWRlL2EubW92ZSksYS5jdXJyZW50SXRlbT1hLmN1cnJlbnRTbGlkZSxhLnNsaWRlcy5yZW1vdmVDbGFzcyhuK1wiYWN0aXZlLXNsaWRlXCIpLmVxKGEuY3VycmVudEl0ZW0pLmFkZENsYXNzKG4rXCJhY3RpdmUtc2xpZGVcIiksaT8oZS5fc2xpZGVyPWEsYS5zbGlkZXMuZWFjaChmdW5jdGlvbigpe3ZhciBlPXRoaXM7ZS5fZ2VzdHVyZT1uZXcgTVNHZXN0dXJlLGUuX2dlc3R1cmUudGFyZ2V0PWUsZS5hZGRFdmVudExpc3RlbmVyKFwiTVNQb2ludGVyRG93blwiLGZ1bmN0aW9uKGUpe2UucHJldmVudERlZmF1bHQoKSxlLmN1cnJlbnRUYXJnZXQuX2dlc3R1cmUmJmUuY3VycmVudFRhcmdldC5fZ2VzdHVyZS5hZGRQb2ludGVyKGUucG9pbnRlcklkKX0sITEpLGUuYWRkRXZlbnRMaXN0ZW5lcihcIk1TR2VzdHVyZVRhcFwiLGZ1bmN0aW9uKGUpe2UucHJldmVudERlZmF1bHQoKTt2YXIgdD0kKHRoaXMpLG49dC5pbmRleCgpOyQoYS52YXJzLmFzTmF2Rm9yKS5kYXRhKFwiZmxleHNsaWRlclwiKS5hbmltYXRpbmd8fHQuaGFzQ2xhc3MoXCJhY3RpdmVcIil8fChhLmRpcmVjdGlvbj1hLmN1cnJlbnRJdGVtPG4/XCJuZXh0XCI6XCJwcmV2XCIsYS5mbGV4QW5pbWF0ZShuLGEudmFycy5wYXVzZU9uQWN0aW9uLCExLCEwLCEwKSl9KX0pKTphLnNsaWRlcy5vbihyLGZ1bmN0aW9uKGUpe2UucHJldmVudERlZmF1bHQoKTt2YXIgdD0kKHRoaXMpLGk9dC5pbmRleCgpLHM9dC5vZmZzZXQoKS5sZWZ0LSQoYSkuc2Nyb2xsTGVmdCgpOzA+PXMmJnQuaGFzQ2xhc3MobitcImFjdGl2ZS1zbGlkZVwiKT9hLmZsZXhBbmltYXRlKGEuZ2V0VGFyZ2V0KFwicHJldlwiKSwhMCk6JChhLnZhcnMuYXNOYXZGb3IpLmRhdGEoXCJmbGV4c2xpZGVyXCIpLmFuaW1hdGluZ3x8dC5oYXNDbGFzcyhuK1wiYWN0aXZlLXNsaWRlXCIpfHwoYS5kaXJlY3Rpb249YS5jdXJyZW50SXRlbTxpP1wibmV4dFwiOlwicHJldlwiLGEuZmxleEFuaW1hdGUoaSxhLnZhcnMucGF1c2VPbkFjdGlvbiwhMSwhMCwhMCkpfSl9fSxjb250cm9sTmF2OntzZXR1cDpmdW5jdGlvbigpe2EubWFudWFsQ29udHJvbHM/bS5jb250cm9sTmF2LnNldHVwTWFudWFsKCk6bS5jb250cm9sTmF2LnNldHVwUGFnaW5nKCl9LHNldHVwUGFnaW5nOmZ1bmN0aW9uKCl7dmFyIGU9XCJ0aHVtYm5haWxzXCI9PT1hLnZhcnMuY29udHJvbE5hdj9cImNvbnRyb2wtdGh1bWJzXCI6XCJjb250cm9sLXBhZ2luZ1wiLHQ9MSxpLHM7aWYoYS5jb250cm9sTmF2U2NhZmZvbGQ9JCgnPG9sIGNsYXNzPVwiJytuK1wiY29udHJvbC1uYXYgXCIrbitlKydcIj48L29sPicpLGEucGFnaW5nQ291bnQ+MSlmb3IodmFyIGw9MDtsPGEucGFnaW5nQ291bnQ7bCsrKXtpZihzPWEuc2xpZGVzLmVxKGwpLGk9XCJ0aHVtYm5haWxzXCI9PT1hLnZhcnMuY29udHJvbE5hdj8nPGltZyBzcmM9XCInK3MuYXR0cihcImRhdGEtdGh1bWJcIikrJ1wiLz4nOlwiPGE+XCIrdCtcIjwvYT5cIixcInRodW1ibmFpbHNcIj09PWEudmFycy5jb250cm9sTmF2JiYhMD09PWEudmFycy50aHVtYkNhcHRpb25zKXt2YXIgYz1zLmF0dHIoXCJkYXRhLXRodW1iY2FwdGlvblwiKTtcIlwiIT09YyYmdm9pZCAwIT09YyYmKGkrPSc8c3BhbiBjbGFzcz1cIicrbisnY2FwdGlvblwiPicrYytcIjwvc3Bhbj5cIil9YS5jb250cm9sTmF2U2NhZmZvbGQuYXBwZW5kKFwiPGxpPlwiK2krXCI8L2xpPlwiKSx0Kyt9YS5jb250cm9sc0NvbnRhaW5lcj8kKGEuY29udHJvbHNDb250YWluZXIpLmFwcGVuZChhLmNvbnRyb2xOYXZTY2FmZm9sZCk6YS5hcHBlbmQoYS5jb250cm9sTmF2U2NhZmZvbGQpLG0uY29udHJvbE5hdi5zZXQoKSxtLmNvbnRyb2xOYXYuYWN0aXZlKCksYS5jb250cm9sTmF2U2NhZmZvbGQuZGVsZWdhdGUoXCJhLCBpbWdcIixyLGZ1bmN0aW9uKGUpe2lmKGUucHJldmVudERlZmF1bHQoKSxcIlwiPT09b3x8bz09PWUudHlwZSl7dmFyIHQ9JCh0aGlzKSxpPWEuY29udHJvbE5hdi5pbmRleCh0KTt0Lmhhc0NsYXNzKG4rXCJhY3RpdmVcIil8fChhLmRpcmVjdGlvbj1pPmEuY3VycmVudFNsaWRlP1wibmV4dFwiOlwicHJldlwiLGEuZmxleEFuaW1hdGUoaSxhLnZhcnMucGF1c2VPbkFjdGlvbikpfVwiXCI9PT1vJiYobz1lLnR5cGUpLG0uc2V0VG9DbGVhcldhdGNoZWRFdmVudCgpfSl9LHNldHVwTWFudWFsOmZ1bmN0aW9uKCl7YS5jb250cm9sTmF2PWEubWFudWFsQ29udHJvbHMsbS5jb250cm9sTmF2LmFjdGl2ZSgpLGEuY29udHJvbE5hdi5iaW5kKHIsZnVuY3Rpb24oZSl7aWYoZS5wcmV2ZW50RGVmYXVsdCgpLFwiXCI9PT1vfHxvPT09ZS50eXBlKXt2YXIgdD0kKHRoaXMpLGk9YS5jb250cm9sTmF2LmluZGV4KHQpO3QuaGFzQ2xhc3MobitcImFjdGl2ZVwiKXx8KGEuZGlyZWN0aW9uPWk+YS5jdXJyZW50U2xpZGU/XCJuZXh0XCI6XCJwcmV2XCIsYS5mbGV4QW5pbWF0ZShpLGEudmFycy5wYXVzZU9uQWN0aW9uKSl9XCJcIj09PW8mJihvPWUudHlwZSksbS5zZXRUb0NsZWFyV2F0Y2hlZEV2ZW50KCl9KX0sc2V0OmZ1bmN0aW9uKCl7dmFyIGU9XCJ0aHVtYm5haWxzXCI9PT1hLnZhcnMuY29udHJvbE5hdj9cImltZ1wiOlwiYVwiO2EuY29udHJvbE5hdj0kKFwiLlwiK24rXCJjb250cm9sLW5hdiBsaSBcIitlLGEuY29udHJvbHNDb250YWluZXI/YS5jb250cm9sc0NvbnRhaW5lcjphKX0sYWN0aXZlOmZ1bmN0aW9uKCl7YS5jb250cm9sTmF2LnJlbW92ZUNsYXNzKG4rXCJhY3RpdmVcIikuZXEoYS5hbmltYXRpbmdUbykuYWRkQ2xhc3MobitcImFjdGl2ZVwiKX0sdXBkYXRlOmZ1bmN0aW9uKGUsdCl7YS5wYWdpbmdDb3VudD4xJiZcImFkZFwiPT09ZT9hLmNvbnRyb2xOYXZTY2FmZm9sZC5hcHBlbmQoJChcIjxsaT48YT5cIithLmNvdW50K1wiPC9hPjwvbGk+XCIpKToxPT09YS5wYWdpbmdDb3VudD9hLmNvbnRyb2xOYXZTY2FmZm9sZC5maW5kKFwibGlcIikucmVtb3ZlKCk6YS5jb250cm9sTmF2LmVxKHQpLmNsb3Nlc3QoXCJsaVwiKS5yZW1vdmUoKSxtLmNvbnRyb2xOYXYuc2V0KCksYS5wYWdpbmdDb3VudD4xJiZhLnBhZ2luZ0NvdW50IT09YS5jb250cm9sTmF2Lmxlbmd0aD9hLnVwZGF0ZSh0LGUpOm0uY29udHJvbE5hdi5hY3RpdmUoKX19LGRpcmVjdGlvbk5hdjp7c2V0dXA6ZnVuY3Rpb24oKXt2YXIgZT0kKCc8dWwgY2xhc3M9XCInK24rJ2RpcmVjdGlvbi1uYXZcIj48bGkgY2xhc3M9XCInK24rJ25hdi1wcmV2XCI+PGEgY2xhc3M9XCInK24rJ3ByZXZcIiBocmVmPVwiI1wiPicrYS52YXJzLnByZXZUZXh0Kyc8L2E+PC9saT48bGkgY2xhc3M9XCInK24rJ25hdi1uZXh0XCI+PGEgY2xhc3M9XCInK24rJ25leHRcIiBocmVmPVwiI1wiPicrYS52YXJzLm5leHRUZXh0K1wiPC9hPjwvbGk+PC91bD5cIik7YS5jdXN0b21EaXJlY3Rpb25OYXY/YS5kaXJlY3Rpb25OYXY9YS5jdXN0b21EaXJlY3Rpb25OYXY6YS5jb250cm9sc0NvbnRhaW5lcj8oJChhLmNvbnRyb2xzQ29udGFpbmVyKS5hcHBlbmQoZSksYS5kaXJlY3Rpb25OYXY9JChcIi5cIituK1wiZGlyZWN0aW9uLW5hdiBsaSBhXCIsYS5jb250cm9sc0NvbnRhaW5lcikpOihhLmFwcGVuZChlKSxhLmRpcmVjdGlvbk5hdj0kKFwiLlwiK24rXCJkaXJlY3Rpb24tbmF2IGxpIGFcIixhKSksbS5kaXJlY3Rpb25OYXYudXBkYXRlKCksYS5kaXJlY3Rpb25OYXYuYmluZChyLGZ1bmN0aW9uKGUpe2UucHJldmVudERlZmF1bHQoKTt2YXIgdDsoXCJcIj09PW98fG89PT1lLnR5cGUpJiYodD1hLmdldFRhcmdldCgkKHRoaXMpLmhhc0NsYXNzKG4rXCJuZXh0XCIpP1wibmV4dFwiOlwicHJldlwiKSxhLmZsZXhBbmltYXRlKHQsYS52YXJzLnBhdXNlT25BY3Rpb24pKSxcIlwiPT09byYmKG89ZS50eXBlKSxtLnNldFRvQ2xlYXJXYXRjaGVkRXZlbnQoKX0pfSx1cGRhdGU6ZnVuY3Rpb24oKXt2YXIgZT1uK1wiZGlzYWJsZWRcIjsxPT09YS5wYWdpbmdDb3VudD9hLmRpcmVjdGlvbk5hdi5hZGRDbGFzcyhlKS5hdHRyKFwidGFiaW5kZXhcIixcIi0xXCIpOmEudmFycy5hbmltYXRpb25Mb29wP2EuZGlyZWN0aW9uTmF2LnJlbW92ZUNsYXNzKGUpLnJlbW92ZUF0dHIoXCJ0YWJpbmRleFwiKTowPT09YS5hbmltYXRpbmdUbz9hLmRpcmVjdGlvbk5hdi5yZW1vdmVDbGFzcyhlKS5maWx0ZXIoXCIuXCIrbitcInByZXZcIikuYWRkQ2xhc3MoZSkuYXR0cihcInRhYmluZGV4XCIsXCItMVwiKTphLmFuaW1hdGluZ1RvPT09YS5sYXN0P2EuZGlyZWN0aW9uTmF2LnJlbW92ZUNsYXNzKGUpLmZpbHRlcihcIi5cIituK1wibmV4dFwiKS5hZGRDbGFzcyhlKS5hdHRyKFwidGFiaW5kZXhcIixcIi0xXCIpOmEuZGlyZWN0aW9uTmF2LnJlbW92ZUNsYXNzKGUpLnJlbW92ZUF0dHIoXCJ0YWJpbmRleFwiKX19LHBhdXNlUGxheTp7c2V0dXA6ZnVuY3Rpb24oKXt2YXIgZT0kKCc8ZGl2IGNsYXNzPVwiJytuKydwYXVzZXBsYXlcIj48YT48L2E+PC9kaXY+Jyk7YS5jb250cm9sc0NvbnRhaW5lcj8oYS5jb250cm9sc0NvbnRhaW5lci5hcHBlbmQoZSksYS5wYXVzZVBsYXk9JChcIi5cIituK1wicGF1c2VwbGF5IGFcIixhLmNvbnRyb2xzQ29udGFpbmVyKSk6KGEuYXBwZW5kKGUpLGEucGF1c2VQbGF5PSQoXCIuXCIrbitcInBhdXNlcGxheSBhXCIsYSkpLG0ucGF1c2VQbGF5LnVwZGF0ZShhLnZhcnMuc2xpZGVzaG93P24rXCJwYXVzZVwiOm4rXCJwbGF5XCIpLGEucGF1c2VQbGF5LmJpbmQocixmdW5jdGlvbihlKXtlLnByZXZlbnREZWZhdWx0KCksKFwiXCI9PT1vfHxvPT09ZS50eXBlKSYmKCQodGhpcykuaGFzQ2xhc3MobitcInBhdXNlXCIpPyhhLm1hbnVhbFBhdXNlPSEwLGEubWFudWFsUGxheT0hMSxhLnBhdXNlKCkpOihhLm1hbnVhbFBhdXNlPSExLGEubWFudWFsUGxheT0hMCxhLnBsYXkoKSkpLFwiXCI9PT1vJiYobz1lLnR5cGUpLG0uc2V0VG9DbGVhcldhdGNoZWRFdmVudCgpfSl9LHVwZGF0ZTpmdW5jdGlvbihlKXtcInBsYXlcIj09PWU/YS5wYXVzZVBsYXkucmVtb3ZlQ2xhc3MobitcInBhdXNlXCIpLmFkZENsYXNzKG4rXCJwbGF5XCIpLmh0bWwoYS52YXJzLnBsYXlUZXh0KTphLnBhdXNlUGxheS5yZW1vdmVDbGFzcyhuK1wicGxheVwiKS5hZGRDbGFzcyhuK1wicGF1c2VcIikuaHRtbChhLnZhcnMucGF1c2VUZXh0KX19LHRvdWNoOmZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0KXt0LnN0b3BQcm9wYWdhdGlvbigpLGEuYW5pbWF0aW5nP3QucHJldmVudERlZmF1bHQoKTooYS5wYXVzZSgpLGUuX2dlc3R1cmUuYWRkUG9pbnRlcih0LnBvaW50ZXJJZCksdz0wLHA9Yz9hLmg6YS53LGY9TnVtYmVyKG5ldyBEYXRlKSxsPXUmJmQmJmEuYW5pbWF0aW5nVG89PT1hLmxhc3Q/MDp1JiZkP2EubGltaXQtKGEuaXRlbVcrYS52YXJzLml0ZW1NYXJnaW4pKmEubW92ZSphLmFuaW1hdGluZ1RvOnUmJmEuY3VycmVudFNsaWRlPT09YS5sYXN0P2EubGltaXQ6dT8oYS5pdGVtVythLnZhcnMuaXRlbU1hcmdpbikqYS5tb3ZlKmEuY3VycmVudFNsaWRlOmQ/KGEubGFzdC1hLmN1cnJlbnRTbGlkZSthLmNsb25lT2Zmc2V0KSpwOihhLmN1cnJlbnRTbGlkZSthLmNsb25lT2Zmc2V0KSpwKX1mdW5jdGlvbiBuKHQpe3Quc3RvcFByb3BhZ2F0aW9uKCk7dmFyIGE9dC50YXJnZXQuX3NsaWRlcjtpZihhKXt2YXIgbj0tdC50cmFuc2xhdGlvblgsaT0tdC50cmFuc2xhdGlvblk7cmV0dXJuIHcrPWM/aTpuLG09dyx5PWM/TWF0aC5hYnModyk8TWF0aC5hYnMoLW4pOk1hdGguYWJzKHcpPE1hdGguYWJzKC1pKSx0LmRldGFpbD09PXQuTVNHRVNUVVJFX0ZMQUdfSU5FUlRJQT92b2lkIHNldEltbWVkaWF0ZShmdW5jdGlvbigpe2UuX2dlc3R1cmUuc3RvcCgpfSk6dm9pZCgoIXl8fE51bWJlcihuZXcgRGF0ZSktZj41MDApJiYodC5wcmV2ZW50RGVmYXVsdCgpLCF2JiZhLnRyYW5zaXRpb25zJiYoYS52YXJzLmFuaW1hdGlvbkxvb3B8fChtPXcvKDA9PT1hLmN1cnJlbnRTbGlkZSYmMD53fHxhLmN1cnJlbnRTbGlkZT09PWEubGFzdCYmdz4wP01hdGguYWJzKHcpL3ArMjoxKSksYS5zZXRQcm9wcyhsK20sXCJzZXRUb3VjaFwiKSkpKX19ZnVuY3Rpb24gcyhlKXtlLnN0b3BQcm9wYWdhdGlvbigpO3ZhciB0PWUudGFyZ2V0Ll9zbGlkZXI7aWYodCl7aWYodC5hbmltYXRpbmdUbz09PXQuY3VycmVudFNsaWRlJiYheSYmbnVsbCE9PW0pe3ZhciBhPWQ/LW06bSxuPXQuZ2V0VGFyZ2V0KGE+MD9cIm5leHRcIjpcInByZXZcIik7dC5jYW5BZHZhbmNlKG4pJiYoTnVtYmVyKG5ldyBEYXRlKS1mPDU1MCYmTWF0aC5hYnMoYSk+NTB8fE1hdGguYWJzKGEpPnAvMik/dC5mbGV4QW5pbWF0ZShuLHQudmFycy5wYXVzZU9uQWN0aW9uKTp2fHx0LmZsZXhBbmltYXRlKHQuY3VycmVudFNsaWRlLHQudmFycy5wYXVzZU9uQWN0aW9uLCEwKX1yPW51bGwsbz1udWxsLG09bnVsbCxsPW51bGwsdz0wfX12YXIgcixvLGwscCxtLGYsZyxoLFMseT0hMSx4PTAsYj0wLHc9MDtpPyhlLnN0eWxlLm1zVG91Y2hBY3Rpb249XCJub25lXCIsZS5fZ2VzdHVyZT1uZXcgTVNHZXN0dXJlLGUuX2dlc3R1cmUudGFyZ2V0PWUsZS5hZGRFdmVudExpc3RlbmVyKFwiTVNQb2ludGVyRG93blwiLHQsITEpLGUuX3NsaWRlcj1hLGUuYWRkRXZlbnRMaXN0ZW5lcihcIk1TR2VzdHVyZUNoYW5nZVwiLG4sITEpLGUuYWRkRXZlbnRMaXN0ZW5lcihcIk1TR2VzdHVyZUVuZFwiLHMsITEpKTooZz1mdW5jdGlvbih0KXthLmFuaW1hdGluZz90LnByZXZlbnREZWZhdWx0KCk6KHdpbmRvdy5uYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZHx8MT09PXQudG91Y2hlcy5sZW5ndGgpJiYoYS5wYXVzZSgpLHA9Yz9hLmg6YS53LGY9TnVtYmVyKG5ldyBEYXRlKSx4PXQudG91Y2hlc1swXS5wYWdlWCxiPXQudG91Y2hlc1swXS5wYWdlWSxsPXUmJmQmJmEuYW5pbWF0aW5nVG89PT1hLmxhc3Q/MDp1JiZkP2EubGltaXQtKGEuaXRlbVcrYS52YXJzLml0ZW1NYXJnaW4pKmEubW92ZSphLmFuaW1hdGluZ1RvOnUmJmEuY3VycmVudFNsaWRlPT09YS5sYXN0P2EubGltaXQ6dT8oYS5pdGVtVythLnZhcnMuaXRlbU1hcmdpbikqYS5tb3ZlKmEuY3VycmVudFNsaWRlOmQ/KGEubGFzdC1hLmN1cnJlbnRTbGlkZSthLmNsb25lT2Zmc2V0KSpwOihhLmN1cnJlbnRTbGlkZSthLmNsb25lT2Zmc2V0KSpwLHI9Yz9iOngsbz1jP3g6YixlLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIixoLCExKSxlLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLFMsITEpKX0saD1mdW5jdGlvbihlKXt4PWUudG91Y2hlc1swXS5wYWdlWCxiPWUudG91Y2hlc1swXS5wYWdlWSxtPWM/ci1iOnIteCx5PWM/TWF0aC5hYnMobSk8TWF0aC5hYnMoeC1vKTpNYXRoLmFicyhtKTxNYXRoLmFicyhiLW8pO3ZhciB0PTUwMDsoIXl8fE51bWJlcihuZXcgRGF0ZSktZj50KSYmKGUucHJldmVudERlZmF1bHQoKSwhdiYmYS50cmFuc2l0aW9ucyYmKGEudmFycy5hbmltYXRpb25Mb29wfHwobS89MD09PWEuY3VycmVudFNsaWRlJiYwPm18fGEuY3VycmVudFNsaWRlPT09YS5sYXN0JiZtPjA/TWF0aC5hYnMobSkvcCsyOjEpLGEuc2V0UHJvcHMobCttLFwic2V0VG91Y2hcIikpKX0sUz1mdW5jdGlvbih0KXtpZihlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIixoLCExKSxhLmFuaW1hdGluZ1RvPT09YS5jdXJyZW50U2xpZGUmJiF5JiZudWxsIT09bSl7dmFyIG49ZD8tbTptLGk9YS5nZXRUYXJnZXQobj4wP1wibmV4dFwiOlwicHJldlwiKTthLmNhbkFkdmFuY2UoaSkmJihOdW1iZXIobmV3IERhdGUpLWY8NTUwJiZNYXRoLmFicyhuKT41MHx8TWF0aC5hYnMobik+cC8yKT9hLmZsZXhBbmltYXRlKGksYS52YXJzLnBhdXNlT25BY3Rpb24pOnZ8fGEuZmxleEFuaW1hdGUoYS5jdXJyZW50U2xpZGUsYS52YXJzLnBhdXNlT25BY3Rpb24sITApfWUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsUywhMSkscj1udWxsLG89bnVsbCxtPW51bGwsbD1udWxsfSxlLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsZywhMSkpfSxyZXNpemU6ZnVuY3Rpb24oKXshYS5hbmltYXRpbmcmJmEuaXMoXCI6dmlzaWJsZVwiKSYmKHV8fGEuZG9NYXRoKCksdj9tLnNtb290aEhlaWdodCgpOnU/KGEuc2xpZGVzLndpZHRoKGEuY29tcHV0ZWRXKSxhLnVwZGF0ZShhLnBhZ2luZ0NvdW50KSxhLnNldFByb3BzKCkpOmM/KGEudmlld3BvcnQuaGVpZ2h0KGEuaCksYS5zZXRQcm9wcyhhLmgsXCJzZXRUb3RhbFwiKSk6KGEudmFycy5zbW9vdGhIZWlnaHQmJm0uc21vb3RoSGVpZ2h0KCksYS5uZXdTbGlkZXMud2lkdGgoYS5jb21wdXRlZFcpLGEuc2V0UHJvcHMoYS5jb21wdXRlZFcsXCJzZXRUb3RhbFwiKSkpfSxzbW9vdGhIZWlnaHQ6ZnVuY3Rpb24oZSl7aWYoIWN8fHYpe3ZhciB0PXY/YTphLnZpZXdwb3J0O2U/dC5hbmltYXRlKHtoZWlnaHQ6YS5zbGlkZXMuZXEoYS5hbmltYXRpbmdUbykuaGVpZ2h0KCl9LGUpOnQuaGVpZ2h0KGEuc2xpZGVzLmVxKGEuYW5pbWF0aW5nVG8pLmhlaWdodCgpKX19LHN5bmM6ZnVuY3Rpb24oZSl7dmFyIHQ9JChhLnZhcnMuc3luYykuZGF0YShcImZsZXhzbGlkZXJcIiksbj1hLmFuaW1hdGluZ1RvO3N3aXRjaChlKXtjYXNlXCJhbmltYXRlXCI6dC5mbGV4QW5pbWF0ZShuLGEudmFycy5wYXVzZU9uQWN0aW9uLCExLCEwKTticmVhaztjYXNlXCJwbGF5XCI6dC5wbGF5aW5nfHx0LmFzTmF2fHx0LnBsYXkoKTticmVhaztjYXNlXCJwYXVzZVwiOnQucGF1c2UoKX19LHVuaXF1ZUlEOmZ1bmN0aW9uKGUpe3JldHVybiBlLmZpbHRlcihcIltpZF1cIikuYWRkKGUuZmluZChcIltpZF1cIikpLmVhY2goZnVuY3Rpb24oKXt2YXIgZT0kKHRoaXMpO2UuYXR0cihcImlkXCIsZS5hdHRyKFwiaWRcIikrXCJfY2xvbmVcIil9KSxlfSxwYXVzZUludmlzaWJsZTp7dmlzUHJvcDpudWxsLGluaXQ6ZnVuY3Rpb24oKXt2YXIgZT1tLnBhdXNlSW52aXNpYmxlLmdldEhpZGRlblByb3AoKTtpZihlKXt2YXIgdD1lLnJlcGxhY2UoL1tIfGhdaWRkZW4vLFwiXCIpK1widmlzaWJpbGl0eWNoYW5nZVwiO2RvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodCxmdW5jdGlvbigpe20ucGF1c2VJbnZpc2libGUuaXNIaWRkZW4oKT9hLnN0YXJ0VGltZW91dD9jbGVhclRpbWVvdXQoYS5zdGFydFRpbWVvdXQpOmEucGF1c2UoKTphLnN0YXJ0ZWQ/YS5wbGF5KCk6YS52YXJzLmluaXREZWxheT4wP3NldFRpbWVvdXQoYS5wbGF5LGEudmFycy5pbml0RGVsYXkpOmEucGxheSgpfSl9fSxpc0hpZGRlbjpmdW5jdGlvbigpe3ZhciBlPW0ucGF1c2VJbnZpc2libGUuZ2V0SGlkZGVuUHJvcCgpO3JldHVybiBlP2RvY3VtZW50W2VdOiExfSxnZXRIaWRkZW5Qcm9wOmZ1bmN0aW9uKCl7dmFyIGU9W1wid2Via2l0XCIsXCJtb3pcIixcIm1zXCIsXCJvXCJdO2lmKFwiaGlkZGVuXCJpbiBkb2N1bWVudClyZXR1cm5cImhpZGRlblwiO2Zvcih2YXIgdD0wO3Q8ZS5sZW5ndGg7dCsrKWlmKGVbdF0rXCJIaWRkZW5cImluIGRvY3VtZW50KXJldHVybiBlW3RdK1wiSGlkZGVuXCI7cmV0dXJuIG51bGx9fSxzZXRUb0NsZWFyV2F0Y2hlZEV2ZW50OmZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KGwpLGw9c2V0VGltZW91dChmdW5jdGlvbigpe289XCJcIn0sM2UzKX19LGEuZmxleEFuaW1hdGU9ZnVuY3Rpb24oZSx0LGkscixvKXtpZihhLnZhcnMuYW5pbWF0aW9uTG9vcHx8ZT09PWEuY3VycmVudFNsaWRlfHwoYS5kaXJlY3Rpb249ZT5hLmN1cnJlbnRTbGlkZT9cIm5leHRcIjpcInByZXZcIikscCYmMT09PWEucGFnaW5nQ291bnQmJihhLmRpcmVjdGlvbj1hLmN1cnJlbnRJdGVtPGU/XCJuZXh0XCI6XCJwcmV2XCIpLCFhLmFuaW1hdGluZyYmKGEuY2FuQWR2YW5jZShlLG8pfHxpKSYmYS5pcyhcIjp2aXNpYmxlXCIpKXtpZihwJiZyKXt2YXIgbD0kKGEudmFycy5hc05hdkZvcikuZGF0YShcImZsZXhzbGlkZXJcIik7aWYoYS5hdEVuZD0wPT09ZXx8ZT09PWEuY291bnQtMSxsLmZsZXhBbmltYXRlKGUsITAsITEsITAsbyksYS5kaXJlY3Rpb249YS5jdXJyZW50SXRlbTxlP1wibmV4dFwiOlwicHJldlwiLGwuZGlyZWN0aW9uPWEuZGlyZWN0aW9uLE1hdGguY2VpbCgoZSsxKS9hLnZpc2libGUpLTE9PT1hLmN1cnJlbnRTbGlkZXx8MD09PWUpcmV0dXJuIGEuY3VycmVudEl0ZW09ZSxhLnNsaWRlcy5yZW1vdmVDbGFzcyhuK1wiYWN0aXZlLXNsaWRlXCIpLmVxKGUpLmFkZENsYXNzKG4rXCJhY3RpdmUtc2xpZGVcIiksITE7YS5jdXJyZW50SXRlbT1lLGEuc2xpZGVzLnJlbW92ZUNsYXNzKG4rXCJhY3RpdmUtc2xpZGVcIikuZXEoZSkuYWRkQ2xhc3MobitcImFjdGl2ZS1zbGlkZVwiKSxlPU1hdGguZmxvb3IoZS9hLnZpc2libGUpfWlmKGEuYW5pbWF0aW5nPSEwLGEuYW5pbWF0aW5nVG89ZSx0JiZhLnBhdXNlKCksYS52YXJzLmJlZm9yZShhKSxhLnN5bmNFeGlzdHMmJiFvJiZtLnN5bmMoXCJhbmltYXRlXCIpLGEudmFycy5jb250cm9sTmF2JiZtLmNvbnRyb2xOYXYuYWN0aXZlKCksdXx8YS5zbGlkZXMucmVtb3ZlQ2xhc3MobitcImFjdGl2ZS1zbGlkZVwiKS5lcShlKS5hZGRDbGFzcyhuK1wiYWN0aXZlLXNsaWRlXCIpLGEuYXRFbmQ9MD09PWV8fGU9PT1hLmxhc3QsYS52YXJzLmRpcmVjdGlvbk5hdiYmbS5kaXJlY3Rpb25OYXYudXBkYXRlKCksZT09PWEubGFzdCYmKGEudmFycy5lbmQoYSksYS52YXJzLmFuaW1hdGlvbkxvb3B8fGEucGF1c2UoKSksdilzPyhhLnNsaWRlcy5lcShhLmN1cnJlbnRTbGlkZSkuY3NzKHtvcGFjaXR5OjAsekluZGV4OjF9KSxhLnNsaWRlcy5lcShlKS5jc3Moe29wYWNpdHk6MSx6SW5kZXg6Mn0pLGEud3JhcHVwKGYpKTooYS5zbGlkZXMuZXEoYS5jdXJyZW50U2xpZGUpLmNzcyh7ekluZGV4OjF9KS5hbmltYXRlKHtvcGFjaXR5OjB9LGEudmFycy5hbmltYXRpb25TcGVlZCxhLnZhcnMuZWFzaW5nKSxhLnNsaWRlcy5lcShlKS5jc3Moe3pJbmRleDoyfSkuYW5pbWF0ZSh7b3BhY2l0eToxfSxhLnZhcnMuYW5pbWF0aW9uU3BlZWQsYS52YXJzLmVhc2luZyxhLndyYXB1cCkpO2Vsc2V7dmFyIGY9Yz9hLnNsaWRlcy5maWx0ZXIoXCI6Zmlyc3RcIikuaGVpZ2h0KCk6YS5jb21wdXRlZFcsZyxoLFM7dT8oZz1hLnZhcnMuaXRlbU1hcmdpbixTPShhLml0ZW1XK2cpKmEubW92ZSphLmFuaW1hdGluZ1RvLGg9Uz5hLmxpbWl0JiYxIT09YS52aXNpYmxlP2EubGltaXQ6Uyk6aD0wPT09YS5jdXJyZW50U2xpZGUmJmU9PT1hLmNvdW50LTEmJmEudmFycy5hbmltYXRpb25Mb29wJiZcIm5leHRcIiE9PWEuZGlyZWN0aW9uP2Q/KGEuY291bnQrYS5jbG9uZU9mZnNldCkqZjowOmEuY3VycmVudFNsaWRlPT09YS5sYXN0JiYwPT09ZSYmYS52YXJzLmFuaW1hdGlvbkxvb3AmJlwicHJldlwiIT09YS5kaXJlY3Rpb24/ZD8wOihhLmNvdW50KzEpKmY6ZD8oYS5jb3VudC0xLWUrYS5jbG9uZU9mZnNldCkqZjooZSthLmNsb25lT2Zmc2V0KSpmLGEuc2V0UHJvcHMoaCxcIlwiLGEudmFycy5hbmltYXRpb25TcGVlZCksYS50cmFuc2l0aW9ucz8oYS52YXJzLmFuaW1hdGlvbkxvb3AmJmEuYXRFbmR8fChhLmFuaW1hdGluZz0hMSxhLmN1cnJlbnRTbGlkZT1hLmFuaW1hdGluZ1RvKSxhLmNvbnRhaW5lci51bmJpbmQoXCJ3ZWJraXRUcmFuc2l0aW9uRW5kIHRyYW5zaXRpb25lbmRcIiksYS5jb250YWluZXIuYmluZChcIndlYmtpdFRyYW5zaXRpb25FbmQgdHJhbnNpdGlvbmVuZFwiLGZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KGEuZW5zdXJlQW5pbWF0aW9uRW5kKSxhLndyYXB1cChmKX0pLGNsZWFyVGltZW91dChhLmVuc3VyZUFuaW1hdGlvbkVuZCksYS5lbnN1cmVBbmltYXRpb25FbmQ9c2V0VGltZW91dChmdW5jdGlvbigpe2Eud3JhcHVwKGYpfSxhLnZhcnMuYW5pbWF0aW9uU3BlZWQrMTAwKSk6YS5jb250YWluZXIuYW5pbWF0ZShhLmFyZ3MsYS52YXJzLmFuaW1hdGlvblNwZWVkLGEudmFycy5lYXNpbmcsZnVuY3Rpb24oKXthLndyYXB1cChmKX0pfWEudmFycy5zbW9vdGhIZWlnaHQmJm0uc21vb3RoSGVpZ2h0KGEudmFycy5hbmltYXRpb25TcGVlZCl9fSxhLndyYXB1cD1mdW5jdGlvbihlKXt2fHx1fHwoMD09PWEuY3VycmVudFNsaWRlJiZhLmFuaW1hdGluZ1RvPT09YS5sYXN0JiZhLnZhcnMuYW5pbWF0aW9uTG9vcD9hLnNldFByb3BzKGUsXCJqdW1wRW5kXCIpOmEuY3VycmVudFNsaWRlPT09YS5sYXN0JiYwPT09YS5hbmltYXRpbmdUbyYmYS52YXJzLmFuaW1hdGlvbkxvb3AmJmEuc2V0UHJvcHMoZSxcImp1bXBTdGFydFwiKSksYS5hbmltYXRpbmc9ITEsYS5jdXJyZW50U2xpZGU9YS5hbmltYXRpbmdUbyxhLnZhcnMuYWZ0ZXIoYSl9LGEuYW5pbWF0ZVNsaWRlcz1mdW5jdGlvbigpeyFhLmFuaW1hdGluZyYmZiYmYS5mbGV4QW5pbWF0ZShhLmdldFRhcmdldChcIm5leHRcIikpfSxhLnBhdXNlPWZ1bmN0aW9uKCl7Y2xlYXJJbnRlcnZhbChhLmFuaW1hdGVkU2xpZGVzKSxhLmFuaW1hdGVkU2xpZGVzPW51bGwsYS5wbGF5aW5nPSExLGEudmFycy5wYXVzZVBsYXkmJm0ucGF1c2VQbGF5LnVwZGF0ZShcInBsYXlcIiksYS5zeW5jRXhpc3RzJiZtLnN5bmMoXCJwYXVzZVwiKX0sYS5wbGF5PWZ1bmN0aW9uKCl7YS5wbGF5aW5nJiZjbGVhckludGVydmFsKGEuYW5pbWF0ZWRTbGlkZXMpLGEuYW5pbWF0ZWRTbGlkZXM9YS5hbmltYXRlZFNsaWRlc3x8c2V0SW50ZXJ2YWwoYS5hbmltYXRlU2xpZGVzLGEudmFycy5zbGlkZXNob3dTcGVlZCksYS5zdGFydGVkPWEucGxheWluZz0hMCxhLnZhcnMucGF1c2VQbGF5JiZtLnBhdXNlUGxheS51cGRhdGUoXCJwYXVzZVwiKSxhLnN5bmNFeGlzdHMmJm0uc3luYyhcInBsYXlcIil9LGEuc3RvcD1mdW5jdGlvbigpe2EucGF1c2UoKSxhLnN0b3BwZWQ9ITB9LGEuY2FuQWR2YW5jZT1mdW5jdGlvbihlLHQpe3ZhciBuPXA/YS5wYWdpbmdDb3VudC0xOmEubGFzdDtyZXR1cm4gdD8hMDpwJiZhLmN1cnJlbnRJdGVtPT09YS5jb3VudC0xJiYwPT09ZSYmXCJwcmV2XCI9PT1hLmRpcmVjdGlvbj8hMDpwJiYwPT09YS5jdXJyZW50SXRlbSYmZT09PWEucGFnaW5nQ291bnQtMSYmXCJuZXh0XCIhPT1hLmRpcmVjdGlvbj8hMTplIT09YS5jdXJyZW50U2xpZGV8fHA/YS52YXJzLmFuaW1hdGlvbkxvb3A/ITA6YS5hdEVuZCYmMD09PWEuY3VycmVudFNsaWRlJiZlPT09biYmXCJuZXh0XCIhPT1hLmRpcmVjdGlvbj8hMTphLmF0RW5kJiZhLmN1cnJlbnRTbGlkZT09PW4mJjA9PT1lJiZcIm5leHRcIj09PWEuZGlyZWN0aW9uPyExOiEwOiExfSxhLmdldFRhcmdldD1mdW5jdGlvbihlKXtyZXR1cm4gYS5kaXJlY3Rpb249ZSxcIm5leHRcIj09PWU/YS5jdXJyZW50U2xpZGU9PT1hLmxhc3Q/MDphLmN1cnJlbnRTbGlkZSsxOjA9PT1hLmN1cnJlbnRTbGlkZT9hLmxhc3Q6YS5jdXJyZW50U2xpZGUtMX0sYS5zZXRQcm9wcz1mdW5jdGlvbihlLHQsbil7dmFyIGk9ZnVuY3Rpb24oKXt2YXIgbj1lP2U6KGEuaXRlbVcrYS52YXJzLml0ZW1NYXJnaW4pKmEubW92ZSphLmFuaW1hdGluZ1RvLGk9ZnVuY3Rpb24oKXtpZih1KXJldHVyblwic2V0VG91Y2hcIj09PXQ/ZTpkJiZhLmFuaW1hdGluZ1RvPT09YS5sYXN0PzA6ZD9hLmxpbWl0LShhLml0ZW1XK2EudmFycy5pdGVtTWFyZ2luKSphLm1vdmUqYS5hbmltYXRpbmdUbzphLmFuaW1hdGluZ1RvPT09YS5sYXN0P2EubGltaXQ6bjtzd2l0Y2godCl7Y2FzZVwic2V0VG90YWxcIjpyZXR1cm4gZD8oYS5jb3VudC0xLWEuY3VycmVudFNsaWRlK2EuY2xvbmVPZmZzZXQpKmU6KGEuY3VycmVudFNsaWRlK2EuY2xvbmVPZmZzZXQpKmU7Y2FzZVwic2V0VG91Y2hcIjpyZXR1cm4gZD9lOmU7Y2FzZVwianVtcEVuZFwiOnJldHVybiBkP2U6YS5jb3VudCplO2Nhc2VcImp1bXBTdGFydFwiOnJldHVybiBkP2EuY291bnQqZTplO2RlZmF1bHQ6cmV0dXJuIGV9fSgpO3JldHVybi0xKmkrXCJweFwifSgpO2EudHJhbnNpdGlvbnMmJihpPWM/XCJ0cmFuc2xhdGUzZCgwLFwiK2krXCIsMClcIjpcInRyYW5zbGF0ZTNkKFwiK2krXCIsMCwwKVwiLG49dm9pZCAwIT09bj9uLzFlMytcInNcIjpcIjBzXCIsYS5jb250YWluZXIuY3NzKFwiLVwiK2EucGZ4K1wiLXRyYW5zaXRpb24tZHVyYXRpb25cIixuKSxhLmNvbnRhaW5lci5jc3MoXCJ0cmFuc2l0aW9uLWR1cmF0aW9uXCIsbikpLGEuYXJnc1thLnByb3BdPWksKGEudHJhbnNpdGlvbnN8fHZvaWQgMD09PW4pJiZhLmNvbnRhaW5lci5jc3MoYS5hcmdzKSxhLmNvbnRhaW5lci5jc3MoXCJ0cmFuc2Zvcm1cIixpKX0sYS5zZXR1cD1mdW5jdGlvbihlKXtpZih2KWEuc2xpZGVzLmNzcyh7d2lkdGg6XCIxMDAlXCIsXCJmbG9hdFwiOlwibGVmdFwiLG1hcmdpblJpZ2h0OlwiLTEwMCVcIixwb3NpdGlvbjpcInJlbGF0aXZlXCJ9KSxcImluaXRcIj09PWUmJihzP2Euc2xpZGVzLmNzcyh7b3BhY2l0eTowLGRpc3BsYXk6XCJibG9ja1wiLHdlYmtpdFRyYW5zaXRpb246XCJvcGFjaXR5IFwiK2EudmFycy5hbmltYXRpb25TcGVlZC8xZTMrXCJzIGVhc2VcIix6SW5kZXg6MX0pLmVxKGEuY3VycmVudFNsaWRlKS5jc3Moe29wYWNpdHk6MSx6SW5kZXg6Mn0pOjA9PWEudmFycy5mYWRlRmlyc3RTbGlkZT9hLnNsaWRlcy5jc3Moe29wYWNpdHk6MCxkaXNwbGF5OlwiYmxvY2tcIix6SW5kZXg6MX0pLmVxKGEuY3VycmVudFNsaWRlKS5jc3Moe3pJbmRleDoyfSkuY3NzKHtvcGFjaXR5OjF9KTphLnNsaWRlcy5jc3Moe29wYWNpdHk6MCxkaXNwbGF5OlwiYmxvY2tcIix6SW5kZXg6MX0pLmVxKGEuY3VycmVudFNsaWRlKS5jc3Moe3pJbmRleDoyfSkuYW5pbWF0ZSh7b3BhY2l0eToxfSxhLnZhcnMuYW5pbWF0aW9uU3BlZWQsYS52YXJzLmVhc2luZykpLGEudmFycy5zbW9vdGhIZWlnaHQmJm0uc21vb3RoSGVpZ2h0KCk7ZWxzZXt2YXIgdCxpO1wiaW5pdFwiPT09ZSYmKGEudmlld3BvcnQ9JCgnPGRpdiBjbGFzcz1cIicrbisndmlld3BvcnRcIj48L2Rpdj4nKS5jc3Moe292ZXJmbG93OlwiaGlkZGVuXCIscG9zaXRpb246XCJyZWxhdGl2ZVwifSkuYXBwZW5kVG8oYSkuYXBwZW5kKGEuY29udGFpbmVyKSxhLmNsb25lQ291bnQ9MCxhLmNsb25lT2Zmc2V0PTAsZCYmKGk9JC5tYWtlQXJyYXkoYS5zbGlkZXMpLnJldmVyc2UoKSxhLnNsaWRlcz0kKGkpLGEuY29udGFpbmVyLmVtcHR5KCkuYXBwZW5kKGEuc2xpZGVzKSkpLGEudmFycy5hbmltYXRpb25Mb29wJiYhdSYmKGEuY2xvbmVDb3VudD0yLGEuY2xvbmVPZmZzZXQ9MSxcImluaXRcIiE9PWUmJmEuY29udGFpbmVyLmZpbmQoXCIuY2xvbmVcIikucmVtb3ZlKCksYS5jb250YWluZXIuYXBwZW5kKG0udW5pcXVlSUQoYS5zbGlkZXMuZmlyc3QoKS5jbG9uZSgpLmFkZENsYXNzKFwiY2xvbmVcIikpLmF0dHIoXCJhcmlhLWhpZGRlblwiLFwidHJ1ZVwiKSkucHJlcGVuZChtLnVuaXF1ZUlEKGEuc2xpZGVzLmxhc3QoKS5jbG9uZSgpLmFkZENsYXNzKFwiY2xvbmVcIikpLmF0dHIoXCJhcmlhLWhpZGRlblwiLFwidHJ1ZVwiKSkpLGEubmV3U2xpZGVzPSQoYS52YXJzLnNlbGVjdG9yLGEpLHQ9ZD9hLmNvdW50LTEtYS5jdXJyZW50U2xpZGUrYS5jbG9uZU9mZnNldDphLmN1cnJlbnRTbGlkZSthLmNsb25lT2Zmc2V0LGMmJiF1PyhhLmNvbnRhaW5lci5oZWlnaHQoMjAwKihhLmNvdW50K2EuY2xvbmVDb3VudCkrXCIlXCIpLmNzcyhcInBvc2l0aW9uXCIsXCJhYnNvbHV0ZVwiKS53aWR0aChcIjEwMCVcIiksc2V0VGltZW91dChmdW5jdGlvbigpe2EubmV3U2xpZGVzLmNzcyh7ZGlzcGxheTpcImJsb2NrXCJ9KSxhLmRvTWF0aCgpLGEudmlld3BvcnQuaGVpZ2h0KGEuaCksYS5zZXRQcm9wcyh0KmEuaCxcImluaXRcIil9LFwiaW5pdFwiPT09ZT8xMDA6MCkpOihhLmNvbnRhaW5lci53aWR0aCgyMDAqKGEuY291bnQrYS5jbG9uZUNvdW50KStcIiVcIiksYS5zZXRQcm9wcyh0KmEuY29tcHV0ZWRXLFwiaW5pdFwiKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YS5kb01hdGgoKSxhLm5ld1NsaWRlcy5jc3Moe3dpZHRoOmEuY29tcHV0ZWRXLFwiZmxvYXRcIjpcImxlZnRcIixkaXNwbGF5OlwiYmxvY2tcIn0pLGEudmFycy5zbW9vdGhIZWlnaHQmJm0uc21vb3RoSGVpZ2h0KCl9LFwiaW5pdFwiPT09ZT8xMDA6MCkpfXV8fGEuc2xpZGVzLnJlbW92ZUNsYXNzKG4rXCJhY3RpdmUtc2xpZGVcIikuZXEoYS5jdXJyZW50U2xpZGUpLmFkZENsYXNzKG4rXCJhY3RpdmUtc2xpZGVcIiksYS52YXJzLmluaXQoYSl9LGEuZG9NYXRoPWZ1bmN0aW9uKCl7dmFyIGU9YS5zbGlkZXMuZmlyc3QoKSx0PWEudmFycy5pdGVtTWFyZ2luLG49YS52YXJzLm1pbkl0ZW1zLGk9YS52YXJzLm1heEl0ZW1zO2Eudz12b2lkIDA9PT1hLnZpZXdwb3J0P2Eud2lkdGgoKTphLnZpZXdwb3J0LndpZHRoKCksYS5oPWUuaGVpZ2h0KCksYS5ib3hQYWRkaW5nPWUub3V0ZXJXaWR0aCgpLWUud2lkdGgoKSx1PyhhLml0ZW1UPWEudmFycy5pdGVtV2lkdGgrdCxhLm1pblc9bj9uKmEuaXRlbVQ6YS53LGEubWF4Vz1pP2kqYS5pdGVtVC10OmEudyxhLml0ZW1XPWEubWluVz5hLnc/KGEudy10KihuLTEpKS9uOmEubWF4VzxhLnc/KGEudy10KihpLTEpKS9pOmEudmFycy5pdGVtV2lkdGg+YS53P2EudzphLnZhcnMuaXRlbVdpZHRoLGEudmlzaWJsZT1NYXRoLmZsb29yKGEudy9hLml0ZW1XKSxhLm1vdmU9YS52YXJzLm1vdmU+MCYmYS52YXJzLm1vdmU8YS52aXNpYmxlP2EudmFycy5tb3ZlOmEudmlzaWJsZSxhLnBhZ2luZ0NvdW50PU1hdGguY2VpbCgoYS5jb3VudC1hLnZpc2libGUpL2EubW92ZSsxKSxhLmxhc3Q9YS5wYWdpbmdDb3VudC0xLGEubGltaXQ9MT09PWEucGFnaW5nQ291bnQ/MDphLnZhcnMuaXRlbVdpZHRoPmEudz9hLml0ZW1XKihhLmNvdW50LTEpK3QqKGEuY291bnQtMSk6KGEuaXRlbVcrdCkqYS5jb3VudC1hLnctdCk6KGEuaXRlbVc9YS53LGEucGFnaW5nQ291bnQ9YS5jb3VudCxhLmxhc3Q9YS5jb3VudC0xKSxhLmNvbXB1dGVkVz1hLml0ZW1XLWEuYm94UGFkZGluZ30sYS51cGRhdGU9ZnVuY3Rpb24oZSx0KXthLmRvTWF0aCgpLHV8fChlPGEuY3VycmVudFNsaWRlP2EuY3VycmVudFNsaWRlKz0xOmU8PWEuY3VycmVudFNsaWRlJiYwIT09ZSYmKGEuY3VycmVudFNsaWRlLT0xKSxhLmFuaW1hdGluZ1RvPWEuY3VycmVudFNsaWRlKSxhLnZhcnMuY29udHJvbE5hdiYmIWEubWFudWFsQ29udHJvbHMmJihcImFkZFwiPT09dCYmIXV8fGEucGFnaW5nQ291bnQ+YS5jb250cm9sTmF2Lmxlbmd0aD9tLmNvbnRyb2xOYXYudXBkYXRlKFwiYWRkXCIpOihcInJlbW92ZVwiPT09dCYmIXV8fGEucGFnaW5nQ291bnQ8YS5jb250cm9sTmF2Lmxlbmd0aCkmJih1JiZhLmN1cnJlbnRTbGlkZT5hLmxhc3QmJihhLmN1cnJlbnRTbGlkZS09MSxhLmFuaW1hdGluZ1RvLT0xKSxtLmNvbnRyb2xOYXYudXBkYXRlKFwicmVtb3ZlXCIsYS5sYXN0KSkpLGEudmFycy5kaXJlY3Rpb25OYXYmJm0uZGlyZWN0aW9uTmF2LnVwZGF0ZSgpfSxhLmFkZFNsaWRlPWZ1bmN0aW9uKGUsdCl7dmFyIG49JChlKTthLmNvdW50Kz0xLGEubGFzdD1hLmNvdW50LTEsYyYmZD92b2lkIDAhPT10P2Euc2xpZGVzLmVxKGEuY291bnQtdCkuYWZ0ZXIobik6YS5jb250YWluZXIucHJlcGVuZChuKTp2b2lkIDAhPT10P2Euc2xpZGVzLmVxKHQpLmJlZm9yZShuKTphLmNvbnRhaW5lci5hcHBlbmQobiksYS51cGRhdGUodCxcImFkZFwiKSxhLnNsaWRlcz0kKGEudmFycy5zZWxlY3RvcitcIjpub3QoLmNsb25lKVwiLGEpLGEuc2V0dXAoKSxhLnZhcnMuYWRkZWQoYSl9LGEucmVtb3ZlU2xpZGU9ZnVuY3Rpb24oZSl7dmFyIHQ9aXNOYU4oZSk/YS5zbGlkZXMuaW5kZXgoJChlKSk6ZTthLmNvdW50LT0xLGEubGFzdD1hLmNvdW50LTEsaXNOYU4oZSk/JChlLGEuc2xpZGVzKS5yZW1vdmUoKTpjJiZkP2Euc2xpZGVzLmVxKGEubGFzdCkucmVtb3ZlKCk6YS5zbGlkZXMuZXEoZSkucmVtb3ZlKCksYS5kb01hdGgoKSxhLnVwZGF0ZSh0LFwicmVtb3ZlXCIpLGEuc2xpZGVzPSQoYS52YXJzLnNlbGVjdG9yK1wiOm5vdCguY2xvbmUpXCIsYSksYS5zZXR1cCgpLGEudmFycy5yZW1vdmVkKGEpfSxtLmluaXQoKX0sJCh3aW5kb3cpLmJsdXIoZnVuY3Rpb24oZSl7Zm9jdXNlZD0hMX0pLmZvY3VzKGZ1bmN0aW9uKGUpe2ZvY3VzZWQ9ITB9KSwkLmZsZXhzbGlkZXIuZGVmYXVsdHM9e25hbWVzcGFjZTpcImZsZXgtXCIsc2VsZWN0b3I6XCIuc2xpZGVzID4gbGlcIixhbmltYXRpb246XCJmYWRlXCIsZWFzaW5nOlwic3dpbmdcIixkaXJlY3Rpb246XCJob3Jpem9udGFsXCIscmV2ZXJzZTohMSxhbmltYXRpb25Mb29wOiEwLHNtb290aEhlaWdodDohMSxzdGFydEF0OjAsc2xpZGVzaG93OiEwLHNsaWRlc2hvd1NwZWVkOjdlMyxhbmltYXRpb25TcGVlZDo2MDAsaW5pdERlbGF5OjAscmFuZG9taXplOiExLGZhZGVGaXJzdFNsaWRlOiEwLHRodW1iQ2FwdGlvbnM6ITEscGF1c2VPbkFjdGlvbjohMCxwYXVzZU9uSG92ZXI6ITEscGF1c2VJbnZpc2libGU6ITAsdXNlQ1NTOiEwLHRvdWNoOiEwLHZpZGVvOiExLGNvbnRyb2xOYXY6ITAsZGlyZWN0aW9uTmF2OiEwLHByZXZUZXh0OlwiUHJldmlvdXNcIixuZXh0VGV4dDpcIk5leHRcIixrZXlib2FyZDohMCxtdWx0aXBsZUtleWJvYXJkOiExLG1vdXNld2hlZWw6ITEscGF1c2VQbGF5OiExLHBhdXNlVGV4dDpcIlBhdXNlXCIscGxheVRleHQ6XCJQbGF5XCIsY29udHJvbHNDb250YWluZXI6XCJcIixtYW51YWxDb250cm9sczpcIlwiLGN1c3RvbURpcmVjdGlvbk5hdjpcIlwiLHN5bmM6XCJcIixhc05hdkZvcjpcIlwiLGl0ZW1XaWR0aDowLGl0ZW1NYXJnaW46MCxtaW5JdGVtczoxLG1heEl0ZW1zOjAsbW92ZTowLGFsbG93T25lU2xpZGU6ITAsc3RhcnQ6ZnVuY3Rpb24oKXt9LGJlZm9yZTpmdW5jdGlvbigpe30sYWZ0ZXI6ZnVuY3Rpb24oKXt9LGVuZDpmdW5jdGlvbigpe30sYWRkZWQ6ZnVuY3Rpb24oKXt9LHJlbW92ZWQ6ZnVuY3Rpb24oKXt9LGluaXQ6ZnVuY3Rpb24oKXt9fSwkLmZuLmZsZXhzbGlkZXI9ZnVuY3Rpb24oZSl7aWYodm9pZCAwPT09ZSYmKGU9e30pLFwib2JqZWN0XCI9PXR5cGVvZiBlKXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgdD0kKHRoaXMpLGE9ZS5zZWxlY3Rvcj9lLnNlbGVjdG9yOlwiLnNsaWRlcyA+IGxpXCIsbj10LmZpbmQoYSk7MT09PW4ubGVuZ3RoJiZlLmFsbG93T25lU2xpZGU9PT0hMHx8MD09PW4ubGVuZ3RoPyhuLmZhZGVJbig0MDApLGUuc3RhcnQmJmUuc3RhcnQodCkpOnZvaWQgMD09PXQuZGF0YShcImZsZXhzbGlkZXJcIikmJm5ldyAkLmZsZXhzbGlkZXIodGhpcyxlKX0pO3ZhciB0PSQodGhpcykuZGF0YShcImZsZXhzbGlkZXJcIik7c3dpdGNoKGUpe2Nhc2VcInBsYXlcIjp0LnBsYXkoKTticmVhaztjYXNlXCJwYXVzZVwiOnQucGF1c2UoKTticmVhaztjYXNlXCJzdG9wXCI6dC5zdG9wKCk7YnJlYWs7Y2FzZVwibmV4dFwiOnQuZmxleEFuaW1hdGUodC5nZXRUYXJnZXQoXCJuZXh0XCIpLCEwKTticmVhaztjYXNlXCJwcmV2XCI6Y2FzZVwicHJldmlvdXNcIjp0LmZsZXhBbmltYXRlKHQuZ2V0VGFyZ2V0KFwicHJldlwiKSwhMCk7YnJlYWs7ZGVmYXVsdDpcIm51bWJlclwiPT10eXBlb2YgZSYmdC5mbGV4QW5pbWF0ZShlLCEwKX19fShqUXVlcnkpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9qcXVlcnkuZmxleHNsaWRlci1taW4uanMiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiKGZ1bmN0aW9uIChnbG9iYWwsIHVuZGVmaW5lZCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgaWYgKGdsb2JhbC5zZXRJbW1lZGlhdGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBuZXh0SGFuZGxlID0gMTsgLy8gU3BlYyBzYXlzIGdyZWF0ZXIgdGhhbiB6ZXJvXG4gICAgdmFyIHRhc2tzQnlIYW5kbGUgPSB7fTtcbiAgICB2YXIgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgdmFyIGRvYyA9IGdsb2JhbC5kb2N1bWVudDtcbiAgICB2YXIgcmVnaXN0ZXJJbW1lZGlhdGU7XG5cbiAgICBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoY2FsbGJhY2spIHtcbiAgICAgIC8vIENhbGxiYWNrIGNhbiBlaXRoZXIgYmUgYSBmdW5jdGlvbiBvciBhIHN0cmluZ1xuICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGNhbGxiYWNrID0gbmV3IEZ1bmN0aW9uKFwiXCIgKyBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgICAvLyBDb3B5IGZ1bmN0aW9uIGFyZ3VtZW50c1xuICAgICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpICsgMV07XG4gICAgICB9XG4gICAgICAvLyBTdG9yZSBhbmQgcmVnaXN0ZXIgdGhlIHRhc2tcbiAgICAgIHZhciB0YXNrID0geyBjYWxsYmFjazogY2FsbGJhY2ssIGFyZ3M6IGFyZ3MgfTtcbiAgICAgIHRhc2tzQnlIYW5kbGVbbmV4dEhhbmRsZV0gPSB0YXNrO1xuICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUobmV4dEhhbmRsZSk7XG4gICAgICByZXR1cm4gbmV4dEhhbmRsZSsrO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGhhbmRsZSkge1xuICAgICAgICBkZWxldGUgdGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bih0YXNrKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IHRhc2suY2FsbGJhY2s7XG4gICAgICAgIHZhciBhcmdzID0gdGFzay5hcmdzO1xuICAgICAgICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bklmUHJlc2VudChoYW5kbGUpIHtcbiAgICAgICAgLy8gRnJvbSB0aGUgc3BlYzogXCJXYWl0IHVudGlsIGFueSBpbnZvY2F0aW9ucyBvZiB0aGlzIGFsZ29yaXRobSBzdGFydGVkIGJlZm9yZSB0aGlzIG9uZSBoYXZlIGNvbXBsZXRlZC5cIlxuICAgICAgICAvLyBTbyBpZiB3ZSdyZSBjdXJyZW50bHkgcnVubmluZyBhIHRhc2ssIHdlJ2xsIG5lZWQgdG8gZGVsYXkgdGhpcyBpbnZvY2F0aW9uLlxuICAgICAgICBpZiAoY3VycmVudGx5UnVubmluZ0FUYXNrKSB7XG4gICAgICAgICAgICAvLyBEZWxheSBieSBkb2luZyBhIHNldFRpbWVvdXQuIHNldEltbWVkaWF0ZSB3YXMgdHJpZWQgaW5zdGVhZCwgYnV0IGluIEZpcmVmb3ggNyBpdCBnZW5lcmF0ZWQgYVxuICAgICAgICAgICAgLy8gXCJ0b28gbXVjaCByZWN1cnNpb25cIiBlcnJvci5cbiAgICAgICAgICAgIHNldFRpbWVvdXQocnVuSWZQcmVzZW50LCAwLCBoYW5kbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHRhc2sgPSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgICAgICAgICBpZiAodGFzaykge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IHRydWU7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcnVuKHRhc2spO1xuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW1tZWRpYXRlKGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiAoKSB7IHJ1bklmUHJlc2VudChoYW5kbGUpOyB9KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYW5Vc2VQb3N0TWVzc2FnZSgpIHtcbiAgICAgICAgLy8gVGhlIHRlc3QgYWdhaW5zdCBgaW1wb3J0U2NyaXB0c2AgcHJldmVudHMgdGhpcyBpbXBsZW1lbnRhdGlvbiBmcm9tIGJlaW5nIGluc3RhbGxlZCBpbnNpZGUgYSB3ZWIgd29ya2VyLFxuICAgICAgICAvLyB3aGVyZSBgZ2xvYmFsLnBvc3RNZXNzYWdlYCBtZWFucyBzb21ldGhpbmcgY29tcGxldGVseSBkaWZmZXJlbnQgYW5kIGNhbid0IGJlIHVzZWQgZm9yIHRoaXMgcHVycG9zZS5cbiAgICAgICAgaWYgKGdsb2JhbC5wb3N0TWVzc2FnZSAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpIHtcbiAgICAgICAgICAgIHZhciBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBvbGRPbk1lc3NhZ2UgPSBnbG9iYWwub25tZXNzYWdlO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSBmYWxzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoXCJcIiwgXCIqXCIpO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IG9sZE9uTWVzc2FnZTtcbiAgICAgICAgICAgIHJldHVybiBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIC8vIEluc3RhbGxzIGFuIGV2ZW50IGhhbmRsZXIgb24gYGdsb2JhbGAgZm9yIHRoZSBgbWVzc2FnZWAgZXZlbnQ6IHNlZVxuICAgICAgICAvLyAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL0RPTS93aW5kb3cucG9zdE1lc3NhZ2VcbiAgICAgICAgLy8gKiBodHRwOi8vd3d3LndoYXR3Zy5vcmcvc3BlY3Mvd2ViLWFwcHMvY3VycmVudC13b3JrL211bHRpcGFnZS9jb21tcy5odG1sI2Nyb3NzRG9jdW1lbnRNZXNzYWdlc1xuXG4gICAgICAgIHZhciBtZXNzYWdlUHJlZml4ID0gXCJzZXRJbW1lZGlhdGUkXCIgKyBNYXRoLnJhbmRvbSgpICsgXCIkXCI7XG4gICAgICAgIHZhciBvbkdsb2JhbE1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnNvdXJjZSA9PT0gZ2xvYmFsICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIGV2ZW50LmRhdGEgPT09IFwic3RyaW5nXCIgJiZcbiAgICAgICAgICAgICAgICBldmVudC5kYXRhLmluZGV4T2YobWVzc2FnZVByZWZpeCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICBydW5JZlByZXNlbnQoK2V2ZW50LmRhdGEuc2xpY2UobWVzc2FnZVByZWZpeC5sZW5ndGgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdsb2JhbC5hdHRhY2hFdmVudChcIm9ubWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShtZXNzYWdlUHJlZml4ICsgaGFuZGxlLCBcIipcIik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGUgPSBldmVudC5kYXRhO1xuICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICB2YXIgaHRtbCA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgYSA8c2NyaXB0PiBlbGVtZW50OyBpdHMgcmVhZHlzdGF0ZWNoYW5nZSBldmVudCB3aWxsIGJlIGZpcmVkIGFzeW5jaHJvbm91c2x5IG9uY2UgaXQgaXMgaW5zZXJ0ZWRcbiAgICAgICAgICAgIC8vIGludG8gdGhlIGRvY3VtZW50LiBEbyBzbywgdGh1cyBxdWV1aW5nIHVwIHRoZSB0YXNrLiBSZW1lbWJlciB0byBjbGVhbiB1cCBvbmNlIGl0J3MgYmVlbiBjYWxsZWQuXG4gICAgICAgICAgICB2YXIgc2NyaXB0ID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgICAgICAgICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgICAgICAgICBzY3JpcHQgPSBudWxsO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gSWYgc3VwcG9ydGVkLCB3ZSBzaG91bGQgYXR0YWNoIHRvIHRoZSBwcm90b3R5cGUgb2YgZ2xvYmFsLCBzaW5jZSB0aGF0IGlzIHdoZXJlIHNldFRpbWVvdXQgZXQgYWwuIGxpdmUuXG4gICAgdmFyIGF0dGFjaFRvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZihnbG9iYWwpO1xuICAgIGF0dGFjaFRvID0gYXR0YWNoVG8gJiYgYXR0YWNoVG8uc2V0VGltZW91dCA/IGF0dGFjaFRvIDogZ2xvYmFsO1xuXG4gICAgLy8gRG9uJ3QgZ2V0IGZvb2xlZCBieSBlLmcuIGJyb3dzZXJpZnkgZW52aXJvbm1lbnRzLlxuICAgIGlmICh7fS50b1N0cmluZy5jYWxsKGdsb2JhbC5wcm9jZXNzKSA9PT0gXCJbb2JqZWN0IHByb2Nlc3NdXCIpIHtcbiAgICAgICAgLy8gRm9yIE5vZGUuanMgYmVmb3JlIDAuOVxuICAgICAgICBpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChjYW5Vc2VQb3N0TWVzc2FnZSgpKSB7XG4gICAgICAgIC8vIEZvciBub24tSUUxMCBtb2Rlcm4gYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZ2xvYmFsLk1lc3NhZ2VDaGFubmVsKSB7XG4gICAgICAgIC8vIEZvciB3ZWIgd29ya2Vycywgd2hlcmUgc3VwcG9ydGVkXG4gICAgICAgIGluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGRvYyAmJiBcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiIGluIGRvYy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpKSB7XG4gICAgICAgIC8vIEZvciBJRSA24oCTOFxuICAgICAgICBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGb3Igb2xkZXIgYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbigpO1xuICAgIH1cblxuICAgIGF0dGFjaFRvLnNldEltbWVkaWF0ZSA9IHNldEltbWVkaWF0ZTtcbiAgICBhdHRhY2hUby5jbGVhckltbWVkaWF0ZSA9IGNsZWFySW1tZWRpYXRlO1xufSh0eXBlb2Ygc2VsZiA9PT0gXCJ1bmRlZmluZWRcIiA/IHR5cGVvZiBnbG9iYWwgPT09IFwidW5kZWZpbmVkXCIgPyB0aGlzIDogZ2xvYmFsIDogc2VsZikpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2V0aW1tZWRpYXRlL3NldEltbWVkaWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvc2V0aW1tZWRpYXRlL3NldEltbWVkaWF0ZS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgc2NvcGUgPSAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwpIHx8XG4gICAgICAgICAgICAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZikgfHxcbiAgICAgICAgICAgIHdpbmRvdztcbnZhciBhcHBseSA9IEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseTtcblxuLy8gRE9NIEFQSXMsIGZvciBjb21wbGV0ZW5lc3NcblxuZXhwb3J0cy5zZXRUaW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldFRpbWVvdXQsIHNjb3BlLCBhcmd1bWVudHMpLCBjbGVhclRpbWVvdXQpO1xufTtcbmV4cG9ydHMuc2V0SW50ZXJ2YWwgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0SW50ZXJ2YWwsIHNjb3BlLCBhcmd1bWVudHMpLCBjbGVhckludGVydmFsKTtcbn07XG5leHBvcnRzLmNsZWFyVGltZW91dCA9XG5leHBvcnRzLmNsZWFySW50ZXJ2YWwgPSBmdW5jdGlvbih0aW1lb3V0KSB7XG4gIGlmICh0aW1lb3V0KSB7XG4gICAgdGltZW91dC5jbG9zZSgpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBUaW1lb3V0KGlkLCBjbGVhckZuKSB7XG4gIHRoaXMuX2lkID0gaWQ7XG4gIHRoaXMuX2NsZWFyRm4gPSBjbGVhckZuO1xufVxuVGltZW91dC5wcm90b3R5cGUudW5yZWYgPSBUaW1lb3V0LnByb3RvdHlwZS5yZWYgPSBmdW5jdGlvbigpIHt9O1xuVGltZW91dC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fY2xlYXJGbi5jYWxsKHNjb3BlLCB0aGlzLl9pZCk7XG59O1xuXG4vLyBEb2VzIG5vdCBzdGFydCB0aGUgdGltZSwganVzdCBzZXRzIHVwIHRoZSBtZW1iZXJzIG5lZWRlZC5cbmV4cG9ydHMuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSwgbXNlY3MpIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IG1zZWNzO1xufTtcblxuZXhwb3J0cy51bmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IC0xO1xufTtcblxuZXhwb3J0cy5fdW5yZWZBY3RpdmUgPSBleHBvcnRzLmFjdGl2ZSA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuXG4gIHZhciBtc2VjcyA9IGl0ZW0uX2lkbGVUaW1lb3V0O1xuICBpZiAobXNlY3MgPj0gMCkge1xuICAgIGl0ZW0uX2lkbGVUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uIG9uVGltZW91dCgpIHtcbiAgICAgIGlmIChpdGVtLl9vblRpbWVvdXQpXG4gICAgICAgIGl0ZW0uX29uVGltZW91dCgpO1xuICAgIH0sIG1zZWNzKTtcbiAgfVxufTtcblxuLy8gc2V0aW1tZWRpYXRlIGF0dGFjaGVzIGl0c2VsZiB0byB0aGUgZ2xvYmFsIG9iamVjdFxucmVxdWlyZShcInNldGltbWVkaWF0ZVwiKTtcbi8vIE9uIHNvbWUgZXhvdGljIGVudmlyb25tZW50cywgaXQncyBub3QgY2xlYXIgd2hpY2ggb2JqZWN0IGBzZXRpbW1lZGlhdGVgIHdhc1xuLy8gYWJsZSB0byBpbnN0YWxsIG9udG8uICBTZWFyY2ggZWFjaCBwb3NzaWJpbGl0eSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGVcbi8vIGBzZXRpbW1lZGlhdGVgIGxpYnJhcnkuXG5leHBvcnRzLnNldEltbWVkaWF0ZSA9ICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmLnNldEltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsLnNldEltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMgJiYgdGhpcy5zZXRJbW1lZGlhdGUpO1xuZXhwb3J0cy5jbGVhckltbWVkaWF0ZSA9ICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmLmNsZWFySW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbC5jbGVhckltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcyAmJiB0aGlzLmNsZWFySW1tZWRpYXRlKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3RpbWVycy1icm93c2VyaWZ5L21haW4uanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3RpbWVycy1icm93c2VyaWZ5L21haW4uanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoKGUpIHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxyXG5cdGlmKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpXHJcblx0XHRnID0gd2luZG93O1xyXG59XHJcblxyXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXHJcbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXHJcbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2J1aWxkaW4vZ2xvYmFsLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=