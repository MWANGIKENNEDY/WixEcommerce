"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[slug]/page",{

/***/ "(app-pages-browser)/./src/components/CustomizeProducts.tsx":
/*!**********************************************!*\
  !*** ./src/components/CustomizeProducts.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst CustomizeProducts = (param)=>{\n    let { productId, productVariants, productOptions } = param;\n    _s();\n    // Options - color, sizes\n    // Choices - color -> green | red | blue , sizes - large | medium | small\n    // Variants - Combinations of different product options and choices\n    //   {[key: string]: string} is an object type where the keys are strings and the values are also strings.\n    //   This is called an index signature in TypeScript.\n    // initial value is an empty object\n    const [selectedOptions, setSelectedOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const handleOptionSelect = (optionType, choice)=>{\n        setSelectedOptions((prev)=>({\n                ...prev,\n                [optionType]: choice\n            }));\n    };\n    console.log(productVariants);\n    const isVariantInStock = (choices)=>{\n        return productVariants.some((variant)=>{\n            var _variant_stock;\n            const variantChoices = variant.choices;\n            if (!variantChoices) return false;\n            return Object.entries(choices).every((param)=>{\n                let [key, value] = param;\n                return variantChoices[key] === value;\n            }) && ((_variant_stock = variant.stock) === null || _variant_stock === void 0 ? void 0 : _variant_stock.inStock) && variant.stock;\n        });\n    };\n    console.log(selectedOptions);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \" flex flex-col space-y-2\",\n            children: productOptions.map((option, index)=>{\n                var _option_choices;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex-col gap-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"text-xs font-bold uppercase \",\n                            children: [\n                                \"Choose a \",\n                                option.name\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/kennedy/Documents/Lama Dev/wix-ecommerce-main/src/components/CustomizeProducts.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 13\n                        }, undefined),\n                        (_option_choices = option.choices) === null || _option_choices === void 0 ? void 0 : _option_choices.map((choice)=>{\n                            const disabled = !isVariantInStock({\n                                ...selectedOptions,\n                                [option.name]: choice.description\n                            });\n                            const selected = selectedOptions[option.name] === choice.description;\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                onClick: ()=>handleOptionSelect(option.name, choice.description),\n                                children: [\n                                    choice.description,\n                                    disabled && \"disabled\",\n                                    selected && \"selected\"\n                                ]\n                            }, choice.value, true, {\n                                fileName: \"/home/kennedy/Documents/Lama Dev/wix-ecommerce-main/src/components/CustomizeProducts.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 17\n                            }, undefined);\n                        })\n                    ]\n                }, index, true, {\n                    fileName: \"/home/kennedy/Documents/Lama Dev/wix-ecommerce-main/src/components/CustomizeProducts.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 11\n                }, undefined);\n            })\n        }, void 0, false, {\n            fileName: \"/home/kennedy/Documents/Lama Dev/wix-ecommerce-main/src/components/CustomizeProducts.tsx\",\n            lineNumber: 49,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(CustomizeProducts, \"dLRHIO/SyIp9lHMf8Crrz2iKqk4=\");\n_c = CustomizeProducts;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomizeProducts);\nvar _c;\n$RefreshReg$(_c, \"CustomizeProducts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0N1c3RvbWl6ZVByb2R1Y3RzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFHd0M7QUFFeEMsTUFBTUUsb0JBQW9CO1FBQUMsRUFDekJDLFNBQVMsRUFDVEMsZUFBZSxFQUNmQyxjQUFjLEVBS2Y7O0lBQ0MseUJBQXlCO0lBQ3pCLHlFQUF5RTtJQUN6RSxtRUFBbUU7SUFFbkUsMEdBQTBHO0lBQzFHLHFEQUFxRDtJQUNyRCxtQ0FBbUM7SUFDbkMsTUFBTSxDQUFDQyxpQkFBaUJDLG1CQUFtQixHQUFHTiwrQ0FBUUEsQ0FFbkQsQ0FBQztJQUVKLE1BQU1PLHFCQUFxQixDQUFDQyxZQUFvQkM7UUFDOUNILG1CQUFtQixDQUFDSSxPQUFVO2dCQUFFLEdBQUdBLElBQUk7Z0JBQUUsQ0FBQ0YsV0FBVyxFQUFFQztZQUFPO0lBQ2hFO0lBRUFFLFFBQVFDLEdBQUcsQ0FBQ1Q7SUFFWixNQUFNVSxtQkFBbUIsQ0FBQ0M7UUFDeEIsT0FBT1gsZ0JBQWdCWSxJQUFJLENBQUMsQ0FBQ0M7Z0JBTXBCQTtZQUxQLE1BQU1DLGlCQUFpQkQsUUFBUUYsT0FBTztZQUN0QyxJQUFJLENBQUNHLGdCQUFnQixPQUFPO1lBQzVCLE9BQ0VDLE9BQU9DLE9BQU8sQ0FBQ0wsU0FBU00sS0FBSyxDQUMzQjtvQkFBQyxDQUFDQyxLQUFLQyxNQUFNO3VCQUFLTCxjQUFjLENBQUNJLElBQUksS0FBS0M7b0JBQ3ZDTixpQkFBQUEsUUFBUU8sS0FBSyxjQUFiUCxxQ0FBQUEsZUFBZVEsT0FBTyxLQUFJUixRQUFRTyxLQUFLO1FBRWhEO0lBQ0Y7SUFFQVosUUFBUUMsR0FBRyxDQUFDUDtJQUVaLHFCQUNFO2tCQUVFLDRFQUFDb0I7WUFBSUMsV0FBVTtzQkFDWnRCLGVBQWV1QixHQUFHLENBQUMsQ0FBQ0MsUUFBUUM7b0JBS3hCRDtxQ0FKSCw4REFBQ0g7b0JBQWdCQyxXQUFVOztzQ0FDekIsOERBQUNJOzRCQUFHSixXQUFVOztnQ0FBK0I7Z0NBQ2pDRSxPQUFPRyxJQUFJOzs7Ozs7O3lCQUV0Qkgsa0JBQUFBLE9BQU9kLE9BQU8sY0FBZGMsc0NBQUFBLGdCQUFnQkQsR0FBRyxDQUFDLENBQUNsQjs0QkFDcEIsTUFBTXVCLFdBQVcsQ0FBQ25CLGlCQUFpQjtnQ0FDakMsR0FBR1IsZUFBZTtnQ0FDbEIsQ0FBQ3VCLE9BQU9HLElBQUksQ0FBRSxFQUFFdEIsT0FBT3dCLFdBQVc7NEJBQ3BDOzRCQUVBLE1BQU1DLFdBQ0o3QixlQUFlLENBQUN1QixPQUFPRyxJQUFJLENBQUUsS0FBS3RCLE9BQU93QixXQUFXOzRCQUN0RCxxQkFDRSw4REFBQ1I7Z0NBQ0NVLFNBQVMsSUFDUDVCLG1CQUFtQnFCLE9BQU9HLElBQUksRUFBR3RCLE9BQU93QixXQUFXOztvQ0FJcER4QixPQUFPd0IsV0FBVztvQ0FBRUQsWUFBWTtvQ0FBWUUsWUFBWTs7K0JBRnBEekIsT0FBT2EsS0FBSzs7Ozs7d0JBS3ZCOzttQkF0QlFPOzs7Ozs7Ozs7Ozs7QUF1RHBCO0dBcEdNNUI7S0FBQUE7QUFzR04sK0RBQWVBLGlCQUFpQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DdXN0b21pemVQcm9kdWN0cy50c3g/ODFhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgcHJvZHVjdHMgfSBmcm9tIFwiQHdpeC9zdG9yZXNcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBDdXN0b21pemVQcm9kdWN0cyA9ICh7XG4gIHByb2R1Y3RJZCxcbiAgcHJvZHVjdFZhcmlhbnRzLFxuICBwcm9kdWN0T3B0aW9ucyxcbn06IHtcbiAgcHJvZHVjdElkOiBzdHJpbmc7XG4gIHByb2R1Y3RWYXJpYW50czogcHJvZHVjdHMuVmFyaWFudFtdO1xuICBwcm9kdWN0T3B0aW9uczogcHJvZHVjdHMuUHJvZHVjdE9wdGlvbltdO1xufSkgPT4ge1xuICAvLyBPcHRpb25zIC0gY29sb3IsIHNpemVzXG4gIC8vIENob2ljZXMgLSBjb2xvciAtPiBncmVlbiB8IHJlZCB8IGJsdWUgLCBzaXplcyAtIGxhcmdlIHwgbWVkaXVtIHwgc21hbGxcbiAgLy8gVmFyaWFudHMgLSBDb21iaW5hdGlvbnMgb2YgZGlmZmVyZW50IHByb2R1Y3Qgb3B0aW9ucyBhbmQgY2hvaWNlc1xuXG4gIC8vICAge1trZXk6IHN0cmluZ106IHN0cmluZ30gaXMgYW4gb2JqZWN0IHR5cGUgd2hlcmUgdGhlIGtleXMgYXJlIHN0cmluZ3MgYW5kIHRoZSB2YWx1ZXMgYXJlIGFsc28gc3RyaW5ncy5cbiAgLy8gICBUaGlzIGlzIGNhbGxlZCBhbiBpbmRleCBzaWduYXR1cmUgaW4gVHlwZVNjcmlwdC5cbiAgLy8gaW5pdGlhbCB2YWx1ZSBpcyBhbiBlbXB0eSBvYmplY3RcbiAgY29uc3QgW3NlbGVjdGVkT3B0aW9ucywgc2V0U2VsZWN0ZWRPcHRpb25zXSA9IHVzZVN0YXRlPHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XG4gIH0+KHt9KTtcblxuICBjb25zdCBoYW5kbGVPcHRpb25TZWxlY3QgPSAob3B0aW9uVHlwZTogc3RyaW5nLCBjaG9pY2U6IHN0cmluZykgPT4ge1xuICAgIHNldFNlbGVjdGVkT3B0aW9ucygocHJldikgPT4gKHsgLi4ucHJldiwgW29wdGlvblR5cGVdOiBjaG9pY2UgfSkpO1xuICB9O1xuXG4gIGNvbnNvbGUubG9nKHByb2R1Y3RWYXJpYW50cyk7XG5cbiAgY29uc3QgaXNWYXJpYW50SW5TdG9jayA9IChjaG9pY2VzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSA9PiB7XG4gICAgcmV0dXJuIHByb2R1Y3RWYXJpYW50cy5zb21lKCh2YXJpYW50KSA9PiB7XG4gICAgICBjb25zdCB2YXJpYW50Q2hvaWNlcyA9IHZhcmlhbnQuY2hvaWNlcztcbiAgICAgIGlmICghdmFyaWFudENob2ljZXMpIHJldHVybiBmYWxzZTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKGNob2ljZXMpLmV2ZXJ5KFxuICAgICAgICAgIChba2V5LCB2YWx1ZV0pID0+IHZhcmlhbnRDaG9pY2VzW2tleV0gPT09IHZhbHVlXG4gICAgICAgICkgJiYgdmFyaWFudC5zdG9jaz8uaW5TdG9jayAmJiB2YXJpYW50LnN0b2NrXG4gICAgICApO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnNvbGUubG9nKHNlbGVjdGVkT3B0aW9ucyk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgey8qIENob29zZSBDb2xvciAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsZXggZmxleC1jb2wgc3BhY2UteS0yXCI+XG4gICAgICAgIHtwcm9kdWN0T3B0aW9ucy5tYXAoKG9wdGlvbiwgaW5kZXgpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImZsZXgtY29sIGdhcC00XCI+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWJvbGQgdXBwZXJjYXNlIFwiPlxuICAgICAgICAgICAgICBDaG9vc2UgYSB7b3B0aW9uLm5hbWV9XG4gICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAge29wdGlvbi5jaG9pY2VzPy5tYXAoKGNob2ljZSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBkaXNhYmxlZCA9ICFpc1ZhcmlhbnRJblN0b2NrKHtcbiAgICAgICAgICAgICAgICAuLi5zZWxlY3RlZE9wdGlvbnMsXG4gICAgICAgICAgICAgICAgW29wdGlvbi5uYW1lIV06IGNob2ljZS5kZXNjcmlwdGlvbiEsXG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID1cbiAgICAgICAgICAgICAgICBzZWxlY3RlZE9wdGlvbnNbb3B0aW9uLm5hbWUhXSA9PT0gY2hvaWNlLmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZU9wdGlvblNlbGVjdChvcHRpb24ubmFtZSEsIGNob2ljZS5kZXNjcmlwdGlvbiEpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBrZXk9e2Nob2ljZS52YWx1ZX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7Y2hvaWNlLmRlc2NyaXB0aW9ufXtkaXNhYmxlZCAmJiBcImRpc2FibGVkXCJ9e3NlbGVjdGVkICYmIFwic2VsZWN0ZWRcIn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgICAgey8qIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtYm9sZCB1cHBlcmNhc2UgXCI+Q2hvb3NlIGEgQ29sb3I8L2gzPlxuXG4gICAgICAgIFxuXG5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtM1wiPlxuICAgICAgICAgICAgPGxpICBjbGFzc05hbWU9XCIgaC04IHctOCBiZy1ncmVlbi00MDAgcm91bmRlZC1mdWxsXCI+PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCIgaC04IHctOCBiZy1yZWQtNDAwIHJvdW5kZWQtZnVsbFwiPjwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiIGgtOCB3LTggYmctY3lhbi00MDAgcm91bmRlZC1mdWxsXCI+PC9saT5cbiAgICAgICAgPC91bD4gKi99XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIENob29zZSBzaXplICovfVxuXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCIgZmxleCBmbGV4LWNvbCBzcGFjZS15LTJcIj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ib2xkIHVwcGVyY2FzZSBcIj5DaG9vc2UgYSBTaXplPC9oMz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTNcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIiB0ZXh0LXhzIHRleHQtbGFtYSByaW5nLTEgcmluZy1sYW1hIHB4LTIgcHktMSByb3VuZGVkLW1kIFwiPlxuICAgICAgICAgICAgTGFyZ2VcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIiB0ZXh0LXhzIHRleHQtbGFtYSByaW5nLTEgcmluZy1sYW1hIHB4LTIgcHktMSByb3VuZGVkLW1kIFwiPlxuICAgICAgICAgICAgTWVkaXVtXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCIgdGV4dC14cyB0ZXh0LWxhbWEgcmluZy0xIHJpbmctbGFtYSBweC0yIHB5LTEgcm91bmRlZC1tZCBcIj5cbiAgICAgICAgICAgIFNtYWxsXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+ICovfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9taXplUHJvZHVjdHM7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkN1c3RvbWl6ZVByb2R1Y3RzIiwicHJvZHVjdElkIiwicHJvZHVjdFZhcmlhbnRzIiwicHJvZHVjdE9wdGlvbnMiLCJzZWxlY3RlZE9wdGlvbnMiLCJzZXRTZWxlY3RlZE9wdGlvbnMiLCJoYW5kbGVPcHRpb25TZWxlY3QiLCJvcHRpb25UeXBlIiwiY2hvaWNlIiwicHJldiIsImNvbnNvbGUiLCJsb2ciLCJpc1ZhcmlhbnRJblN0b2NrIiwiY2hvaWNlcyIsInNvbWUiLCJ2YXJpYW50IiwidmFyaWFudENob2ljZXMiLCJPYmplY3QiLCJlbnRyaWVzIiwiZXZlcnkiLCJrZXkiLCJ2YWx1ZSIsInN0b2NrIiwiaW5TdG9jayIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsIm9wdGlvbiIsImluZGV4IiwiaDMiLCJuYW1lIiwiZGlzYWJsZWQiLCJkZXNjcmlwdGlvbiIsInNlbGVjdGVkIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/CustomizeProducts.tsx\n"));

/***/ })

});