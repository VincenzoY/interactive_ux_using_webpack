/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// dropdown logic\r\n\r\nfunction dropdown(dropdown_parent) {\r\n    \r\n    let children = dropdown_parent.children;\r\n\r\n    for (let i = 0; i < children.length; i++) {\r\n        children[i].style.display = 'none';\r\n    }\r\n\r\n    dropdown_parent.children[0].style.display = 'block';\r\n\r\n    dropdown_parent.addEventListener('mouseenter', () => {\r\n        for (let i = 1; i < children.length; i++) {\r\n            children[i].style.display = 'block';\r\n        }\r\n    });\r\n    \r\n    dropdown_parent.addEventListener('mouseleave', () => {\r\n        for (let i = 1; i < children.length; i++) {\r\n            children[i].style.display = 'none';\r\n        }\r\n    });\r\n}\r\n\r\nconst all_drop_downs = document.querySelectorAll('.dropdown-container');\r\n\r\nfor (let i = 0; i < all_drop_downs.length; i++) {\r\n    dropdown(all_drop_downs[i]);\r\n}\r\n\r\n\r\n//carousel logic\r\nlet img_amount = 5;\r\nlet img_width = 600;\r\nlet auto_advance_time = 5000;\r\n\r\nconst left_arrow = document.querySelector('.left');\r\nconst right_arrow = document.querySelector('.right');\r\nconst carousel = document.getElementById('carousel');\r\n\r\nright_arrow.addEventListener('click', () => {\r\n    move_right();\r\n    updateIndicator();\r\n});\r\n\r\nleft_arrow.addEventListener('click', () => {\r\n    move_left();\r\n    updateIndicator();\r\n});\r\n\r\nfunction move_right() {\r\n    left = Number(carousel.style.left.slice(0, -2));\r\n    if (left > -(img_amount-1)*img_width) {\r\n        carousel.style.left = left - img_width;\r\n    } else {\r\n        carousel.style.left = 0;\r\n    }\r\n}\r\n\r\nfunction move_left() {\r\n    left = Number(carousel.style.left.slice(0, -2));\r\n    if (left < 0) {\r\n        carousel.style.left = left + img_width;\r\n    } else {\r\n        carousel.style.left = -(img_amount-1)*img_width;\r\n    }\r\n}\r\n\r\nconst indicator = document.getElementById('carousel-indicator');\r\n\r\nfunction updateIndicator() {\r\n    let children = indicator.children;\r\n    for (let i = 0; i < children.length; i++) {\r\n        children[i].classList.remove('selected');\r\n    }\r\n    let position = -Number(carousel.style.left.slice(0, -2)) / img_width;\r\n    children[position].classList.add('selected');\r\n}\r\n\r\nsetInterval(() => {\r\n    move_right();\r\n    updateIndicator();\r\n}, auto_advance_time);\n\n//# sourceURL=webpack://dynamic_interactive_ux/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;