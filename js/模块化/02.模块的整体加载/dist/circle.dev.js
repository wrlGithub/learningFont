"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.area = area;
exports.circumference = circumference;

function area(radius) {
  return Math.PI * radius * radius;
}

function circumference(radius) {
  return 2 * Math.PI * radius;
}