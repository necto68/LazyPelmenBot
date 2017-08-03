"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var normalizeCode = function normalizeCode(code) {
    return code.toString().toLocaleLowerCase().trim();
};

var randomArrayItem = function randomArrayItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
};

exports.normalizeCode = normalizeCode;
exports.randomArrayItem = randomArrayItem;
//# sourceMappingURL=util.js.map