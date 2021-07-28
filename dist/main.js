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

eval("function dropdown() {\r\n    const dropdown_parent = document.querySelector('.dropdown-container');\r\n\r\n    children = dropdown_parent.children;\r\n\r\n    for (let i = 0; i < children.length; i++) {\r\n        children[i].style.display = 'none';\r\n        // Do stuff\r\n    }\r\n\r\n    dropdown_parent.children[0].style.display = 'block';\r\n\r\n    dropdown_parent.addEventListener('mouseenter', () => {\r\n        for (let i = 1; i < children.length; i++) {\r\n            children[i].style.display = 'block';\r\n        }\r\n    });\r\n    \r\n    dropdown_parent.addEventListener('mouseleave', () => {\r\n        for (let i = 1; i < children.length; i++) {\r\n            children[i].style.display = 'none';\r\n        }\r\n    });\r\n}\r\n\r\ndropdown();\n\n//# sourceURL=webpack://dynamic_interactive_ux/./src/index.js?");

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