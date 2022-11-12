"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/createComment";
exports.ids = ["pages/api/createComment"];
exports.modules = {

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sanity/client");

/***/ }),

/***/ "(api)/./pages/api/createComment.ts":
/*!************************************!*\
  !*** ./pages/api/createComment.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createComment)\n/* harmony export */ });\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ \"@sanity/client\");\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst config = {\n    dataset: \"production\",\n    projectId: \"st1jrgxa\",\n    useCdn: \"development\" === \"production\",\n    token: process.env.SANITY_API_TOKEN\n};\nconst client = _sanity_client__WEBPACK_IMPORTED_MODULE_0___default()(config);\nasync function createComment(req, res) {\n    const { _id , name , email , comment  } = JSON.parse(req.body);\n    try {\n        await client.create({\n            _type: \"comment\",\n            post: {\n                _type: \"reference\",\n                _ref: _id\n            },\n            name,\n            email,\n            comment\n        });\n    } catch (err) {\n        console.log(err);\n        return res.status(500).json({\n            message: `Couldn't submit comment`,\n            err\n        });\n    }\n    console.log(\"Comment submitted\");\n    res.status(200).json({\n        message: \"Comment submitted\"\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY3JlYXRlQ29tbWVudC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDMEM7QUFFMUMsTUFBTUMsU0FBUztJQUNkQyxTQUFTQyxZQUFzQztJQUMvQ0csV0FBV0gsVUFBeUM7SUFDcERLLFFBQVFMLGtCQUF5QjtJQUNqQ00sT0FBT04sUUFBUUMsR0FBRyxDQUFDTSxnQkFBZ0I7QUFDcEM7QUFFQSxNQUFNQyxTQUFTWCxxREFBWUEsQ0FBQ0M7QUFFYixlQUFlVyxjQUM3QkMsR0FBbUIsRUFDbkJDLEdBQW9CLEVBQ25CO0lBQ0QsTUFBTSxFQUFFQyxJQUFHLEVBQUVDLEtBQUksRUFBRUMsTUFBSyxFQUFFQyxRQUFPLEVBQUUsR0FBR0MsS0FBS0MsS0FBSyxDQUFDUCxJQUFJUSxJQUFJO0lBRXpELElBQUk7UUFDSCxNQUFNVixPQUFPVyxNQUFNLENBQUM7WUFDbkJDLE9BQU87WUFDUEMsTUFBTTtnQkFDTEQsT0FBTztnQkFDUEUsTUFBTVY7WUFDUDtZQUNBQztZQUNBQztZQUNBQztRQUNEO0lBQ0QsRUFBRSxPQUFPUSxLQUFLO1FBQ2JDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDWixPQUFPWixJQUFJZSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQztZQUFFTDtRQUFJO0lBQ3ZFO0lBQ0FDLFFBQVFDLEdBQUcsQ0FBQztJQUVaZCxJQUFJZSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1FBQUVDLFNBQVM7SUFBb0I7QUFDckQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2hlcm9uZGV2YmxvZy8uL3BhZ2VzL2FwaS9jcmVhdGVDb21tZW50LnRzP2E4ZTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgc2FuaXR5Q2xpZW50IGZyb20gJ0BzYW5pdHkvY2xpZW50JztcblxuY29uc3QgY29uZmlnID0ge1xuXHRkYXRhc2V0OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TQU5JVFlfREFUQVNFVCxcblx0cHJvamVjdElkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TQU5JVFlfUFJPSkVDVF9JRCxcblx0dXNlQ2RuOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nLFxuXHR0b2tlbjogcHJvY2Vzcy5lbnYuU0FOSVRZX0FQSV9UT0tFTixcbn07XG5cbmNvbnN0IGNsaWVudCA9IHNhbml0eUNsaWVudChjb25maWcpO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDb21tZW50KFxuXHRyZXE6IE5leHRBcGlSZXF1ZXN0LFxuXHRyZXM6IE5leHRBcGlSZXNwb25zZVxuKSB7XG5cdGNvbnN0IHsgX2lkLCBuYW1lLCBlbWFpbCwgY29tbWVudCB9ID0gSlNPTi5wYXJzZShyZXEuYm9keSk7XG5cblx0dHJ5IHtcblx0XHRhd2FpdCBjbGllbnQuY3JlYXRlKHtcblx0XHRcdF90eXBlOiAnY29tbWVudCcsXG5cdFx0XHRwb3N0OiB7XG5cdFx0XHRcdF90eXBlOiAncmVmZXJlbmNlJyxcblx0XHRcdFx0X3JlZjogX2lkLFxuXHRcdFx0fSxcblx0XHRcdG5hbWUsXG5cdFx0XHRlbWFpbCxcblx0XHRcdGNvbW1lbnQsXG5cdFx0fSk7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdGNvbnNvbGUubG9nKGVycik7XG5cdFx0cmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogYENvdWxkbid0IHN1Ym1pdCBjb21tZW50YCwgZXJyIH0pO1xuXHR9XG5cdGNvbnNvbGUubG9nKCdDb21tZW50IHN1Ym1pdHRlZCcpO1xuXG5cdHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogJ0NvbW1lbnQgc3VibWl0dGVkJyB9KTtcbn1cbiJdLCJuYW1lcyI6WyJzYW5pdHlDbGllbnQiLCJjb25maWciLCJkYXRhc2V0IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NBTklUWV9EQVRBU0VUIiwicHJvamVjdElkIiwiTkVYVF9QVUJMSUNfU0FOSVRZX1BST0pFQ1RfSUQiLCJ1c2VDZG4iLCJ0b2tlbiIsIlNBTklUWV9BUElfVE9LRU4iLCJjbGllbnQiLCJjcmVhdGVDb21tZW50IiwicmVxIiwicmVzIiwiX2lkIiwibmFtZSIsImVtYWlsIiwiY29tbWVudCIsIkpTT04iLCJwYXJzZSIsImJvZHkiLCJjcmVhdGUiLCJfdHlwZSIsInBvc3QiLCJfcmVmIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/createComment.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/createComment.ts"));
module.exports = __webpack_exports__;

})();