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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst CustomizeProducts = (param)=>{\n    let { productId, productVariants, productOptions } = param;\n    _s();\n    // Options - color, sizes\n    // Choices - color -> green | red | blue , sizes - large | medium | small\n    // Variants - Combinations of different product options and choices\n    //   {[key: string]: string} is an object type where the keys are strings and the values are also strings.\n    //   This is called an index signature in TypeScript.\n    // initial value is an empty object\n    const [selectedOptions, setSelectedOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const handleOptionSelect = (optionType, choice)=>{\n        setSelectedOptions((prev)=>({\n                ...prev,\n                [optionType]: choice\n            }));\n    };\n    console.log(productVariants);\n    const isVariantInStock = (choices)=>{\n        return productVariants.some((variant)=>{\n            var _variant_stock, _variant_stock1, _variant_stock2;\n            const variantChoices = variant.choices;\n            if (!variantChoices) return false;\n            return Object.entries(choices).every((param)=>{\n                let [key, value] = param;\n                return variantChoices[key] === value;\n            }) && ((_variant_stock = variant.stock) === null || _variant_stock === void 0 ? void 0 : _variant_stock.inStock) && ((_variant_stock1 = variant.stock) === null || _variant_stock1 === void 0 ? void 0 : _variant_stock1.quantity) && ((_variant_stock2 = variant.stock) === null || _variant_stock2 === void 0 ? void 0 : _variant_stock2.quantity) > 0;\n        });\n    };\n    console.log(selectedOptions);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \" flex flex-col space-y-2\",\n            children: productOptions.map((option, index)=>{\n                var _option_choices;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex-col gap-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"text-xs font-bold uppercase \",\n                            children: [\n                                \"Choose a \",\n                                option.name\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/kennedy/Documents/Lama Dev/wix-ecommerce-main/src/components/CustomizeProducts.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 13\n                        }, undefined),\n                        (_option_choices = option.choices) === null || _option_choices === void 0 ? void 0 : _option_choices.map((choice)=>{\n                            const disabled = !isVariantInStock({\n                                ...selectedOptions,\n                                [option.name]: choice.description\n                            });\n                            const selected = selectedOptions[option.name] === choice.description;\n                            const clickHandler = disabled ? undefined : ()=>handleOptionSelect(option.name, choice.description);\n                            return option.name === \"Color\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \" w-8 -h-8 rounded-full ring-1 ring-gray-300  relative \",\n                                style: {\n                                    backgroundColor: choice.value,\n                                    cursor: disabled ? \"not-allowed\" : \"pointer\"\n                                },\n                                children: [\n                                    selected && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/kennedy/Documents/Lama Dev/wix-ecommerce-main/src/components/CustomizeProducts.tsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 31\n                                    }, undefined),\n                                    disabled && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \" absolute w-10 h-[2px] bg-red-400 rotate-45 \"\n                                    }, void 0, false, {\n                                        fileName: \"/home/kennedy/Documents/Lama Dev/wix-ecommerce-main/src/components/CustomizeProducts.tsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 30\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/kennedy/Documents/Lama Dev/wix-ecommerce-main/src/components/CustomizeProducts.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 17\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \" ring-1 ring-lama text-lama rounded-md py-1 px-4 text-sm cursor-pointer\",\n                                children: choice.description\n                            }, void 0, false, {\n                                fileName: \"/home/kennedy/Documents/Lama Dev/wix-ecommerce-main/src/components/CustomizeProducts.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 17\n                            }, undefined);\n                        })\n                    ]\n                }, index, true, {\n                    fileName: \"/home/kennedy/Documents/Lama Dev/wix-ecommerce-main/src/components/CustomizeProducts.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 11\n                }, undefined);\n            })\n        }, void 0, false, {\n            fileName: \"/home/kennedy/Documents/Lama Dev/wix-ecommerce-main/src/components/CustomizeProducts.tsx\",\n            lineNumber: 52,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(CustomizeProducts, \"dLRHIO/SyIp9lHMf8Crrz2iKqk4=\");\n_c = CustomizeProducts;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomizeProducts);\nvar _c;\n$RefreshReg$(_c, \"CustomizeProducts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0N1c3RvbWl6ZVByb2R1Y3RzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFHd0M7QUFFeEMsTUFBTUUsb0JBQW9CO1FBQUMsRUFDekJDLFNBQVMsRUFDVEMsZUFBZSxFQUNmQyxjQUFjLEVBS2Y7O0lBQ0MseUJBQXlCO0lBQ3pCLHlFQUF5RTtJQUN6RSxtRUFBbUU7SUFFbkUsMEdBQTBHO0lBQzFHLHFEQUFxRDtJQUNyRCxtQ0FBbUM7SUFDbkMsTUFBTSxDQUFDQyxpQkFBaUJDLG1CQUFtQixHQUFHTiwrQ0FBUUEsQ0FFbkQsQ0FBQztJQUVKLE1BQU1PLHFCQUFxQixDQUFDQyxZQUFvQkM7UUFDOUNILG1CQUFtQixDQUFDSSxPQUFVO2dCQUFFLEdBQUdBLElBQUk7Z0JBQUUsQ0FBQ0YsV0FBVyxFQUFFQztZQUFPO0lBQ2hFO0lBRUFFLFFBQVFDLEdBQUcsQ0FBQ1Q7SUFFWixNQUFNVSxtQkFBbUIsQ0FBQ0M7UUFDeEIsT0FBT1gsZ0JBQWdCWSxJQUFJLENBQUMsQ0FBQ0M7Z0JBT3pCQSxnQkFDQUEsaUJBQ0FBO1lBUkYsTUFBTUMsaUJBQWlCRCxRQUFRRixPQUFPO1lBQ3RDLElBQUksQ0FBQ0csZ0JBQWdCLE9BQU87WUFDNUIsT0FDRUMsT0FBT0MsT0FBTyxDQUFDTCxTQUFTTSxLQUFLLENBQzNCO29CQUFDLENBQUNDLEtBQUtDLE1BQU07dUJBQUtMLGNBQWMsQ0FBQ0ksSUFBSSxLQUFLQztvQkFFNUNOLGlCQUFBQSxRQUFRTyxLQUFLLGNBQWJQLHFDQUFBQSxlQUFlUSxPQUFPLE9BQ3RCUixrQkFBQUEsUUFBUU8sS0FBSyxjQUFiUCxzQ0FBQUEsZ0JBQWVTLFFBQVEsS0FDdkJULEVBQUFBLGtCQUFBQSxRQUFRTyxLQUFLLGNBQWJQLHNDQUFBQSxnQkFBZVMsUUFBUSxJQUFHO1FBRTlCO0lBQ0Y7SUFFQWQsUUFBUUMsR0FBRyxDQUFDUDtJQUVaLHFCQUNFO2tCQUVFLDRFQUFDcUI7WUFBSUMsV0FBVTtzQkFDWnZCLGVBQWV3QixHQUFHLENBQUMsQ0FBQ0MsUUFBUUM7b0JBS3hCRDtxQ0FKSCw4REFBQ0g7b0JBQWdCQyxXQUFVOztzQ0FDekIsOERBQUNJOzRCQUFHSixXQUFVOztnQ0FBK0I7Z0NBQ2pDRSxPQUFPRyxJQUFJOzs7Ozs7O3lCQUV0Qkgsa0JBQUFBLE9BQU9mLE9BQU8sY0FBZGUsc0NBQUFBLGdCQUFnQkQsR0FBRyxDQUFDLENBQUNuQjs0QkFDcEIsTUFBTXdCLFdBQVcsQ0FBQ3BCLGlCQUFpQjtnQ0FDakMsR0FBR1IsZUFBZTtnQ0FDbEIsQ0FBQ3dCLE9BQU9HLElBQUksQ0FBRSxFQUFFdkIsT0FBT3lCLFdBQVc7NEJBQ3BDOzRCQUVBLE1BQU1DLFdBQ0o5QixlQUFlLENBQUN3QixPQUFPRyxJQUFJLENBQUUsS0FBS3ZCLE9BQU95QixXQUFXOzRCQUV0RCxNQUFNRSxlQUFlSCxXQUNqQkksWUFDQSxJQUFNOUIsbUJBQW1Cc0IsT0FBT0csSUFBSSxFQUFHdkIsT0FBT3lCLFdBQVc7NEJBQzdELE9BQU9MLE9BQU9HLElBQUksS0FBSyx3QkFDckIsOERBQUNNO2dDQUFHWCxXQUFVO2dDQUF5RFksT0FBTztvQ0FDNUVDLGlCQUFpQi9CLE9BQU9hLEtBQUs7b0NBQzdCbUIsUUFBUVIsV0FBVyxnQkFBZ0I7Z0NBRXJDOztvQ0FDRUUsMEJBQVksOERBQUNUO3dDQUFJQyxXQUFVOzs7Ozs7b0NBQzVCTSwwQkFBWSw4REFBQ1A7d0NBQUlDLFdBQVU7Ozs7Ozs7Ozs7OzBEQUc1Qiw4REFBQ1c7Z0NBQUdYLFdBQVU7MENBQ1hsQixPQUFPeUIsV0FBVzs7Ozs7O3dCQUd6Qjs7bUJBOUJRSjs7Ozs7Ozs7Ozs7O0FBK0RwQjtHQS9HTTdCO0tBQUFBO0FBaUhOLCtEQUFlQSxpQkFBaUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ3VzdG9taXplUHJvZHVjdHMudHN4PzgxYWQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHByb2R1Y3RzIH0gZnJvbSBcIkB3aXgvc3RvcmVzXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgQ3VzdG9taXplUHJvZHVjdHMgPSAoe1xuICBwcm9kdWN0SWQsXG4gIHByb2R1Y3RWYXJpYW50cyxcbiAgcHJvZHVjdE9wdGlvbnMsXG59OiB7XG4gIHByb2R1Y3RJZDogc3RyaW5nO1xuICBwcm9kdWN0VmFyaWFudHM6IHByb2R1Y3RzLlZhcmlhbnRbXTtcbiAgcHJvZHVjdE9wdGlvbnM6IHByb2R1Y3RzLlByb2R1Y3RPcHRpb25bXTtcbn0pID0+IHtcbiAgLy8gT3B0aW9ucyAtIGNvbG9yLCBzaXplc1xuICAvLyBDaG9pY2VzIC0gY29sb3IgLT4gZ3JlZW4gfCByZWQgfCBibHVlICwgc2l6ZXMgLSBsYXJnZSB8IG1lZGl1bSB8IHNtYWxsXG4gIC8vIFZhcmlhbnRzIC0gQ29tYmluYXRpb25zIG9mIGRpZmZlcmVudCBwcm9kdWN0IG9wdGlvbnMgYW5kIGNob2ljZXNcblxuICAvLyAgIHtba2V5OiBzdHJpbmddOiBzdHJpbmd9IGlzIGFuIG9iamVjdCB0eXBlIHdoZXJlIHRoZSBrZXlzIGFyZSBzdHJpbmdzIGFuZCB0aGUgdmFsdWVzIGFyZSBhbHNvIHN0cmluZ3MuXG4gIC8vICAgVGhpcyBpcyBjYWxsZWQgYW4gaW5kZXggc2lnbmF0dXJlIGluIFR5cGVTY3JpcHQuXG4gIC8vIGluaXRpYWwgdmFsdWUgaXMgYW4gZW1wdHkgb2JqZWN0XG4gIGNvbnN0IFtzZWxlY3RlZE9wdGlvbnMsIHNldFNlbGVjdGVkT3B0aW9uc10gPSB1c2VTdGF0ZTx7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nO1xuICB9Pih7fSk7XG5cbiAgY29uc3QgaGFuZGxlT3B0aW9uU2VsZWN0ID0gKG9wdGlvblR5cGU6IHN0cmluZywgY2hvaWNlOiBzdHJpbmcpID0+IHtcbiAgICBzZXRTZWxlY3RlZE9wdGlvbnMoKHByZXYpID0+ICh7IC4uLnByZXYsIFtvcHRpb25UeXBlXTogY2hvaWNlIH0pKTtcbiAgfTtcblxuICBjb25zb2xlLmxvZyhwcm9kdWN0VmFyaWFudHMpO1xuXG4gIGNvbnN0IGlzVmFyaWFudEluU3RvY2sgPSAoY2hvaWNlczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkgPT4ge1xuICAgIHJldHVybiBwcm9kdWN0VmFyaWFudHMuc29tZSgodmFyaWFudCkgPT4ge1xuICAgICAgY29uc3QgdmFyaWFudENob2ljZXMgPSB2YXJpYW50LmNob2ljZXM7XG4gICAgICBpZiAoIXZhcmlhbnRDaG9pY2VzKSByZXR1cm4gZmFsc2U7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBPYmplY3QuZW50cmllcyhjaG9pY2VzKS5ldmVyeShcbiAgICAgICAgICAoW2tleSwgdmFsdWVdKSA9PiB2YXJpYW50Q2hvaWNlc1trZXldID09PSB2YWx1ZVxuICAgICAgICApICYmXG4gICAgICAgIHZhcmlhbnQuc3RvY2s/LmluU3RvY2sgJiZcbiAgICAgICAgdmFyaWFudC5zdG9jaz8ucXVhbnRpdHkgJiZcbiAgICAgICAgdmFyaWFudC5zdG9jaz8ucXVhbnRpdHkgPiAwXG4gICAgICApO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnNvbGUubG9nKHNlbGVjdGVkT3B0aW9ucyk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgey8qIENob29zZSBDb2xvciAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsZXggZmxleC1jb2wgc3BhY2UteS0yXCI+XG4gICAgICAgIHtwcm9kdWN0T3B0aW9ucy5tYXAoKG9wdGlvbiwgaW5kZXgpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImZsZXgtY29sIGdhcC00XCI+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWJvbGQgdXBwZXJjYXNlIFwiPlxuICAgICAgICAgICAgICBDaG9vc2UgYSB7b3B0aW9uLm5hbWV9XG4gICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAge29wdGlvbi5jaG9pY2VzPy5tYXAoKGNob2ljZSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBkaXNhYmxlZCA9ICFpc1ZhcmlhbnRJblN0b2NrKHtcbiAgICAgICAgICAgICAgICAuLi5zZWxlY3RlZE9wdGlvbnMsXG4gICAgICAgICAgICAgICAgW29wdGlvbi5uYW1lIV06IGNob2ljZS5kZXNjcmlwdGlvbiEsXG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID1cbiAgICAgICAgICAgICAgICBzZWxlY3RlZE9wdGlvbnNbb3B0aW9uLm5hbWUhXSA9PT0gY2hvaWNlLmRlc2NyaXB0aW9uO1xuXG4gICAgICAgICAgICAgIGNvbnN0IGNsaWNrSGFuZGxlciA9IGRpc2FibGVkXG4gICAgICAgICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICA6ICgpID0+IGhhbmRsZU9wdGlvblNlbGVjdChvcHRpb24ubmFtZSEsIGNob2ljZS5kZXNjcmlwdGlvbiEpO1xuICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uLm5hbWUgPT09IFwiQ29sb3JcIiA/IChcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiIHctOCAtaC04IHJvdW5kZWQtZnVsbCByaW5nLTEgcmluZy1ncmF5LTMwMCAgcmVsYXRpdmUgXCIgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY2hvaWNlLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgY3Vyc29yOiBkaXNhYmxlZCA/IFwibm90LWFsbG93ZWRcIiA6IFwicG9pbnRlclwiXG5cbiAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAge3NlbGVjdGVkICYmIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdy0xMCBoLTEwIHJvdW5kZWQtZnVsbCByaW5nLTIgdG9wLTEvMiBsZWZ0LTEvMiB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS14LTEvMiAtdHJhbnNsYXRlLXktMS8yXCI+PC9kaXY+IH0gXG4gICAgICAgICAgICAgICAge2Rpc2FibGVkICYmIDxkaXYgY2xhc3NOYW1lPVwiIGFic29sdXRlIHctMTAgaC1bMnB4XSBiZy1yZWQtNDAwIHJvdGF0ZS00NSBcIj48L2Rpdj59XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiIHJpbmctMSByaW5nLWxhbWEgdGV4dC1sYW1hIHJvdW5kZWQtbWQgcHktMSBweC00IHRleHQtc20gY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIHtjaG9pY2UuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgICAgey8qIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtYm9sZCB1cHBlcmNhc2UgXCI+Q2hvb3NlIGEgQ29sb3I8L2gzPlxuXG4gICAgICAgIFxuXG5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtM1wiPlxuICAgICAgICAgICAgPGxpICBjbGFzc05hbWU9XCIgaC04IHctOCBiZy1ncmVlbi00MDAgcm91bmRlZC1mdWxsXCI+PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCIgaC04IHctOCBiZy1yZWQtNDAwIHJvdW5kZWQtZnVsbFwiPjwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiIGgtOCB3LTggYmctY3lhbi00MDAgcm91bmRlZC1mdWxsXCI+PC9saT5cbiAgICAgICAgPC91bD4gKi99XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIENob29zZSBzaXplICovfVxuXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCIgZmxleCBmbGV4LWNvbCBzcGFjZS15LTJcIj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ib2xkIHVwcGVyY2FzZSBcIj5DaG9vc2UgYSBTaXplPC9oMz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTNcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIiB0ZXh0LXhzIHRleHQtbGFtYSByaW5nLTEgcmluZy1sYW1hIHB4LTIgcHktMSByb3VuZGVkLW1kIFwiPlxuICAgICAgICAgICAgTGFyZ2VcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIiB0ZXh0LXhzIHRleHQtbGFtYSByaW5nLTEgcmluZy1sYW1hIHB4LTIgcHktMSByb3VuZGVkLW1kIFwiPlxuICAgICAgICAgICAgTWVkaXVtXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCIgdGV4dC14cyB0ZXh0LWxhbWEgcmluZy0xIHJpbmctbGFtYSBweC0yIHB5LTEgcm91bmRlZC1tZCBcIj5cbiAgICAgICAgICAgIFNtYWxsXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+ICovfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9taXplUHJvZHVjdHM7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkN1c3RvbWl6ZVByb2R1Y3RzIiwicHJvZHVjdElkIiwicHJvZHVjdFZhcmlhbnRzIiwicHJvZHVjdE9wdGlvbnMiLCJzZWxlY3RlZE9wdGlvbnMiLCJzZXRTZWxlY3RlZE9wdGlvbnMiLCJoYW5kbGVPcHRpb25TZWxlY3QiLCJvcHRpb25UeXBlIiwiY2hvaWNlIiwicHJldiIsImNvbnNvbGUiLCJsb2ciLCJpc1ZhcmlhbnRJblN0b2NrIiwiY2hvaWNlcyIsInNvbWUiLCJ2YXJpYW50IiwidmFyaWFudENob2ljZXMiLCJPYmplY3QiLCJlbnRyaWVzIiwiZXZlcnkiLCJrZXkiLCJ2YWx1ZSIsInN0b2NrIiwiaW5TdG9jayIsInF1YW50aXR5IiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwib3B0aW9uIiwiaW5kZXgiLCJoMyIsIm5hbWUiLCJkaXNhYmxlZCIsImRlc2NyaXB0aW9uIiwic2VsZWN0ZWQiLCJjbGlja0hhbmRsZXIiLCJ1bmRlZmluZWQiLCJsaSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiY3Vyc29yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/CustomizeProducts.tsx\n"));

/***/ })

});