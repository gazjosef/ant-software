"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Navbar/Navbar.jsx":
/*!**************************************!*\
  !*** ./components/Navbar/Navbar.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var react_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons */ \"./node_modules/react-icons/lib/esm/index.js\");\n/* harmony import */ var _MenuItems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MenuItems */ \"./components/Navbar/MenuItems.js\");\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Navbar() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), toggle = ref[0], setToggle = ref[1];\n    var handleClick = function() {\n        setToggle(function(t) {\n            return !t;\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"navbar\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"navbar__logo\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"#home\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/img/black-logo.png\",\n                        alt: \"Logo\",\n                        className: \"logo\"\n                    }, void 0, false, {\n                        fileName: \"/Users/garethhind/Documents/Github/ant-software/components/Navbar/Navbar.jsx\",\n                        lineNumber: 18,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/garethhind/Documents/Github/ant-software/components/Navbar/Navbar.jsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/garethhind/Documents/Github/ant-software/components/Navbar/Navbar.jsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"navbar__menu-icon\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons__WEBPACK_IMPORTED_MODULE_3__.IconContext.Provider, {\n                    value: {\n                        className: \"fa-react\"\n                    },\n                    children: toggle ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaTimes, {\n                        onClick: handleClick\n                    }, void 0, false, {\n                        fileName: \"/Users/garethhind/Documents/Github/ant-software/components/Navbar/Navbar.jsx\",\n                        lineNumber: 24,\n                        columnNumber: 13\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaBars, {\n                        onClick: handleClick\n                    }, void 0, false, {\n                        fileName: \"/Users/garethhind/Documents/Github/ant-software/components/Navbar/Navbar.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/garethhind/Documents/Github/ant-software/components/Navbar/Navbar.jsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/garethhind/Documents/Github/ant-software/components/Navbar/Navbar.jsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: toggle ? \"navbar__menu active\" : \"navbar__menu\",\n                children: _MenuItems__WEBPACK_IMPORTED_MODULE_4__.MenuItems.map(function(item, index) {\n                    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: item.cName,\n                            href: item.url,\n                            children: item.title\n                        }, void 0, false, {\n                            fileName: \"/Users/garethhind/Documents/Github/ant-software/components/Navbar/Navbar.jsx\",\n                            lineNumber: 34,\n                            columnNumber: 15\n                        }, _this)\n                    }, index, false, {\n                        fileName: \"/Users/garethhind/Documents/Github/ant-software/components/Navbar/Navbar.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 13\n                    }, _this));\n                })\n            }, void 0, false, {\n                fileName: \"/Users/garethhind/Documents/Github/ant-software/components/Navbar/Navbar.jsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/garethhind/Documents/Github/ant-software/components/Navbar/Navbar.jsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this));\n}\n_s(Navbar, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci9OYXZiYXIuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTRCO0FBQ0k7QUFDZ0I7QUFDUDtBQUNGOztTQUU5Qk0sTUFBTSxHQUFHLENBQUM7OztJQUNqQixHQUFLLENBQXVCTCxHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxHQUFuQ00sTUFBTSxHQUFlTixHQUFlLEtBQTVCTyxTQUFTLEdBQUlQLEdBQWU7SUFFM0MsR0FBSyxDQUFDUSxXQUFXLEdBQUcsUUFDdEIsR0FENEIsQ0FBQztRQUN6QkQsU0FBUyxDQUFDLFFBQVFFLENBQVBBLENBQUM7WUFBSyxNQUNwQixFQURxQkEsQ0FBQzs7SUFDckIsQ0FBQztJQUVELE1BQU0sNkVBQ0hDLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQVE7O3dGQUNwQkMsQ0FBRztnQkFBQ0QsU0FBUyxFQUFDLENBQWM7c0dBQzFCWixrREFBSTtvQkFBQ2MsSUFBSSxFQUFDLENBQU87MEdBQ2ZDLENBQUc7d0JBQUNDLEdBQUcsRUFBQyxDQUFxQjt3QkFBQ0MsR0FBRyxFQUFDLENBQU07d0JBQUNMLFNBQVMsRUFBQyxDQUFNOzs7Ozs7Ozs7Ozs7Ozs7O3dGQUc3REMsQ0FBRztnQkFBQ0QsU0FBUyxFQUFDLENBQW1CO3NHQUMvQlIsNkRBQW9CO29CQUFDZSxLQUFLLEVBQUUsQ0FBQzt3QkFBQ1AsU0FBUyxFQUFFLENBQVU7b0JBQUMsQ0FBQzs4QkFDbkRMLE1BQU0sK0VBQ0pKLG1EQUFPO3dCQUFDaUIsT0FBTyxFQUFFWCxXQUFXOzs7OzsyR0FFNUJQLGtEQUFNO3dCQUFDa0IsT0FBTyxFQUFFWCxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7O3dGQUlqQ1ksQ0FBRTtnQkFBQ1QsU0FBUyxFQUFFTCxNQUFNLEdBQUcsQ0FBcUIsdUJBQUcsQ0FBYzswQkFDM0RGLHFEQUFhLENBQUMsUUFBUSxDQUFQa0IsSUFBSSxFQUFFQyxLQUFLLEVBQUssQ0FBQztvQkFDL0IsTUFBTSw2RUFDSEMsQ0FBRTs4R0FDQUMsQ0FBQzs0QkFBQ2QsU0FBUyxFQUFFVyxJQUFJLENBQUNJLEtBQUs7NEJBQUViLElBQUksRUFBRVMsSUFBSSxDQUFDSyxHQUFHO3NDQUNyQ0wsSUFBSSxDQUFDTSxLQUFLOzs7Ozs7dUJBRk5MLEtBQUs7Ozs7O2dCQU1sQixDQUFDOzs7Ozs7Ozs7Ozs7QUFJVCxDQUFDO0dBcENRbEIsTUFBTTtLQUFOQSxNQUFNO0FBc0NmLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIvTmF2YmFyLmpzeD8xZWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGYUJhcnMsIEZhVGltZXMgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCB7IEljb25Db250ZXh0IH0gZnJvbSBcInJlYWN0LWljb25zXCI7XG5pbXBvcnQgeyBNZW51SXRlbXMgfSBmcm9tIFwiLi9NZW51SXRlbXNcIjtcblxuZnVuY3Rpb24gTmF2YmFyKCkge1xuICBjb25zdCBbdG9nZ2xlLCBzZXRUb2dnbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIHNldFRvZ2dsZSgodCkgPT4gIXQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyX19sb2dvXCI+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIjaG9tZVwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy9ibGFjay1sb2dvLnBuZ1wiIGFsdD1cIkxvZ29cIiBjbGFzc05hbWU9XCJsb2dvXCIgLz5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhcl9fbWVudS1pY29uXCI+XG4gICAgICAgIDxJY29uQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBjbGFzc05hbWU6IFwiZmEtcmVhY3RcIiB9fT5cbiAgICAgICAgICB7dG9nZ2xlID8gKFxuICAgICAgICAgICAgPEZhVGltZXMgb25DbGljaz17aGFuZGxlQ2xpY2t9IC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxGYUJhcnMgb25DbGljaz17aGFuZGxlQ2xpY2t9IC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9JY29uQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHVsIGNsYXNzTmFtZT17dG9nZ2xlID8gXCJuYXZiYXJfX21lbnUgYWN0aXZlXCIgOiBcIm5hdmJhcl9fbWVudVwifT5cbiAgICAgICAge01lbnVJdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtpdGVtLmNOYW1lfSBocmVmPXtpdGVtLnVybH0+XG4gICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L3VsPlxuICAgIDwvbmF2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG4iXSwibmFtZXMiOlsiTGluayIsInVzZVN0YXRlIiwiRmFCYXJzIiwiRmFUaW1lcyIsIkljb25Db250ZXh0IiwiTWVudUl0ZW1zIiwiTmF2YmFyIiwidG9nZ2xlIiwic2V0VG9nZ2xlIiwiaGFuZGxlQ2xpY2siLCJ0IiwibmF2IiwiY2xhc3NOYW1lIiwiZGl2IiwiaHJlZiIsImltZyIsInNyYyIsImFsdCIsIlByb3ZpZGVyIiwidmFsdWUiLCJvbkNsaWNrIiwidWwiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJsaSIsImEiLCJjTmFtZSIsInVybCIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Navbar/Navbar.jsx\n");

/***/ })

});