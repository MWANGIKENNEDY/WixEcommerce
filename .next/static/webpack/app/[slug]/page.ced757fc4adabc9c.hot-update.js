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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ChooseQuantity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChooseQuantity */ \"(app-pages-browser)/./src/components/ChooseQuantity.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst CustomizeProducts = (param)=>{\n    let { productId, productVariants, productOptions } = param;\n    var _selectedVariant_stock;\n    _s();\n    // Options - color, sizes\n    // Choices - color -> green | red | blue , sizes - large | medium | small\n    // Variants - Combinations of different product options and choices\n    //   {[key: string]: string} is an object type where the keys are strings and the values are also strings.\n    //   This is called an index signature in TypeScript.\n    // initial value is an empty object\n    const [selectedOptions, setSelectedOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const handleOptionSelect = (optionType, choice)=>{\n        setSelectedOptions((prev)=>({\n                ...prev,\n                [optionType]: choice\n            }));\n    };\n    console.log(productVariants);\n    const isVariantInStock = (choices)=>{\n        return productVariants.some((variant)=>{\n            var _variant_stock, _variant_stock1, _variant_stock2;\n            const variantChoices = variant.choices;\n            if (!variantChoices) return false;\n            return Object.entries(choices).every((param)=>{\n                let [key, value] = param;\n                return variantChoices[key] === value;\n            }) && ((_variant_stock = variant.stock) === null || _variant_stock === void 0 ? void 0 : _variant_stock.inStock) && ((_variant_stock1 = variant.stock) === null || _variant_stock1 === void 0 ? void 0 : _variant_stock1.quantity) && ((_variant_stock2 = variant.stock) === null || _variant_stock2 === void 0 ? void 0 : _variant_stock2.quantity) > 0;\n        });\n    };\n    console.log(selectedOptions);\n    const [selectedVariant, setSelectedVariant] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const variant = productVariants.find((v)=>{\n            const variantChoices = v.choices;\n            if (!variantChoices) return false;\n            return Object.entries(selectedOptions).every((param)=>{\n                let [key, value] = param;\n                return variantChoices[key] === value;\n            });\n        });\n    }, []);\n    console.log(\"selected variant is\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \" flex flex-col space-y-2\",\n            children: [\n                productOptions.map((option, index)=>{\n                    var _option_choices;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-col gap-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"text-xs font-bold uppercase \",\n                                children: [\n                                    \"Choose a \",\n                                    option.name\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/kennedy/Documents/Lama Dev/wix-ecommerce-main/src/components/CustomizeProducts.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"flex items-center gap-3\",\n                                children: (_option_choices = option.choices) === null || _option_choices === void 0 ? void 0 : _option_choices.map((choice)=>{\n                                    const disabled = !isVariantInStock({\n                                        ...selectedOptions,\n                                        [option.name]: choice.description\n                                    });\n                                    const selected = selectedOptions[option.name] === choice.description;\n                                    const clickHandler = disabled ? undefined : ()=>handleOptionSelect(option.name, choice.description);\n                                    return option.name === \"Color\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \" w-8 h-8 rounded-full ring-1 ring-gray-300  relative \",\n                                        style: {\n                                            backgroundColor: choice.value,\n                                            cursor: disabled ? \"not-allowed\" : \"pointer\"\n                                        },\n                                        onClick: clickHandler,\n                                        children: [\n                                            selected && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/kennedy/Documents/Lama Dev/wix-ecommerce-main/src/components/CustomizeProducts.tsx\",\n                                                lineNumber: 98,\n                                                columnNumber: 23\n                                            }, undefined),\n                                            disabled && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \" absolute w-10 h-[2px] bg-red-400 rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 \"\n                                            }, void 0, false, {\n                                                fileName: \"/home/kennedy/Documents/Lama Dev/wix-ecommerce-main/src/components/CustomizeProducts.tsx\",\n                                                lineNumber: 101,\n                                                columnNumber: 23\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/kennedy/Documents/Lama Dev/wix-ecommerce-main/src/components/CustomizeProducts.tsx\",\n                                        lineNumber: 89,\n                                        columnNumber: 19\n                                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \" ring-1 ring-lama text-lama rounded-md py-1 px-4 text-sm\",\n                                        style: {\n                                            cursor: disabled ? \"not-allowed\" : \"pointer\",\n                                            backgroundColor: selected ? \"#f35c7a\" : disabled ? \"#FBCFE8\" : \"white\",\n                                            color: selected || disabled ? \"white\" : \"#f35c7a\",\n                                            boxShadow: disabled ? \"none\" : \"\"\n                                        },\n                                        onClick: clickHandler,\n                                        children: choice.description\n                                    }, void 0, false, {\n                                        fileName: \"/home/kennedy/Documents/Lama Dev/wix-ecommerce-main/src/components/CustomizeProducts.tsx\",\n                                        lineNumber: 105,\n                                        columnNumber: 19\n                                    }, undefined);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/home/kennedy/Documents/Lama Dev/wix-ecommerce-main/src/components/CustomizeProducts.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"/home/kennedy/Documents/Lama Dev/wix-ecommerce-main/src/components/CustomizeProducts.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 11\n                    }, undefined);\n                }),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ChooseQuantity__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    productId: productId,\n                    variantId: (selectedVariant === null || selectedVariant === void 0 ? void 0 : selectedVariant._id) || \"00000000-0000-0000-0000-000000000000\",\n                    stockNumber: (selectedVariant === null || selectedVariant === void 0 ? void 0 : (_selectedVariant_stock = selectedVariant.stock) === null || _selectedVariant_stock === void 0 ? void 0 : _selectedVariant_stock.quantity) || 0\n                }, void 0, false, {\n                    fileName: \"/home/kennedy/Documents/Lama Dev/wix-ecommerce-main/src/components/CustomizeProducts.tsx\",\n                    lineNumber: 127,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/kennedy/Documents/Lama Dev/wix-ecommerce-main/src/components/CustomizeProducts.tsx\",\n            lineNumber: 68,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(CustomizeProducts, \"l7le0ekeiN8ZBBuM2p8J1n4DXn0=\");\n_c = CustomizeProducts;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomizeProducts);\nvar _c;\n$RefreshReg$(_c, \"CustomizeProducts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0N1c3RvbWl6ZVByb2R1Y3RzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR21EO0FBQ0w7QUFFOUMsTUFBTUksb0JBQW9CO1FBQUMsRUFDekJDLFNBQVMsRUFDVEMsZUFBZSxFQUNmQyxjQUFjLEVBS2Y7UUFnSHFJQzs7SUEvR3BJLHlCQUF5QjtJQUN6Qix5RUFBeUU7SUFDekUsbUVBQW1FO0lBRW5FLDBHQUEwRztJQUMxRyxxREFBcUQ7SUFDckQsbUNBQW1DO0lBQ25DLE1BQU0sQ0FBQ0MsaUJBQWlCQyxtQkFBbUIsR0FBR1IsK0NBQVFBLENBRW5ELENBQUM7SUFFSixNQUFNUyxxQkFBcUIsQ0FBQ0MsWUFBb0JDO1FBQzlDSCxtQkFBbUIsQ0FBQ0ksT0FBVTtnQkFBRSxHQUFHQSxJQUFJO2dCQUFFLENBQUNGLFdBQVcsRUFBRUM7WUFBTztJQUNoRTtJQUVBRSxRQUFRQyxHQUFHLENBQUNWO0lBRVosTUFBTVcsbUJBQW1CLENBQUNDO1FBQ3hCLE9BQU9aLGdCQUFnQmEsSUFBSSxDQUFDLENBQUNDO2dCQU96QkEsZ0JBQ0FBLGlCQUNBQTtZQVJGLE1BQU1DLGlCQUFpQkQsUUFBUUYsT0FBTztZQUN0QyxJQUFJLENBQUNHLGdCQUFnQixPQUFPO1lBQzVCLE9BQ0VDLE9BQU9DLE9BQU8sQ0FBQ0wsU0FBU00sS0FBSyxDQUMzQjtvQkFBQyxDQUFDQyxLQUFLQyxNQUFNO3VCQUFLTCxjQUFjLENBQUNJLElBQUksS0FBS0M7b0JBRTVDTixpQkFBQUEsUUFBUU8sS0FBSyxjQUFiUCxxQ0FBQUEsZUFBZVEsT0FBTyxPQUN0QlIsa0JBQUFBLFFBQVFPLEtBQUssY0FBYlAsc0NBQUFBLGdCQUFlUyxRQUFRLEtBQ3ZCVCxFQUFBQSxrQkFBQUEsUUFBUU8sS0FBSyxjQUFiUCxzQ0FBQUEsZ0JBQWVTLFFBQVEsSUFBRztRQUU5QjtJQUNGO0lBRUFkLFFBQVFDLEdBQUcsQ0FBQ1A7SUFFWixNQUFNLENBQUNELGlCQUFpQnNCLG1CQUFtQixHQUFHNUIsK0NBQVFBO0lBRXRERCxnREFBU0EsQ0FBQztRQUNSLE1BQU1tQixVQUFVZCxnQkFBZ0J5QixJQUFJLENBQUMsQ0FBQ0M7WUFDcEMsTUFBTVgsaUJBQWlCVyxFQUFFZCxPQUFPO1lBQ2hDLElBQUksQ0FBQ0csZ0JBQWdCLE9BQU87WUFDNUIsT0FBT0MsT0FBT0MsT0FBTyxDQUFDZCxpQkFBaUJlLEtBQUssQ0FDMUM7b0JBQUMsQ0FBQ0MsS0FBS0MsTUFBTTt1QkFBS0wsY0FBYyxDQUFDSSxJQUFJLEtBQUtDOztRQUU5QztJQUNGLEdBQUcsRUFBRTtJQUdMWCxRQUFRQyxHQUFHLENBQUM7SUFFWixxQkFDRTtrQkFFRSw0RUFBQ2lCO1lBQUlDLFdBQVU7O2dCQUNaM0IsZUFBZTRCLEdBQUcsQ0FBQyxDQUFDQyxRQUFRQzt3QkFPdEJEO3lDQU5MLDhEQUFDSDt3QkFBZ0JDLFdBQVU7OzBDQUN6Qiw4REFBQ0k7Z0NBQUdKLFdBQVU7O29DQUErQjtvQ0FDakNFLE9BQU9HLElBQUk7Ozs7Ozs7MENBR3ZCLDhEQUFDQztnQ0FBR04sV0FBVTsyQ0FDWEUsa0JBQUFBLE9BQU9sQixPQUFPLGNBQWRrQixzQ0FBQUEsZ0JBQWdCRCxHQUFHLENBQUMsQ0FBQ3RCO29DQUNwQixNQUFNNEIsV0FBVyxDQUFDeEIsaUJBQWlCO3dDQUNqQyxHQUFHUixlQUFlO3dDQUNsQixDQUFDMkIsT0FBT0csSUFBSSxDQUFFLEVBQUUxQixPQUFPNkIsV0FBVztvQ0FDcEM7b0NBRUEsTUFBTUMsV0FDSmxDLGVBQWUsQ0FBQzJCLE9BQU9HLElBQUksQ0FBRSxLQUFLMUIsT0FBTzZCLFdBQVc7b0NBRXRELE1BQU1FLGVBQWVILFdBQ2pCSSxZQUNBLElBQU1sQyxtQkFBbUJ5QixPQUFPRyxJQUFJLEVBQUcxQixPQUFPNkIsV0FBVztvQ0FDN0QsT0FBT04sT0FBT0csSUFBSSxLQUFLLHdCQUNyQiw4REFBQ087d0NBQ0NaLFdBQVU7d0NBQ1ZhLE9BQU87NENBQ0xDLGlCQUFpQm5DLE9BQU9hLEtBQUs7NENBQzdCdUIsUUFBUVIsV0FBVyxnQkFBZ0I7d0NBQ3JDO3dDQUNBUyxTQUFTTjs7NENBRVJELDBCQUNDLDhEQUFDVjtnREFBSUMsV0FBVTs7Ozs7OzRDQUVoQk8sMEJBQ0MsOERBQUNSO2dEQUFJQyxXQUFVOzs7Ozs7Ozs7OztrRUFJbkIsOERBQUNZO3dDQUNDWixXQUFVO3dDQUNWYSxPQUFPOzRDQUNMRSxRQUFRUixXQUFXLGdCQUFnQjs0Q0FDbkNPLGlCQUFpQkwsV0FDYixZQUNBRixXQUNBLFlBQ0E7NENBQ0pVLE9BQU9SLFlBQVlGLFdBQVcsVUFBVTs0Q0FDeENXLFdBQVdYLFdBQVcsU0FBUzt3Q0FDakM7d0NBQ0FTLFNBQVNOO2tEQUVSL0IsT0FBTzZCLFdBQVc7Ozs7OztnQ0FHekI7Ozs7Ozs7dUJBcERNTDs7Ozs7OzhCQXlEWiw4REFBQ2xDLHVEQUFjQTtvQkFBQ0UsV0FBV0E7b0JBQVdnRCxXQUFXN0MsQ0FBQUEsNEJBQUFBLHNDQUFBQSxnQkFBaUI4QyxHQUFHLEtBQUk7b0JBQXdDQyxhQUFhL0MsQ0FBQUEsNEJBQUFBLHVDQUFBQSx5QkFBQUEsZ0JBQWlCbUIsS0FBSyxjQUF0Qm5CLDZDQUFBQSx1QkFBd0JxQixRQUFRLEtBQUk7Ozs7Ozs7Ozs7Ozs7QUErQjFLO0dBdkpNekI7S0FBQUE7QUF5Sk4sK0RBQWVBLGlCQUFpQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DdXN0b21pemVQcm9kdWN0cy50c3g/ODFhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgcHJvZHVjdHMgfSBmcm9tIFwiQHdpeC9zdG9yZXNcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ2hvb3NlUXVhbnRpdHkgZnJvbSBcIi4vQ2hvb3NlUXVhbnRpdHlcIjtcblxuY29uc3QgQ3VzdG9taXplUHJvZHVjdHMgPSAoe1xuICBwcm9kdWN0SWQsXG4gIHByb2R1Y3RWYXJpYW50cyxcbiAgcHJvZHVjdE9wdGlvbnMsXG59OiB7XG4gIHByb2R1Y3RJZDogc3RyaW5nO1xuICBwcm9kdWN0VmFyaWFudHM6IHByb2R1Y3RzLlZhcmlhbnRbXTtcbiAgcHJvZHVjdE9wdGlvbnM6IHByb2R1Y3RzLlByb2R1Y3RPcHRpb25bXTtcbn0pID0+IHtcbiAgLy8gT3B0aW9ucyAtIGNvbG9yLCBzaXplc1xuICAvLyBDaG9pY2VzIC0gY29sb3IgLT4gZ3JlZW4gfCByZWQgfCBibHVlICwgc2l6ZXMgLSBsYXJnZSB8IG1lZGl1bSB8IHNtYWxsXG4gIC8vIFZhcmlhbnRzIC0gQ29tYmluYXRpb25zIG9mIGRpZmZlcmVudCBwcm9kdWN0IG9wdGlvbnMgYW5kIGNob2ljZXNcblxuICAvLyAgIHtba2V5OiBzdHJpbmddOiBzdHJpbmd9IGlzIGFuIG9iamVjdCB0eXBlIHdoZXJlIHRoZSBrZXlzIGFyZSBzdHJpbmdzIGFuZCB0aGUgdmFsdWVzIGFyZSBhbHNvIHN0cmluZ3MuXG4gIC8vICAgVGhpcyBpcyBjYWxsZWQgYW4gaW5kZXggc2lnbmF0dXJlIGluIFR5cGVTY3JpcHQuXG4gIC8vIGluaXRpYWwgdmFsdWUgaXMgYW4gZW1wdHkgb2JqZWN0XG4gIGNvbnN0IFtzZWxlY3RlZE9wdGlvbnMsIHNldFNlbGVjdGVkT3B0aW9uc10gPSB1c2VTdGF0ZTx7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nO1xuICB9Pih7fSk7XG5cbiAgY29uc3QgaGFuZGxlT3B0aW9uU2VsZWN0ID0gKG9wdGlvblR5cGU6IHN0cmluZywgY2hvaWNlOiBzdHJpbmcpID0+IHtcbiAgICBzZXRTZWxlY3RlZE9wdGlvbnMoKHByZXYpID0+ICh7IC4uLnByZXYsIFtvcHRpb25UeXBlXTogY2hvaWNlIH0pKTtcbiAgfTtcblxuICBjb25zb2xlLmxvZyhwcm9kdWN0VmFyaWFudHMpO1xuXG4gIGNvbnN0IGlzVmFyaWFudEluU3RvY2sgPSAoY2hvaWNlczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkgPT4ge1xuICAgIHJldHVybiBwcm9kdWN0VmFyaWFudHMuc29tZSgodmFyaWFudCkgPT4ge1xuICAgICAgY29uc3QgdmFyaWFudENob2ljZXMgPSB2YXJpYW50LmNob2ljZXM7XG4gICAgICBpZiAoIXZhcmlhbnRDaG9pY2VzKSByZXR1cm4gZmFsc2U7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBPYmplY3QuZW50cmllcyhjaG9pY2VzKS5ldmVyeShcbiAgICAgICAgICAoW2tleSwgdmFsdWVdKSA9PiB2YXJpYW50Q2hvaWNlc1trZXldID09PSB2YWx1ZVxuICAgICAgICApICYmXG4gICAgICAgIHZhcmlhbnQuc3RvY2s/LmluU3RvY2sgJiZcbiAgICAgICAgdmFyaWFudC5zdG9jaz8ucXVhbnRpdHkgJiZcbiAgICAgICAgdmFyaWFudC5zdG9jaz8ucXVhbnRpdHkgPiAwXG4gICAgICApO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnNvbGUubG9nKHNlbGVjdGVkT3B0aW9ucyk7XG5cbiAgY29uc3QgW3NlbGVjdGVkVmFyaWFudCwgc2V0U2VsZWN0ZWRWYXJpYW50XSA9IHVzZVN0YXRlPHByb2R1Y3RzLlZhcmlhbnQ+KCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB2YXJpYW50ID0gcHJvZHVjdFZhcmlhbnRzLmZpbmQoKHYpID0+IHtcbiAgICAgIGNvbnN0IHZhcmlhbnRDaG9pY2VzID0gdi5jaG9pY2VzO1xuICAgICAgaWYgKCF2YXJpYW50Q2hvaWNlcykgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKHNlbGVjdGVkT3B0aW9ucykuZXZlcnkoXG4gICAgICAgIChba2V5LCB2YWx1ZV0pID0+IHZhcmlhbnRDaG9pY2VzW2tleV0gPT09IHZhbHVlXG4gICAgICApO1xuICAgIH0pO1xuICB9LCBbXSk7XG5cblxuICBjb25zb2xlLmxvZyhcInNlbGVjdGVkIHZhcmlhbnQgaXNcIilcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7LyogQ2hvb3NlIENvbG9yICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZmxleCBmbGV4LWNvbCBzcGFjZS15LTJcIj5cbiAgICAgICAge3Byb2R1Y3RPcHRpb25zLm1hcCgob3B0aW9uLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiZmxleC1jb2wgZ2FwLTRcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtYm9sZCB1cHBlcmNhc2UgXCI+XG4gICAgICAgICAgICAgIENob29zZSBhIHtvcHRpb24ubmFtZX1cbiAgICAgICAgICAgIDwvaDM+XG5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxuICAgICAgICAgICAgICB7b3B0aW9uLmNob2ljZXM/Lm1hcCgoY2hvaWNlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGlzYWJsZWQgPSAhaXNWYXJpYW50SW5TdG9jayh7XG4gICAgICAgICAgICAgICAgICAuLi5zZWxlY3RlZE9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICBbb3B0aW9uLm5hbWUhXTogY2hvaWNlLmRlc2NyaXB0aW9uISxcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID1cbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uc1tvcHRpb24ubmFtZSFdID09PSBjaG9pY2UuZGVzY3JpcHRpb247XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjbGlja0hhbmRsZXIgPSBkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgIDogKCkgPT4gaGFuZGxlT3B0aW9uU2VsZWN0KG9wdGlvbi5uYW1lISwgY2hvaWNlLmRlc2NyaXB0aW9uISk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi5uYW1lID09PSBcIkNvbG9yXCIgPyAoXG4gICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIHctOCBoLTggcm91bmRlZC1mdWxsIHJpbmctMSByaW5nLWdyYXktMzAwICByZWxhdGl2ZSBcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY2hvaWNlLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogZGlzYWJsZWQgPyBcIm5vdC1hbGxvd2VkXCIgOiBcInBvaW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2xpY2tIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWQgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdy0xMCBoLTEwIHJvdW5kZWQtZnVsbCByaW5nLTIgdG9wLTEvMiBsZWZ0LTEvMiB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS14LTEvMiAtdHJhbnNsYXRlLXktMS8yXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIHtkaXNhYmxlZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgYWJzb2x1dGUgdy0xMCBoLVsycHhdIGJnLXJlZC00MDAgcm90YXRlLTQ1IHRvcC0xLzIgbGVmdC0xLzIgdHJhbnNmb3JtIC10cmFuc2xhdGUteC0xLzIgLXRyYW5zbGF0ZS15LTEvMiBcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgcmluZy0xIHJpbmctbGFtYSB0ZXh0LWxhbWEgcm91bmRlZC1tZCBweS0xIHB4LTQgdGV4dC1zbVwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBkaXNhYmxlZCA/IFwibm90LWFsbG93ZWRcIiA6IFwicG9pbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCIjZjM1YzdhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCIjRkJDRkU4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBzZWxlY3RlZCB8fCBkaXNhYmxlZCA/IFwid2hpdGVcIiA6IFwiI2YzNWM3YVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGJveFNoYWRvdzogZGlzYWJsZWQgPyBcIm5vbmVcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NsaWNrSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2Nob2ljZS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cblxuICAgICAgICA8Q2hvb3NlUXVhbnRpdHkgcHJvZHVjdElkPXtwcm9kdWN0SWR9IHZhcmlhbnRJZD17c2VsZWN0ZWRWYXJpYW50Py5faWQgfHwgXCIwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDBcIn0gc3RvY2tOdW1iZXI9e3NlbGVjdGVkVmFyaWFudD8uc3RvY2s/LnF1YW50aXR5IHx8IDB9IC8+XG4gICAgICAgIHsvKiA8aDMgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWJvbGQgdXBwZXJjYXNlIFwiPkNob29zZSBhIENvbG9yPC9oMz5cblxuICAgICAgICBcblxuXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTNcIj5cbiAgICAgICAgICAgIDxsaSAgY2xhc3NOYW1lPVwiIGgtOCB3LTggYmctZ3JlZW4tNDAwIHJvdW5kZWQtZnVsbFwiPjwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiIGgtOCB3LTggYmctcmVkLTQwMCByb3VuZGVkLWZ1bGxcIj48L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIiBoLTggdy04IGJnLWN5YW4tNDAwIHJvdW5kZWQtZnVsbFwiPjwvbGk+XG4gICAgICAgIDwvdWw+ICovfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBDaG9vc2Ugc2l6ZSAqL31cblxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiIGZsZXggZmxleC1jb2wgc3BhY2UteS0yXCI+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtYm9sZCB1cHBlcmNhc2UgXCI+Q2hvb3NlIGEgU2l6ZTwvaDM+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0zXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCIgdGV4dC14cyB0ZXh0LWxhbWEgcmluZy0xIHJpbmctbGFtYSBweC0yIHB5LTEgcm91bmRlZC1tZCBcIj5cbiAgICAgICAgICAgIExhcmdlXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCIgdGV4dC14cyB0ZXh0LWxhbWEgcmluZy0xIHJpbmctbGFtYSBweC0yIHB5LTEgcm91bmRlZC1tZCBcIj5cbiAgICAgICAgICAgIE1lZGl1bVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiIHRleHQteHMgdGV4dC1sYW1hIHJpbmctMSByaW5nLWxhbWEgcHgtMiBweS0xIHJvdW5kZWQtbWQgXCI+XG4gICAgICAgICAgICBTbWFsbFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PiAqL31cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbWl6ZVByb2R1Y3RzO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDaG9vc2VRdWFudGl0eSIsIkN1c3RvbWl6ZVByb2R1Y3RzIiwicHJvZHVjdElkIiwicHJvZHVjdFZhcmlhbnRzIiwicHJvZHVjdE9wdGlvbnMiLCJzZWxlY3RlZFZhcmlhbnQiLCJzZWxlY3RlZE9wdGlvbnMiLCJzZXRTZWxlY3RlZE9wdGlvbnMiLCJoYW5kbGVPcHRpb25TZWxlY3QiLCJvcHRpb25UeXBlIiwiY2hvaWNlIiwicHJldiIsImNvbnNvbGUiLCJsb2ciLCJpc1ZhcmlhbnRJblN0b2NrIiwiY2hvaWNlcyIsInNvbWUiLCJ2YXJpYW50IiwidmFyaWFudENob2ljZXMiLCJPYmplY3QiLCJlbnRyaWVzIiwiZXZlcnkiLCJrZXkiLCJ2YWx1ZSIsInN0b2NrIiwiaW5TdG9jayIsInF1YW50aXR5Iiwic2V0U2VsZWN0ZWRWYXJpYW50IiwiZmluZCIsInYiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJvcHRpb24iLCJpbmRleCIsImgzIiwibmFtZSIsInVsIiwiZGlzYWJsZWQiLCJkZXNjcmlwdGlvbiIsInNlbGVjdGVkIiwiY2xpY2tIYW5kbGVyIiwidW5kZWZpbmVkIiwibGkiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImN1cnNvciIsIm9uQ2xpY2siLCJjb2xvciIsImJveFNoYWRvdyIsInZhcmlhbnRJZCIsIl9pZCIsInN0b2NrTnVtYmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/CustomizeProducts.tsx\n"));

/***/ })

});