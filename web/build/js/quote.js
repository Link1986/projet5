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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/quote.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/quote.js":
/*!****************************!*\
  !*** ./assets/js/quote.js ***!
  \****************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

var Generator = {

    getRandom: function getRandom() {

        var quotes = [{
            content: "Exige beaucoup de toi-même et attends peu des autres. Ainsi beaucoup d'ennuis te seront épargnés.",
            author: "Confucius"
        }, {
            content: "La vie est un mystère qu'il faut vivre, et non un problème à résoudre.",
            author: "Gandhi"
        }, {
            content: "Tout obstacle renforce la détermination. Celui qui s'est fixé un but n'en change pas.",
            author: "Léonard De Vinci"
        }, {
            content: "La musique donne une âme à nos coeurs et des ailes à la pensée.",
            author: "Platon"
        }, {
            content: "Que la force me soit donnée de supporter ce qui ne peut être changé et le courage de changer ce qui peut l'être mais aussi la sagesse de distinguer l'un de l'autre.",
            author: "Marc Aurèle"
        }, {
            content: "Ce que je sais, c’est que je ne sais rien.",
            author: "Socrate"
        }, {
            content: "Le vrai signe de l’intelligence, ce n’est pas la connaissance, mais l’imagination.",
            author: "Albert Einstein"
        }, {
            content: "L’homme est un loup pour l’homme",
            author: "Thomas Hobbes"
        }, {
            content: "La connaissance de l’homme ne peut pas s’étendre au-delà de son expérience propre",
            author: "John Locke"
        }, {
            content: "N’attends pas que les événements arrivent comme tu le souhaites ; décide de vouloir ce qui arrive et tu seras heureux",
            author: "Epictète"
        }, {
            content: "L'ennui dans ce monde, c'est que les idiots sont sûrs d'eux et les gens sensés pleins de doutes.",
            author: "Bertrand Russell"
        }, {
            content: "Il n'y a point de bonheur sans courage, ni de vertu sans combat.",
            author: "Jean-Jacques Rousseau"
        }, {
            content: "Puisse chacun avoir la chance de trouver justement la conception de la vie qui lui permet de réaliser son maximum de bonheur.",
            author: "Friedrich Nietzsche"
        }, {
            content: "Toute méchanceté a sa source dans la faiblesse.",
            author: "Sénèque"
        }, {
            content: "L'homme devrait mettre autant d'ardeur à simplifier sa vie qu'il en met à la compliquer.",
            author: "Henri Bergson"
        }];

        var getQuote = document.getElementById("quote");
        var getAuthor = document.getElementById("author");
        var button = document.getElementById("button");

        var randNum = Math.floor(Math.random() * quotes.length);

        var displayedQuote = quotes[randNum];

        getQuote.innerText = "\"" + displayedQuote.content + "\"";
        getAuthor.innerText = displayedQuote.author;
    }

};

document.getElementById("button").addEventListener("click", function () {
    Generator.getRandom();
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjUzZDc1MmZiYTcxYWQ1ZTYxNzEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3F1b3RlLmpzIl0sIm5hbWVzIjpbIkdlbmVyYXRvciIsImdldFJhbmRvbSIsInF1b3RlcyIsImNvbnRlbnQiLCJhdXRob3IiLCJnZXRRdW90ZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRBdXRob3IiLCJidXR0b24iLCJyYW5kTnVtIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwiZGlzcGxheWVkUXVvdGUiLCJpbm5lclRleHQiLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM3REEsSUFBTUEsWUFBWTs7QUFFZEMsZUFBVyxxQkFBVzs7QUFFbEIsWUFBSUMsU0FBUyxDQUNUO0FBQ0lDLHFCQUFTLG1HQURiO0FBRUlDLG9CQUFRO0FBRlosU0FEUyxFQU1UO0FBQ0lELHFCQUFTLHdFQURiO0FBRUlDLG9CQUFRO0FBRlosU0FOUyxFQVdUO0FBQ0lELHFCQUFTLHVGQURiO0FBRUlDLG9CQUFRO0FBRlosU0FYUyxFQWdCVDtBQUNJRCxxQkFBUyxpRUFEYjtBQUVJQyxvQkFBUTtBQUZaLFNBaEJTLEVBcUJUO0FBQ0lELHFCQUFRLHNLQURaO0FBRUlDLG9CQUFRO0FBRlosU0FyQlMsRUEwQlQ7QUFDSUQscUJBQVEsNENBRFo7QUFFSUMsb0JBQVE7QUFGWixTQTFCUyxFQStCVDtBQUNJRCxxQkFBUSxvRkFEWjtBQUVJQyxvQkFBUTtBQUZaLFNBL0JTLEVBb0NUO0FBQ0lELHFCQUFRLGtDQURaO0FBRUlDLG9CQUFRO0FBRlosU0FwQ1MsRUF5Q1Q7QUFDSUQscUJBQVEsbUZBRFo7QUFFSUMsb0JBQVE7QUFGWixTQXpDUyxFQThDVDtBQUNJRCxxQkFBUSx1SEFEWjtBQUVJQyxvQkFBUTtBQUZaLFNBOUNTLEVBbURUO0FBQ0lELHFCQUFRLGtHQURaO0FBRUlDLG9CQUFRO0FBRlosU0FuRFMsRUF3RFQ7QUFDSUQscUJBQVEsa0VBRFo7QUFFSUMsb0JBQVE7QUFGWixTQXhEUyxFQTZEVDtBQUNJRCxxQkFBUSwrSEFEWjtBQUVJQyxvQkFBUTtBQUZaLFNBN0RTLEVBa0VUO0FBQ0lELHFCQUFRLGlEQURaO0FBRUlDLG9CQUFRO0FBRlosU0FsRVMsRUF1RVQ7QUFDSUQscUJBQVEsMEZBRFo7QUFFSUMsb0JBQVE7QUFGWixTQXZFUyxDQUFiOztBQThFQSxZQUFNQyxXQUFXQyxTQUFTQyxjQUFULENBQXdCLE9BQXhCLENBQWpCO0FBQ0EsWUFBTUMsWUFBWUYsU0FBU0MsY0FBVCxDQUF3QixRQUF4QixDQUFsQjtBQUNBLFlBQU1FLFNBQVNILFNBQVNDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBZjs7QUFFQSxZQUFNRyxVQUFVQyxLQUFLQyxLQUFMLENBQVdELEtBQUtFLE1BQUwsS0FBZ0JYLE9BQU9ZLE1BQWxDLENBQWhCOztBQUVBLFlBQU1DLGlCQUFpQmIsT0FBT1EsT0FBUCxDQUF2Qjs7QUFFQUwsaUJBQVNXLFNBQVQsR0FBcUIsT0FBT0QsZUFBZVosT0FBdEIsR0FBZ0MsSUFBckQ7QUFDQUssa0JBQVVRLFNBQVYsR0FBc0JELGVBQWVYLE1BQXJDO0FBRUg7O0FBN0ZhLENBQWxCOztBQWlHQUUsU0FBU0MsY0FBVCxDQUF3QixRQUF4QixFQUFrQ1UsZ0JBQWxDLENBQW1ELE9BQW5ELEVBQTRELFlBQVU7QUFDbEVqQixjQUFVQyxTQUFWO0FBQ0gsQ0FGRCxFIiwiZmlsZSI6ImpzL3F1b3RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2J1aWxkL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hc3NldHMvanMvcXVvdGUuanNcIik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNjUzZDc1MmZiYTcxYWQ1ZTYxNzEiLCJjb25zdCBHZW5lcmF0b3IgPSB7XHJcblxyXG4gICAgZ2V0UmFuZG9tOiBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgbGV0IHF1b3RlcyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJFeGlnZSBiZWF1Y291cCBkZSB0b2ktbcOqbWUgZXQgYXR0ZW5kcyBwZXUgZGVzIGF1dHJlcy4gQWluc2kgYmVhdWNvdXAgZCdlbm51aXMgdGUgc2Vyb250IMOpcGFyZ27DqXMuXCIsXHJcbiAgICAgICAgICAgICAgICBhdXRob3I6IFwiQ29uZnVjaXVzXCJcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiTGEgdmllIGVzdCB1biBteXN0w6hyZSBxdSdpbCBmYXV0IHZpdnJlLCBldCBub24gdW4gcHJvYmzDqG1lIMOgIHLDqXNvdWRyZS5cIixcclxuICAgICAgICAgICAgICAgIGF1dGhvcjogXCJHYW5kaGlcIlxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJUb3V0IG9ic3RhY2xlIHJlbmZvcmNlIGxhIGTDqXRlcm1pbmF0aW9uLiBDZWx1aSBxdWkgcydlc3QgZml4w6kgdW4gYnV0IG4nZW4gY2hhbmdlIHBhcy5cIixcclxuICAgICAgICAgICAgICAgIGF1dGhvcjogXCJMw6lvbmFyZCBEZSBWaW5jaVwiXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIkxhIG11c2lxdWUgZG9ubmUgdW5lIMOibWUgw6Agbm9zIGNvZXVycyBldCBkZXMgYWlsZXMgw6AgbGEgcGVuc8OpZS5cIixcclxuICAgICAgICAgICAgICAgIGF1dGhvcjogXCJQbGF0b25cIlxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDpcIlF1ZSBsYSBmb3JjZSBtZSBzb2l0IGRvbm7DqWUgZGUgc3VwcG9ydGVyIGNlIHF1aSBuZSBwZXV0IMOqdHJlIGNoYW5nw6kgZXQgbGUgY291cmFnZSBkZSBjaGFuZ2VyIGNlIHF1aSBwZXV0IGwnw6p0cmUgbWFpcyBhdXNzaSBsYSBzYWdlc3NlIGRlIGRpc3Rpbmd1ZXIgbCd1biBkZSBsJ2F1dHJlLlwiLFxyXG4gICAgICAgICAgICAgICAgYXV0aG9yOiBcIk1hcmMgQXVyw6hsZVwiXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OlwiQ2UgcXVlIGplIHNhaXMsIGPigJllc3QgcXVlIGplIG5lIHNhaXMgcmllbi5cIixcclxuICAgICAgICAgICAgICAgIGF1dGhvcjogXCJTb2NyYXRlXCJcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6XCJMZSB2cmFpIHNpZ25lIGRlIGzigJlpbnRlbGxpZ2VuY2UsIGNlIG7igJllc3QgcGFzIGxhIGNvbm5haXNzYW5jZSwgbWFpcyBs4oCZaW1hZ2luYXRpb24uXCIsXHJcbiAgICAgICAgICAgICAgICBhdXRob3I6IFwiQWxiZXJ0IEVpbnN0ZWluXCJcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6XCJM4oCZaG9tbWUgZXN0IHVuIGxvdXAgcG91ciBs4oCZaG9tbWVcIixcclxuICAgICAgICAgICAgICAgIGF1dGhvcjogXCJUaG9tYXMgSG9iYmVzXCJcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6XCJMYSBjb25uYWlzc2FuY2UgZGUgbOKAmWhvbW1lIG5lIHBldXQgcGFzIHPigJnDqXRlbmRyZSBhdS1kZWzDoCBkZSBzb24gZXhww6lyaWVuY2UgcHJvcHJlXCIsXHJcbiAgICAgICAgICAgICAgICBhdXRob3I6IFwiSm9obiBMb2NrZVwiXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OlwiTuKAmWF0dGVuZHMgcGFzIHF1ZSBsZXMgw6l2w6luZW1lbnRzIGFycml2ZW50IGNvbW1lIHR1IGxlIHNvdWhhaXRlcyA7IGTDqWNpZGUgZGUgdm91bG9pciBjZSBxdWkgYXJyaXZlIGV0IHR1IHNlcmFzIGhldXJldXhcIixcclxuICAgICAgICAgICAgICAgIGF1dGhvcjogXCJFcGljdMOodGVcIlxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDpcIkwnZW5udWkgZGFucyBjZSBtb25kZSwgYydlc3QgcXVlIGxlcyBpZGlvdHMgc29udCBzw7tycyBkJ2V1eCBldCBsZXMgZ2VucyBzZW5zw6lzIHBsZWlucyBkZSBkb3V0ZXMuXCIsXHJcbiAgICAgICAgICAgICAgICBhdXRob3I6IFwiQmVydHJhbmQgUnVzc2VsbFwiXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OlwiSWwgbid5IGEgcG9pbnQgZGUgYm9uaGV1ciBzYW5zIGNvdXJhZ2UsIG5pIGRlIHZlcnR1IHNhbnMgY29tYmF0LlwiLFxyXG4gICAgICAgICAgICAgICAgYXV0aG9yOiBcIkplYW4tSmFjcXVlcyBSb3Vzc2VhdVwiXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OlwiUHVpc3NlIGNoYWN1biBhdm9pciBsYSBjaGFuY2UgZGUgdHJvdXZlciBqdXN0ZW1lbnQgbGEgY29uY2VwdGlvbiBkZSBsYSB2aWUgcXVpIGx1aSBwZXJtZXQgZGUgcsOpYWxpc2VyIHNvbiBtYXhpbXVtIGRlIGJvbmhldXIuXCIsXHJcbiAgICAgICAgICAgICAgICBhdXRob3I6IFwiRnJpZWRyaWNoIE5pZXR6c2NoZVwiXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OlwiVG91dGUgbcOpY2hhbmNldMOpIGEgc2Egc291cmNlIGRhbnMgbGEgZmFpYmxlc3NlLlwiLFxyXG4gICAgICAgICAgICAgICAgYXV0aG9yOiBcIlPDqW7DqHF1ZVwiXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OlwiTCdob21tZSBkZXZyYWl0IG1ldHRyZSBhdXRhbnQgZCdhcmRldXIgw6Agc2ltcGxpZmllciBzYSB2aWUgcXUnaWwgZW4gbWV0IMOgIGxhIGNvbXBsaXF1ZXIuXCIsXHJcbiAgICAgICAgICAgICAgICBhdXRob3I6IFwiSGVucmkgQmVyZ3NvblwiXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgY29uc3QgZ2V0UXVvdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInF1b3RlXCIpO1xyXG4gICAgICAgIGNvbnN0IGdldEF1dGhvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXV0aG9yXCIpO1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uXCIpO1xyXG5cclxuICAgICAgICBjb25zdCByYW5kTnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcXVvdGVzLmxlbmd0aCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRpc3BsYXllZFF1b3RlID0gcXVvdGVzW3JhbmROdW1dO1xyXG5cclxuICAgICAgICBnZXRRdW90ZS5pbm5lclRleHQgPSBcIlxcXCJcIiArIGRpc3BsYXllZFF1b3RlLmNvbnRlbnQgKyBcIlxcXCJcIjtcclxuICAgICAgICBnZXRBdXRob3IuaW5uZXJUZXh0ID0gZGlzcGxheWVkUXVvdGUuYXV0aG9yO1xyXG5cclxuICAgIH1cclxuXHJcbn07XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcclxuICAgIEdlbmVyYXRvci5nZXRSYW5kb20oKTtcclxufSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9xdW90ZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=