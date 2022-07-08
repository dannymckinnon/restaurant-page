/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homePage": () => (/* binding */ homePage)
/* harmony export */ });
function homePage() {
  const content = document.getElementById('content');
  const title = document.createElement('h1');
  const restaurantName = document.createElement('h2');
  const pancakeImg = document.createElement('img');
  const description = document.createElement('p');
  const hoursTitle = document.createElement('h2');
  const hours = document.createElement('ul');
  const locationTitle = document.createElement('h2');
  const location = document.createElement('p');

  title.textContent = 'Home';
  restaurantName.textContent = 'Danny\'s restuarant';
  pancakeImg.setAttribute('src', '/src/pancakes.jpg');
  description.textContent = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, ratione.
                             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, odio?
                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam aspernatur unde soluta.
                             Lorem, ipsum dolor.`;
  hoursTitle.textContent = 'Hours';
  
  function createHours(day, hours) {
    const listItem = document.createElement('li');
    listItem.textContent = `${day}: ${hours[0]} - ${hours[1]}`;
    return listItem;
  }

  hours.appendChild(createHours('Sunday', ['8am', '8pm']));
  hours.appendChild(createHours('Monday', ['6am', '6pm']));
  hours.appendChild(createHours('Tuesday', ['6am', '6pm']));
  hours.appendChild(createHours('Wednesday', ['6am', '6pm']));
  hours.appendChild(createHours('Thursday', ['6am', '10pm']));
  hours.appendChild(createHours('Friday', ['6am', '10pm']));
  hours.appendChild(createHours('Saturday', ['8am', '10pm']));

  locationTitle.textContent = 'Location';
  location.textContent = '123 Forest Drive, Forestville, Maine';

  for (const e of [title, restaurantName, pancakeImg, description, hoursTitle, hours, locationTitle, location]) {
    content.appendChild(e);
  }
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");


(0,_home__WEBPACK_IMPORTED_MODULE_0__.homePage)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsSUFBSSxJQUFJLFVBQVUsSUFBSSxTQUFTO0FBQzdEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O1VDeENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOa0M7O0FBRWxDLCtDQUFRLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gaG9tZVBhZ2UoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGNvbnN0IHJlc3RhdXJhbnROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgY29uc3QgcGFuY2FrZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgaG91cnNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGNvbnN0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgY29uc3QgbG9jYXRpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gIHRpdGxlLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICByZXN0YXVyYW50TmFtZS50ZXh0Q29udGVudCA9ICdEYW5ueVxcJ3MgcmVzdHVhcmFudCc7XG4gIHBhbmNha2VJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCAnL3NyYy9wYW5jYWtlcy5qcGcnKTtcbiAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBgTG9yZW0gaXBzdW0gZG9sb3IsIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIE51bGxhLCByYXRpb25lLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciwgc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRXhwZWRpdGEsIG9kaW8/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YW0gYXNwZXJuYXR1ciB1bmRlIHNvbHV0YS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9yZW0sIGlwc3VtIGRvbG9yLmA7XG4gIGhvdXJzVGl0bGUudGV4dENvbnRlbnQgPSAnSG91cnMnO1xuICBcbiAgZnVuY3Rpb24gY3JlYXRlSG91cnMoZGF5LCBob3Vycykge1xuICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaXN0SXRlbS50ZXh0Q29udGVudCA9IGAke2RheX06ICR7aG91cnNbMF19IC0gJHtob3Vyc1sxXX1gO1xuICAgIHJldHVybiBsaXN0SXRlbTtcbiAgfVxuXG4gIGhvdXJzLmFwcGVuZENoaWxkKGNyZWF0ZUhvdXJzKCdTdW5kYXknLCBbJzhhbScsICc4cG0nXSkpO1xuICBob3Vycy5hcHBlbmRDaGlsZChjcmVhdGVIb3VycygnTW9uZGF5JywgWyc2YW0nLCAnNnBtJ10pKTtcbiAgaG91cnMuYXBwZW5kQ2hpbGQoY3JlYXRlSG91cnMoJ1R1ZXNkYXknLCBbJzZhbScsICc2cG0nXSkpO1xuICBob3Vycy5hcHBlbmRDaGlsZChjcmVhdGVIb3VycygnV2VkbmVzZGF5JywgWyc2YW0nLCAnNnBtJ10pKTtcbiAgaG91cnMuYXBwZW5kQ2hpbGQoY3JlYXRlSG91cnMoJ1RodXJzZGF5JywgWyc2YW0nLCAnMTBwbSddKSk7XG4gIGhvdXJzLmFwcGVuZENoaWxkKGNyZWF0ZUhvdXJzKCdGcmlkYXknLCBbJzZhbScsICcxMHBtJ10pKTtcbiAgaG91cnMuYXBwZW5kQ2hpbGQoY3JlYXRlSG91cnMoJ1NhdHVyZGF5JywgWyc4YW0nLCAnMTBwbSddKSk7XG5cbiAgbG9jYXRpb25UaXRsZS50ZXh0Q29udGVudCA9ICdMb2NhdGlvbic7XG4gIGxvY2F0aW9uLnRleHRDb250ZW50ID0gJzEyMyBGb3Jlc3QgRHJpdmUsIEZvcmVzdHZpbGxlLCBNYWluZSc7XG5cbiAgZm9yIChjb25zdCBlIG9mIFt0aXRsZSwgcmVzdGF1cmFudE5hbWUsIHBhbmNha2VJbWcsIGRlc2NyaXB0aW9uLCBob3Vyc1RpdGxlLCBob3VycywgbG9jYXRpb25UaXRsZSwgbG9jYXRpb25dKSB7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChlKTtcbiAgfVxufVxuXG5cbmV4cG9ydCB7IGhvbWVQYWdlIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBob21lUGFnZSB9IGZyb20gJy4vaG9tZSc7XG5cbmhvbWVQYWdlKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9