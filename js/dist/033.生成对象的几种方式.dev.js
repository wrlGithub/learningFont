"use strict";

/* 1. 工厂模式 */
function createPerson(name, age, job) {
  var o = new Object();
  o.name = name;
  o.age = age;
  o.job = job;

  o.sayname = function () {
    console.log("my name is ".concat(this.name, "."));
  };

  return o;
}

var person1 = createPerson("james", 9, "student");
person1.sayname();
var person2 = createPerson("kobe", 9, "student");