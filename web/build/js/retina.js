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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/retina.min.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/retina.min.js":
/*!*********************************!*\
  !*** ./assets/js/retina.min.js ***!
  \*********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Retina.js v1.3.0
 *
 * Copyright 2014 Imulus, LLC
 * Released under the MIT license
 *
 * Retina.js is an open source script that makes it easy to serve
 * high-resolution images to devices with retina displays.
 */
!function () {
  function a() {}function b(a) {
    return f.retinaImageSuffix + a;
  }function c(a, c) {
    if (this.path = a || "", "undefined" != typeof c && null !== c) this.at_2x_path = c, this.perform_check = !1;else {
      if (void 0 !== document.createElement) {
        var d = document.createElement("a");d.href = this.path, d.pathname = d.pathname.replace(g, b), this.at_2x_path = d.href;
      } else {
        var e = this.path.split("?");e[0] = e[0].replace(g, b), this.at_2x_path = e.join("?");
      }this.perform_check = !0;
    }
  }function d(a) {
    this.el = a, this.path = new c(this.el.getAttribute("src"), this.el.getAttribute("data-at2x"));var b = this;this.path.check_2x_variant(function (a) {
      a && b.swap();
    });
  }var e =  false ? window : exports,
      f = { retinaImageSuffix: "@2x", check_mime_type: !0, force_original_dimensions: !0 };e.Retina = a, a.configure = function (a) {
    null === a && (a = {});for (var b in a) {
      a.hasOwnProperty(b) && (f[b] = a[b]);
    }
  }, a.init = function (a) {
    null === a && (a = e);var b = a.onload || function () {};a.onload = function () {
      var a,
          c,
          e = document.getElementsByTagName("img"),
          f = [];for (a = 0; a < e.length; a += 1) {
        c = e[a], c.getAttributeNode("data-no-retina") || f.push(new d(c));
      }b();
    };
  }, a.isRetina = function () {
    var a = "(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";return e.devicePixelRatio > 1 ? !0 : e.matchMedia && e.matchMedia(a).matches ? !0 : !1;
  };var g = /\.\w+$/;e.RetinaImagePath = c, c.confirmed_paths = [], c.prototype.is_external = function () {
    return !(!this.path.match(/^https?\:/i) || this.path.match("//" + document.domain));
  }, c.prototype.check_2x_variant = function (a) {
    var b,
        d = this;return this.is_external() ? a(!1) : this.perform_check || "undefined" == typeof this.at_2x_path || null === this.at_2x_path ? this.at_2x_path in c.confirmed_paths ? a(!0) : (b = new XMLHttpRequest(), b.open("HEAD", this.at_2x_path), b.onreadystatechange = function () {
      if (4 !== b.readyState) return a(!1);if (b.status >= 200 && b.status <= 399) {
        if (f.check_mime_type) {
          var e = b.getResponseHeader("Content-Type");if (null === e || !e.match(/^image/i)) return a(!1);
        }return c.confirmed_paths.push(d.at_2x_path), a(!0);
      }return a(!1);
    }, b.send(), void 0) : a(!0);
  }, e.RetinaImage = d, d.prototype.swap = function (a) {
    function b() {
      c.el.complete ? (f.force_original_dimensions && (c.el.setAttribute("width", c.el.offsetWidth), c.el.setAttribute("height", c.el.offsetHeight)), c.el.setAttribute("src", a)) : setTimeout(b, 5);
    }"undefined" == typeof a && (a = this.path.at_2x_path);var c = this;b();
  }, a.isRetina() && a.init(e);
}();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjUzZDc1MmZiYTcxYWQ1ZTYxNzEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JldGluYS5taW4uanMiXSwibmFtZXMiOlsiYSIsImIiLCJmIiwicmV0aW5hSW1hZ2VTdWZmaXgiLCJjIiwicGF0aCIsImF0XzJ4X3BhdGgiLCJwZXJmb3JtX2NoZWNrIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiZCIsImhyZWYiLCJwYXRobmFtZSIsInJlcGxhY2UiLCJnIiwiZSIsInNwbGl0Iiwiam9pbiIsImVsIiwiZ2V0QXR0cmlidXRlIiwiY2hlY2tfMnhfdmFyaWFudCIsInN3YXAiLCJ3aW5kb3ciLCJleHBvcnRzIiwiY2hlY2tfbWltZV90eXBlIiwiZm9yY2Vfb3JpZ2luYWxfZGltZW5zaW9ucyIsIlJldGluYSIsImNvbmZpZ3VyZSIsImhhc093blByb3BlcnR5IiwiaW5pdCIsIm9ubG9hZCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwibGVuZ3RoIiwiZ2V0QXR0cmlidXRlTm9kZSIsInB1c2giLCJpc1JldGluYSIsImRldmljZVBpeGVsUmF0aW8iLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsIlJldGluYUltYWdlUGF0aCIsImNvbmZpcm1lZF9wYXRocyIsInByb3RvdHlwZSIsImlzX2V4dGVybmFsIiwibWF0Y2giLCJkb21haW4iLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwic3RhdHVzIiwiZ2V0UmVzcG9uc2VIZWFkZXIiLCJzZW5kIiwiUmV0aW5hSW1hZ2UiLCJjb21wbGV0ZSIsInNldEF0dHJpYnV0ZSIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0Iiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFF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QUFjMUMsQ0FBeHRCLEVBQTB0QkEsRUFBRStCLFNBQUYsQ0FBWXBCLElBQVosR0FBaUIsVUFBU3JCLENBQVQsRUFBVztBQUFDLGFBQVNDLENBQVQsR0FBWTtBQUFDRyxRQUFFYyxFQUFGLENBQUttQyxRQUFMLElBQWVuRCxFQUFFdUIseUJBQUYsS0FBOEJyQixFQUFFYyxFQUFGLENBQUtvQyxZQUFMLENBQWtCLE9BQWxCLEVBQTBCbEQsRUFBRWMsRUFBRixDQUFLcUMsV0FBL0IsR0FBNENuRCxFQUFFYyxFQUFGLENBQUtvQyxZQUFMLENBQWtCLFFBQWxCLEVBQTJCbEQsRUFBRWMsRUFBRixDQUFLc0MsWUFBaEMsQ0FBMUUsR0FBeUhwRCxFQUFFYyxFQUFGLENBQUtvQyxZQUFMLENBQWtCLEtBQWxCLEVBQXdCdEQsQ0FBeEIsQ0FBeEksSUFBb0t5RCxXQUFXeEQsQ0FBWCxFQUFhLENBQWIsQ0FBcEs7QUFBb0wsb0JBQWEsT0FBT0QsQ0FBcEIsS0FBd0JBLElBQUUsS0FBS0ssSUFBTCxDQUFVQyxVQUFwQyxFQUFnRCxJQUFJRixJQUFFLElBQU4sQ0FBV0g7QUFBSSxHQUF2L0IsRUFBdy9CRCxFQUFFbUMsUUFBRixNQUFjbkMsRUFBRTZCLElBQUYsQ0FBT2QsQ0FBUCxDQUF0Z0M7QUFBZ2hDLENBQTV5RSxFQUFELEMiLCJmaWxlIjoianMvcmV0aW5hLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2J1aWxkL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hc3NldHMvanMvcmV0aW5hLm1pbi5qc1wiKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2NTNkNzUyZmJhNzFhZDVlNjE3MSIsIi8qIVxuICogUmV0aW5hLmpzIHYxLjMuMFxuICpcbiAqIENvcHlyaWdodCAyMDE0IEltdWx1cywgTExDXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqXG4gKiBSZXRpbmEuanMgaXMgYW4gb3BlbiBzb3VyY2Ugc2NyaXB0IHRoYXQgbWFrZXMgaXQgZWFzeSB0byBzZXJ2ZVxuICogaGlnaC1yZXNvbHV0aW9uIGltYWdlcyB0byBkZXZpY2VzIHdpdGggcmV0aW5hIGRpc3BsYXlzLlxuICovXG4hZnVuY3Rpb24oKXtmdW5jdGlvbiBhKCl7fWZ1bmN0aW9uIGIoYSl7cmV0dXJuIGYucmV0aW5hSW1hZ2VTdWZmaXgrYX1mdW5jdGlvbiBjKGEsYyl7aWYodGhpcy5wYXRoPWF8fFwiXCIsXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGMmJm51bGwhPT1jKXRoaXMuYXRfMnhfcGF0aD1jLHRoaXMucGVyZm9ybV9jaGVjaz0hMTtlbHNle2lmKHZvaWQgMCE9PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpe3ZhciBkPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2QuaHJlZj10aGlzLnBhdGgsZC5wYXRobmFtZT1kLnBhdGhuYW1lLnJlcGxhY2UoZyxiKSx0aGlzLmF0XzJ4X3BhdGg9ZC5ocmVmfWVsc2V7dmFyIGU9dGhpcy5wYXRoLnNwbGl0KFwiP1wiKTtlWzBdPWVbMF0ucmVwbGFjZShnLGIpLHRoaXMuYXRfMnhfcGF0aD1lLmpvaW4oXCI/XCIpfXRoaXMucGVyZm9ybV9jaGVjaz0hMH19ZnVuY3Rpb24gZChhKXt0aGlzLmVsPWEsdGhpcy5wYXRoPW5ldyBjKHRoaXMuZWwuZ2V0QXR0cmlidXRlKFwic3JjXCIpLHRoaXMuZWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1hdDJ4XCIpKTt2YXIgYj10aGlzO3RoaXMucGF0aC5jaGVja18yeF92YXJpYW50KGZ1bmN0aW9uKGEpe2EmJmIuc3dhcCgpfSl9dmFyIGU9XCJ1bmRlZmluZWRcIj09dHlwZW9mIGV4cG9ydHM/d2luZG93OmV4cG9ydHMsZj17cmV0aW5hSW1hZ2VTdWZmaXg6XCJAMnhcIixjaGVja19taW1lX3R5cGU6ITAsZm9yY2Vfb3JpZ2luYWxfZGltZW5zaW9uczohMH07ZS5SZXRpbmE9YSxhLmNvbmZpZ3VyZT1mdW5jdGlvbihhKXtudWxsPT09YSYmKGE9e30pO2Zvcih2YXIgYiBpbiBhKWEuaGFzT3duUHJvcGVydHkoYikmJihmW2JdPWFbYl0pfSxhLmluaXQ9ZnVuY3Rpb24oYSl7bnVsbD09PWEmJihhPWUpO3ZhciBiPWEub25sb2FkfHxmdW5jdGlvbigpe307YS5vbmxvYWQ9ZnVuY3Rpb24oKXt2YXIgYSxjLGU9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbWdcIiksZj1bXTtmb3IoYT0wO2E8ZS5sZW5ndGg7YSs9MSljPWVbYV0sYy5nZXRBdHRyaWJ1dGVOb2RlKFwiZGF0YS1uby1yZXRpbmFcIil8fGYucHVzaChuZXcgZChjKSk7YigpfX0sYS5pc1JldGluYT1mdW5jdGlvbigpe3ZhciBhPVwiKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMS41KSwgKG1pbi0tbW96LWRldmljZS1waXhlbC1yYXRpbzogMS41KSwgKC1vLW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDMvMiksIChtaW4tcmVzb2x1dGlvbjogMS41ZHBweClcIjtyZXR1cm4gZS5kZXZpY2VQaXhlbFJhdGlvPjE/ITA6ZS5tYXRjaE1lZGlhJiZlLm1hdGNoTWVkaWEoYSkubWF0Y2hlcz8hMDohMX07dmFyIGc9L1xcLlxcdyskLztlLlJldGluYUltYWdlUGF0aD1jLGMuY29uZmlybWVkX3BhdGhzPVtdLGMucHJvdG90eXBlLmlzX2V4dGVybmFsPWZ1bmN0aW9uKCl7cmV0dXJuISghdGhpcy5wYXRoLm1hdGNoKC9eaHR0cHM/XFw6L2kpfHx0aGlzLnBhdGgubWF0Y2goXCIvL1wiK2RvY3VtZW50LmRvbWFpbikpfSxjLnByb3RvdHlwZS5jaGVja18yeF92YXJpYW50PWZ1bmN0aW9uKGEpe3ZhciBiLGQ9dGhpcztyZXR1cm4gdGhpcy5pc19leHRlcm5hbCgpP2EoITEpOnRoaXMucGVyZm9ybV9jaGVja3x8XCJ1bmRlZmluZWRcIj09dHlwZW9mIHRoaXMuYXRfMnhfcGF0aHx8bnVsbD09PXRoaXMuYXRfMnhfcGF0aD90aGlzLmF0XzJ4X3BhdGggaW4gYy5jb25maXJtZWRfcGF0aHM/YSghMCk6KGI9bmV3IFhNTEh0dHBSZXF1ZXN0LGIub3BlbihcIkhFQURcIix0aGlzLmF0XzJ4X3BhdGgpLGIub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7aWYoNCE9PWIucmVhZHlTdGF0ZSlyZXR1cm4gYSghMSk7aWYoYi5zdGF0dXM+PTIwMCYmYi5zdGF0dXM8PTM5OSl7aWYoZi5jaGVja19taW1lX3R5cGUpe3ZhciBlPWIuZ2V0UmVzcG9uc2VIZWFkZXIoXCJDb250ZW50LVR5cGVcIik7aWYobnVsbD09PWV8fCFlLm1hdGNoKC9eaW1hZ2UvaSkpcmV0dXJuIGEoITEpfXJldHVybiBjLmNvbmZpcm1lZF9wYXRocy5wdXNoKGQuYXRfMnhfcGF0aCksYSghMCl9cmV0dXJuIGEoITEpfSxiLnNlbmQoKSx2b2lkIDApOmEoITApfSxlLlJldGluYUltYWdlPWQsZC5wcm90b3R5cGUuc3dhcD1mdW5jdGlvbihhKXtmdW5jdGlvbiBiKCl7Yy5lbC5jb21wbGV0ZT8oZi5mb3JjZV9vcmlnaW5hbF9kaW1lbnNpb25zJiYoYy5lbC5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLGMuZWwub2Zmc2V0V2lkdGgpLGMuZWwuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsYy5lbC5vZmZzZXRIZWlnaHQpKSxjLmVsLnNldEF0dHJpYnV0ZShcInNyY1wiLGEpKTpzZXRUaW1lb3V0KGIsNSl9XCJ1bmRlZmluZWRcIj09dHlwZW9mIGEmJihhPXRoaXMucGF0aC5hdF8yeF9wYXRoKTt2YXIgYz10aGlzO2IoKX0sYS5pc1JldGluYSgpJiZhLmluaXQoZSl9KCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL3JldGluYS5taW4uanMiXSwic291cmNlUm9vdCI6IiJ9