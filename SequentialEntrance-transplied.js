"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  functional: true,
  render: function render(createElement, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var delay = props.delay || 250;
    var tag = props.tag || "span";
    var animation = props.animation || "entranceFromRight"; // let customClass = props.customClass; // first variant

    if (props.fromTop != undefined) animation = 'entranceFromTop';
    if (props.fromRight != undefined) animation = 'entranceFromRight';
    if (props.fromBottom != undefined) animation = 'entranceFromBottom';
    if (props.fromLeft != undefined) animation = 'entranceFromLeft';

    if (children) {
      children.forEach(function (child, index) {
        child.data.staticStyle = {
          opacity: 0,
          animationFillMode: "forwards",
          animationDelay: index * delay + "ms"
        };
        child.data.staticClass += " " + animation;
      });
    } //// first variant
    // let classObj = {};
    // if (customClass) {
    //   classObj.class = [];
    //   classObj.class.push(customClass);
    // }
    // return createElement(tag, classObj, children);
    //// second variant


    return createElement(tag, {
      "class": props.customClass
    }, children);
  }
};
exports["default"] = _default;