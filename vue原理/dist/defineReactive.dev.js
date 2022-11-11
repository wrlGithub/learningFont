"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = defineReactive;

function defineReactive(data, key, val) {
  if (arguments.length === 2) {
    val = obj[key];
  }

  Object.defineProperties(data, key, {
    enumerable: true,
    configurable: true,
    get: function get() {
      console.log('get property a');
      return val;
    },
    set: function set(newVal) {
      if (val === newVal) {
        return;
      }

      console.log("set property a -> ".concat(newVal));
      val = newVal;
    }
  });
}