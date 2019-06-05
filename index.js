"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _SequentialEntranceTransplied = _interopRequireDefault(require("./SequentialEntrance-transplied"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var VueSequentialEntrance = {
  install: function install(Vue, options) {
    Vue.component("sequential-entrance", _SequentialEntranceTransplied["default"]);
  }
};
var _default = VueSequentialEntrance;
exports["default"] = _default;