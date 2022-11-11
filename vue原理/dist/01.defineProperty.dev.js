"use strict";

var obj = {};
var val = 1;
Object.defineProperty(obj, a, {
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