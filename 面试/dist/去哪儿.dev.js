"use strict";

var lianjie = 'http://qua.com?a=s&nn=x';

function solution(str) {
  // let i = str.indexOf('?')
  // console.log(i);
  // let str1 = str.substr(i+1,str.length-2)
  // console.log(str1);
  var res = {};

  if (str.indexOf('?') > -1) {
    var sus = str.split('?')[1];
    var strArr = sus.split('&');
    console.log(strArr);
    strArr.forEach(function (e) {
      var key = e.split('=')[0];
      var value = e.split('=')[1];
      res[key] = value;
    });
  }

  return res;
}

console.log(solution(lianjie)); // function solu(num){
//     let res = [0,0,0,0,0]
//     while(num) {
//         if(num >=100 ){
//             num = num-100;
//             res[0]++
//         }else if(num >= 50 ){
//             num = num-50;
//             res[1]++
//         }else if(num >= 20){
//             num = num-20;
//             res[2]++
//         }else if(num >= 5){
//             num = num-5;
//             res[3]++
//         }else if(num >= 1){
//             num = num-1;
//             res[4]++
//         }
//     }
//     console.log(res);
//     return res;
// }
// solu(99)
// process.stdin.resume();
// process.stdin.setEncoding('ascii');
// var input = ""
// var input_array = ""
// process.stdin.on('data', function(data) {
//     input += data;
// })