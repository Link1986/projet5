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

        var randNum;
        var displayedQuote;

        randNum = Math.floor(Math.random() * quotes.length);

        displayedQuote = quotes[randNum];

        getQuote.innerText = "\"" + displayedQuote.content + "\"";
        getAuthor.innerText = displayedQuote.author;
    }

};

document.getElementById("button").addEventListener("click", function () {
    Generator.getRandom();
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjJkMzM0MDEzN2EzZDM0MWM0YzUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3F1b3RlLmpzIl0sIm5hbWVzIjpbIkdlbmVyYXRvciIsImdldFJhbmRvbSIsInF1b3RlcyIsImNvbnRlbnQiLCJhdXRob3IiLCJnZXRRdW90ZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRBdXRob3IiLCJidXR0b24iLCJyYW5kTnVtIiwiZGlzcGxheWVkUXVvdGUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJpbm5lclRleHQiLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM3REEsSUFBSUEsWUFBWTs7QUFFWkMsZUFBVyxxQkFBVzs7QUFFbEIsWUFBSUMsU0FBUyxDQUNUO0FBQ0lDLHFCQUFTLG1HQURiO0FBRUlDLG9CQUFRO0FBRlosU0FEUyxFQU1UO0FBQ0lELHFCQUFTLHdFQURiO0FBRUlDLG9CQUFRO0FBRlosU0FOUyxFQVdUO0FBQ0lELHFCQUFTLHVGQURiO0FBRUlDLG9CQUFRO0FBRlosU0FYUyxFQWdCVDtBQUNJRCxxQkFBUyxpRUFEYjtBQUVJQyxvQkFBUTtBQUZaLFNBaEJTLEVBcUJUO0FBQ0lELHFCQUFRLHNLQURaO0FBRUlDLG9CQUFRO0FBRlosU0FyQlMsRUEwQlQ7QUFDSUQscUJBQVEsNENBRFo7QUFFSUMsb0JBQVE7QUFGWixTQTFCUyxFQStCVDtBQUNJRCxxQkFBUSxvRkFEWjtBQUVJQyxvQkFBUTtBQUZaLFNBL0JTLEVBb0NUO0FBQ0lELHFCQUFRLGtDQURaO0FBRUlDLG9CQUFRO0FBRlosU0FwQ1MsRUF5Q1Q7QUFDSUQscUJBQVEsbUZBRFo7QUFFSUMsb0JBQVE7QUFGWixTQXpDUyxFQThDVDtBQUNJRCxxQkFBUSx1SEFEWjtBQUVJQyxvQkFBUTtBQUZaLFNBOUNTLEVBbURUO0FBQ0lELHFCQUFRLGtHQURaO0FBRUlDLG9CQUFRO0FBRlosU0FuRFMsRUF3RFQ7QUFDSUQscUJBQVEsa0VBRFo7QUFFSUMsb0JBQVE7QUFGWixTQXhEUyxFQTZEVDtBQUNJRCxxQkFBUSwrSEFEWjtBQUVJQyxvQkFBUTtBQUZaLFNBN0RTLEVBa0VUO0FBQ0lELHFCQUFRLGlEQURaO0FBRUlDLG9CQUFRO0FBRlosU0FsRVMsRUF1RVQ7QUFDSUQscUJBQVEsMEZBRFo7QUFFSUMsb0JBQVE7QUFGWixTQXZFUyxDQUFiOztBQThFQSxZQUFJQyxXQUFXQyxTQUFTQyxjQUFULENBQXdCLE9BQXhCLENBQWY7QUFDQSxZQUFJQyxZQUFZRixTQUFTQyxjQUFULENBQXdCLFFBQXhCLENBQWhCO0FBQ0EsWUFBSUUsU0FBU0gsU0FBU0MsY0FBVCxDQUF3QixRQUF4QixDQUFiOztBQUVBLFlBQUlHLE9BQUo7QUFDQSxZQUFJQyxjQUFKOztBQUVBRCxrQkFBVUUsS0FBS0MsS0FBTCxDQUFXRCxLQUFLRSxNQUFMLEtBQWdCWixPQUFPYSxNQUFsQyxDQUFWOztBQUVBSix5QkFBaUJULE9BQU9RLE9BQVAsQ0FBakI7O0FBRUFMLGlCQUFTVyxTQUFULEdBQXFCLE9BQU9MLGVBQWVSLE9BQXRCLEdBQWdDLElBQXJEO0FBQ0FLLGtCQUFVUSxTQUFWLEdBQXNCTCxlQUFlUCxNQUFyQztBQUVIOztBQWhHVyxDQUFoQjs7QUFvR0FFLFNBQVNDLGNBQVQsQ0FBd0IsUUFBeEIsRUFBa0NVLGdCQUFsQyxDQUFtRCxPQUFuRCxFQUE0RCxZQUFVO0FBQ2xFakIsY0FBVUMsU0FBVjtBQUNILENBRkQsRSIsImZpbGUiOiJqcy9xdW90ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXNzZXRzL2pzL3F1b3RlLmpzXCIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDYyZDMzNDAxMzdhM2QzNDFjNGM1IiwidmFyIEdlbmVyYXRvciA9IHtcclxuXHJcbiAgICBnZXRSYW5kb206IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgcXVvdGVzID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIkV4aWdlIGJlYXVjb3VwIGRlIHRvaS1tw6ptZSBldCBhdHRlbmRzIHBldSBkZXMgYXV0cmVzLiBBaW5zaSBiZWF1Y291cCBkJ2VubnVpcyB0ZSBzZXJvbnQgw6lwYXJnbsOpcy5cIixcclxuICAgICAgICAgICAgICAgIGF1dGhvcjogXCJDb25mdWNpdXNcIlxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJMYSB2aWUgZXN0IHVuIG15c3TDqHJlIHF1J2lsIGZhdXQgdml2cmUsIGV0IG5vbiB1biBwcm9ibMOobWUgw6AgcsOpc291ZHJlLlwiLFxyXG4gICAgICAgICAgICAgICAgYXV0aG9yOiBcIkdhbmRoaVwiXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlRvdXQgb2JzdGFjbGUgcmVuZm9yY2UgbGEgZMOpdGVybWluYXRpb24uIENlbHVpIHF1aSBzJ2VzdCBmaXjDqSB1biBidXQgbidlbiBjaGFuZ2UgcGFzLlwiLFxyXG4gICAgICAgICAgICAgICAgYXV0aG9yOiBcIkzDqW9uYXJkIERlIFZpbmNpXCJcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiTGEgbXVzaXF1ZSBkb25uZSB1bmUgw6JtZSDDoCBub3MgY29ldXJzIGV0IGRlcyBhaWxlcyDDoCBsYSBwZW5zw6llLlwiLFxyXG4gICAgICAgICAgICAgICAgYXV0aG9yOiBcIlBsYXRvblwiXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OlwiUXVlIGxhIGZvcmNlIG1lIHNvaXQgZG9ubsOpZSBkZSBzdXBwb3J0ZXIgY2UgcXVpIG5lIHBldXQgw6p0cmUgY2hhbmfDqSBldCBsZSBjb3VyYWdlIGRlIGNoYW5nZXIgY2UgcXVpIHBldXQgbCfDqnRyZSBtYWlzIGF1c3NpIGxhIHNhZ2Vzc2UgZGUgZGlzdGluZ3VlciBsJ3VuIGRlIGwnYXV0cmUuXCIsXHJcbiAgICAgICAgICAgICAgICBhdXRob3I6IFwiTWFyYyBBdXLDqGxlXCJcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6XCJDZSBxdWUgamUgc2FpcywgY+KAmWVzdCBxdWUgamUgbmUgc2FpcyByaWVuLlwiLFxyXG4gICAgICAgICAgICAgICAgYXV0aG9yOiBcIlNvY3JhdGVcIlxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDpcIkxlIHZyYWkgc2lnbmUgZGUgbOKAmWludGVsbGlnZW5jZSwgY2UgbuKAmWVzdCBwYXMgbGEgY29ubmFpc3NhbmNlLCBtYWlzIGzigJlpbWFnaW5hdGlvbi5cIixcclxuICAgICAgICAgICAgICAgIGF1dGhvcjogXCJBbGJlcnQgRWluc3RlaW5cIlxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDpcIkzigJlob21tZSBlc3QgdW4gbG91cCBwb3VyIGzigJlob21tZVwiLFxyXG4gICAgICAgICAgICAgICAgYXV0aG9yOiBcIlRob21hcyBIb2JiZXNcIlxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDpcIkxhIGNvbm5haXNzYW5jZSBkZSBs4oCZaG9tbWUgbmUgcGV1dCBwYXMgc+KAmcOpdGVuZHJlIGF1LWRlbMOgIGRlIHNvbiBleHDDqXJpZW5jZSBwcm9wcmVcIixcclxuICAgICAgICAgICAgICAgIGF1dGhvcjogXCJKb2huIExvY2tlXCJcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6XCJO4oCZYXR0ZW5kcyBwYXMgcXVlIGxlcyDDqXbDqW5lbWVudHMgYXJyaXZlbnQgY29tbWUgdHUgbGUgc291aGFpdGVzIDsgZMOpY2lkZSBkZSB2b3Vsb2lyIGNlIHF1aSBhcnJpdmUgZXQgdHUgc2VyYXMgaGV1cmV1eFwiLFxyXG4gICAgICAgICAgICAgICAgYXV0aG9yOiBcIkVwaWN0w6h0ZVwiXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OlwiTCdlbm51aSBkYW5zIGNlIG1vbmRlLCBjJ2VzdCBxdWUgbGVzIGlkaW90cyBzb250IHPDu3JzIGQnZXV4IGV0IGxlcyBnZW5zIHNlbnPDqXMgcGxlaW5zIGRlIGRvdXRlcy5cIixcclxuICAgICAgICAgICAgICAgIGF1dGhvcjogXCJCZXJ0cmFuZCBSdXNzZWxsXCJcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6XCJJbCBuJ3kgYSBwb2ludCBkZSBib25oZXVyIHNhbnMgY291cmFnZSwgbmkgZGUgdmVydHUgc2FucyBjb21iYXQuXCIsXHJcbiAgICAgICAgICAgICAgICBhdXRob3I6IFwiSmVhbi1KYWNxdWVzIFJvdXNzZWF1XCJcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6XCJQdWlzc2UgY2hhY3VuIGF2b2lyIGxhIGNoYW5jZSBkZSB0cm91dmVyIGp1c3RlbWVudCBsYSBjb25jZXB0aW9uIGRlIGxhIHZpZSBxdWkgbHVpIHBlcm1ldCBkZSByw6lhbGlzZXIgc29uIG1heGltdW0gZGUgYm9uaGV1ci5cIixcclxuICAgICAgICAgICAgICAgIGF1dGhvcjogXCJGcmllZHJpY2ggTmlldHpzY2hlXCJcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6XCJUb3V0ZSBtw6ljaGFuY2V0w6kgYSBzYSBzb3VyY2UgZGFucyBsYSBmYWlibGVzc2UuXCIsXHJcbiAgICAgICAgICAgICAgICBhdXRob3I6IFwiU8OpbsOocXVlXCJcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6XCJMJ2hvbW1lIGRldnJhaXQgbWV0dHJlIGF1dGFudCBkJ2FyZGV1ciDDoCBzaW1wbGlmaWVyIHNhIHZpZSBxdSdpbCBlbiBtZXQgw6AgbGEgY29tcGxpcXVlci5cIixcclxuICAgICAgICAgICAgICAgIGF1dGhvcjogXCJIZW5yaSBCZXJnc29uXCJcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICB2YXIgZ2V0UXVvdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInF1b3RlXCIpO1xyXG4gICAgICAgIHZhciBnZXRBdXRob3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF1dGhvclwiKTtcclxuICAgICAgICB2YXIgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b25cIik7XHJcblxyXG4gICAgICAgIHZhciByYW5kTnVtO1xyXG4gICAgICAgIHZhciBkaXNwbGF5ZWRRdW90ZTtcclxuXHJcbiAgICAgICAgcmFuZE51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHF1b3Rlcy5sZW5ndGgpO1xyXG5cclxuICAgICAgICBkaXNwbGF5ZWRRdW90ZSA9IHF1b3Rlc1tyYW5kTnVtXTtcclxuXHJcbiAgICAgICAgZ2V0UXVvdGUuaW5uZXJUZXh0ID0gXCJcXFwiXCIgKyBkaXNwbGF5ZWRRdW90ZS5jb250ZW50ICsgXCJcXFwiXCI7XHJcbiAgICAgICAgZ2V0QXV0aG9yLmlubmVyVGV4dCA9IGRpc3BsYXllZFF1b3RlLmF1dGhvcjtcclxuXHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XHJcbiAgICBHZW5lcmF0b3IuZ2V0UmFuZG9tKCk7XHJcbn0pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvcXVvdGUuanMiXSwic291cmNlUm9vdCI6IiJ9