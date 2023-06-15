"use strict";
(() => {
var exports = {};
exports.id = 293;
exports.ids = [293];
exports.modules = {

/***/ 232:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const fetchMessages = async (username)=>{
    try {
        const response = await fetch(`https://d-sinclair-gpt.herokuapp.com/api/dataconnectors/twitter?username=${username}`);
        const data = await response.json();
        return data.text;
    } catch (error) {
        console.error("Error fetching messages:", error);
        return "";
    }
};
const handler = async (req, res)=>{
    const username = "davidasinclair";
    const text = await fetchMessages(username);
    res.status(200).json({
        text
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(232));
module.exports = __webpack_exports__;

})();