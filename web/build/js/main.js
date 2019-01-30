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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/main.js":
/*!***************************!*\
  !*** ./assets/js/main.js ***!
  \***************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

$(document).ready(function () {
	// Header Scroll
	$(window).on("scroll", function () {
		var scroll = $(window).scrollTop();

		if (scroll >= 50) {
			$("#header").addClass("fixed");
		} else {
			$("#header").removeClass("fixed");
		}
	});

	// Waypoints
	$(".work").waypoint(function () {
		$(".work").addClass("animated fadeIn");
	}, {
		offset: "75%"
	});
	$(".download").waypoint(function () {
		$(".download .btn").addClass("animated tada");
	}, {
		offset: "75%"
	});

	// Fancybox
	$(".work-box").fancybox();

	// Flexslider
	$(".flexslider").flexslider({
		animation: "fade",
		directionNav: false
	});

	// Page Scroll
	var sections = $("section");
	nav = $("nav[role=\"navigation\"]");

	$(window).on("scroll", function () {
		var cur_pos = $(this).scrollTop();
		sections.each(function () {
			var top = $(this).offset().top - 76;
			bottom = top + $(this).outerHeight();
			if (cur_pos >= top && cur_pos <= bottom) {
				nav.find("a").removeClass("active");
				nav.find('a[href="#' + $(this).attr('id') + '"]').addClass("active");
			}
		});
	});
	nav.find("a").on("click", function () {
		var $el = $(this);
		id = $el.attr("href");
		$("html, body").animate({
			scrollTop: $(id).offset().top - 75
		}, 500);
		return false;
	});

	// Mobile Navigation
	$(".nav-toggle").on("click", function () {
		$(this).toggleClass("close-nav");
		nav.toggleClass("open");
		return false;
	});
	nav.find("a").on("click", function () {
		$(".nav-toggle").toggleClass("close-nav");
		nav.toggleClass("open");
	});
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjUzZDc1MmZiYTcxYWQ1ZTYxNzEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL21haW4uanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJ3aW5kb3ciLCJvbiIsInNjcm9sbCIsInNjcm9sbFRvcCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJ3YXlwb2ludCIsIm9mZnNldCIsImZhbmN5Ym94IiwiZmxleHNsaWRlciIsImFuaW1hdGlvbiIsImRpcmVjdGlvbk5hdiIsInNlY3Rpb25zIiwibmF2IiwiY3VyX3BvcyIsImVhY2giLCJ0b3AiLCJib3R0b20iLCJvdXRlckhlaWdodCIsImZpbmQiLCJhdHRyIiwiJGVsIiwiaWQiLCJhbmltYXRlIiwidG9nZ2xlQ2xhc3MiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzdEQUEsRUFBRUMsUUFBRixFQUFZQyxLQUFaLENBQWtCLFlBQVc7QUFDNUI7QUFDQUYsR0FBRUcsTUFBRixFQUFVQyxFQUFWLENBQWEsUUFBYixFQUF1QixZQUFXO0FBQ2pDLE1BQUlDLFNBQVNMLEVBQUVHLE1BQUYsRUFBVUcsU0FBVixFQUFiOztBQUVBLE1BQUlELFVBQVUsRUFBZCxFQUFrQjtBQUNqQkwsS0FBRSxTQUFGLEVBQWFPLFFBQWIsQ0FBc0IsT0FBdEI7QUFDQSxHQUZELE1BRU87QUFDTlAsS0FBRSxTQUFGLEVBQWFRLFdBQWIsQ0FBeUIsT0FBekI7QUFDQTtBQUNELEVBUkQ7O0FBVUE7QUFDQVIsR0FBRSxPQUFGLEVBQVdTLFFBQVgsQ0FBb0IsWUFBVztBQUM5QlQsSUFBRSxPQUFGLEVBQVdPLFFBQVgsQ0FBb0IsaUJBQXBCO0FBQ0EsRUFGRCxFQUVHO0FBQ0ZHLFVBQVE7QUFETixFQUZIO0FBS0FWLEdBQUUsV0FBRixFQUFlUyxRQUFmLENBQXdCLFlBQVc7QUFDbENULElBQUUsZ0JBQUYsRUFBb0JPLFFBQXBCLENBQTZCLGVBQTdCO0FBQ0EsRUFGRCxFQUVHO0FBQ0ZHLFVBQVE7QUFETixFQUZIOztBQU1BO0FBQ0FWLEdBQUUsV0FBRixFQUFlVyxRQUFmOztBQUVBO0FBQ0FYLEdBQUUsYUFBRixFQUFpQlksVUFBakIsQ0FBNEI7QUFDM0JDLGFBQVcsTUFEZ0I7QUFFM0JDLGdCQUFjO0FBRmEsRUFBNUI7O0FBS0E7QUFDQSxLQUFJQyxXQUFXZixFQUFFLFNBQUYsQ0FBZjtBQUNDZ0IsT0FBTWhCLEVBQUUsMEJBQUYsQ0FBTjs7QUFFREEsR0FBRUcsTUFBRixFQUFVQyxFQUFWLENBQWEsUUFBYixFQUF1QixZQUFZO0FBQ2xDLE1BQUlhLFVBQVVqQixFQUFFLElBQUYsRUFBUU0sU0FBUixFQUFkO0FBQ0FTLFdBQVNHLElBQVQsQ0FBYyxZQUFXO0FBQ3JCLE9BQUlDLE1BQU1uQixFQUFFLElBQUYsRUFBUVUsTUFBUixHQUFpQlMsR0FBakIsR0FBdUIsRUFBakM7QUFDSUMsWUFBU0QsTUFBTW5CLEVBQUUsSUFBRixFQUFRcUIsV0FBUixFQUFmO0FBQ0osT0FBSUosV0FBV0UsR0FBWCxJQUFrQkYsV0FBV0csTUFBakMsRUFBeUM7QUFDdENKLFFBQUlNLElBQUosQ0FBUyxHQUFULEVBQWNkLFdBQWQsQ0FBMEIsUUFBMUI7QUFDQVEsUUFBSU0sSUFBSixDQUFTLGNBQVl0QixFQUFFLElBQUYsRUFBUXVCLElBQVIsQ0FBYSxJQUFiLENBQVosR0FBK0IsSUFBeEMsRUFBOENoQixRQUE5QyxDQUF1RCxRQUF2RDtBQUNGO0FBQ0osR0FQRDtBQVFBLEVBVkQ7QUFXQVMsS0FBSU0sSUFBSixDQUFTLEdBQVQsRUFBY2xCLEVBQWQsQ0FBaUIsT0FBakIsRUFBMEIsWUFBWTtBQUNyQyxNQUFJb0IsTUFBTXhCLEVBQUUsSUFBRixDQUFWO0FBQ0N5QixPQUFLRCxJQUFJRCxJQUFKLENBQVMsTUFBVCxDQUFMO0FBQ0R2QixJQUFFLFlBQUYsRUFBZ0IwQixPQUFoQixDQUF3QjtBQUN2QnBCLGNBQVdOLEVBQUV5QixFQUFGLEVBQU1mLE1BQU4sR0FBZVMsR0FBZixHQUFxQjtBQURULEdBQXhCLEVBRUcsR0FGSDtBQUdBLFNBQU8sS0FBUDtBQUNBLEVBUEQ7O0FBU0E7QUFDQW5CLEdBQUUsYUFBRixFQUFpQkksRUFBakIsQ0FBb0IsT0FBcEIsRUFBNkIsWUFBVztBQUN2Q0osSUFBRSxJQUFGLEVBQVEyQixXQUFSLENBQW9CLFdBQXBCO0FBQ0FYLE1BQUlXLFdBQUosQ0FBZ0IsTUFBaEI7QUFDQSxTQUFPLEtBQVA7QUFDQSxFQUpEO0FBS0FYLEtBQUlNLElBQUosQ0FBUyxHQUFULEVBQWNsQixFQUFkLENBQWlCLE9BQWpCLEVBQTBCLFlBQVc7QUFDcENKLElBQUUsYUFBRixFQUFpQjJCLFdBQWpCLENBQTZCLFdBQTdCO0FBQ0FYLE1BQUlXLFdBQUosQ0FBZ0IsTUFBaEI7QUFDQSxFQUhEO0FBSUEsQ0FuRUQsRSIsImZpbGUiOiJqcy9tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2J1aWxkL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hc3NldHMvanMvbWFpbi5qc1wiKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2NTNkNzUyZmJhNzFhZDVlNjE3MSIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXHQvLyBIZWFkZXIgU2Nyb2xsXG5cdCQod2luZG93KS5vbihcInNjcm9sbFwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgc2Nyb2xsID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXG5cdFx0aWYgKHNjcm9sbCA+PSA1MCkge1xuXHRcdFx0JChcIiNoZWFkZXJcIikuYWRkQ2xhc3MoXCJmaXhlZFwiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JChcIiNoZWFkZXJcIikucmVtb3ZlQ2xhc3MoXCJmaXhlZFwiKTtcblx0XHR9XG5cdH0pO1xuXG5cdC8vIFdheXBvaW50c1xuXHQkKFwiLndvcmtcIikud2F5cG9pbnQoZnVuY3Rpb24oKSB7XG5cdFx0JChcIi53b3JrXCIpLmFkZENsYXNzKFwiYW5pbWF0ZWQgZmFkZUluXCIpO1xuXHR9LCB7XG5cdFx0b2Zmc2V0OiBcIjc1JVwiXG5cdH0pO1xuXHQkKFwiLmRvd25sb2FkXCIpLndheXBvaW50KGZ1bmN0aW9uKCkge1xuXHRcdCQoXCIuZG93bmxvYWQgLmJ0blwiKS5hZGRDbGFzcyhcImFuaW1hdGVkIHRhZGFcIik7XG5cdH0sIHtcblx0XHRvZmZzZXQ6IFwiNzUlXCJcblx0fSk7XG5cblx0Ly8gRmFuY3lib3hcblx0JChcIi53b3JrLWJveFwiKS5mYW5jeWJveCgpO1xuXG5cdC8vIEZsZXhzbGlkZXJcblx0JChcIi5mbGV4c2xpZGVyXCIpLmZsZXhzbGlkZXIoe1xuXHRcdGFuaW1hdGlvbjogXCJmYWRlXCIsXG5cdFx0ZGlyZWN0aW9uTmF2OiBmYWxzZSxcblx0fSk7XG5cblx0Ly8gUGFnZSBTY3JvbGxcblx0dmFyIHNlY3Rpb25zID0gJChcInNlY3Rpb25cIik7XG5cdFx0bmF2ID0gJChcIm5hdltyb2xlPVxcXCJuYXZpZ2F0aW9uXFxcIl1cIik7XG5cblx0JCh3aW5kb3cpLm9uKFwic2Nyb2xsXCIsIGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgY3VyX3BvcyA9ICQodGhpcykuc2Nyb2xsVG9wKCk7XG5cdFx0c2VjdGlvbnMuZWFjaChmdW5jdGlvbigpIHtcblx0ICAgIFx0dmFyIHRvcCA9ICQodGhpcykub2Zmc2V0KCkudG9wIC0gNzY7XG5cdCAgICAgICAgXHRib3R0b20gPSB0b3AgKyAkKHRoaXMpLm91dGVySGVpZ2h0KCk7XG5cdCAgICBcdGlmIChjdXJfcG9zID49IHRvcCAmJiBjdXJfcG9zIDw9IGJvdHRvbSkge1xuXHQgICAgICBcdFx0bmF2LmZpbmQoXCJhXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuXHQgICAgICBcdFx0bmF2LmZpbmQoJ2FbaHJlZj1cIiMnKyQodGhpcykuYXR0cignaWQnKSsnXCJdJykuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG5cdCAgICBcdH1cblx0XHR9KTtcblx0fSk7XG5cdG5hdi5maW5kKFwiYVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgJGVsID0gJCh0aGlzKTtcblx0XHRcdGlkID0gJGVsLmF0dHIoXCJocmVmXCIpO1xuXHRcdCQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoe1xuXHRcdFx0c2Nyb2xsVG9wOiAkKGlkKS5vZmZzZXQoKS50b3AgLSA3NVxuXHRcdH0sIDUwMCk7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9KTtcblxuXHQvLyBNb2JpbGUgTmF2aWdhdGlvblxuXHQkKFwiLm5hdi10b2dnbGVcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcblx0XHQkKHRoaXMpLnRvZ2dsZUNsYXNzKFwiY2xvc2UtbmF2XCIpO1xuXHRcdG5hdi50b2dnbGVDbGFzcyhcIm9wZW5cIik7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9KTtcdFxuXHRuYXYuZmluZChcImFcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcblx0XHQkKFwiLm5hdi10b2dnbGVcIikudG9nZ2xlQ2xhc3MoXCJjbG9zZS1uYXZcIik7XG5cdFx0bmF2LnRvZ2dsZUNsYXNzKFwib3BlblwiKTtcblx0fSk7XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvbWFpbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=