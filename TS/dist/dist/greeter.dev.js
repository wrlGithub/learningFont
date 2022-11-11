"use strict";

function greeter(person) {
  return "hello " + person;
}

var user = 'lisa';
document.body.innerHTML = greeter(user);