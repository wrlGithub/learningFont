
// let str = 'aa'
// let newstr = str.split('').reverse().join('')

// console.log(newstr === str);

/* function solution(str) {
    let s = str
    let newstr = s.split('').reverse().join('')
    if(newstr === str) {
        console.log('是');
    }else{
        console.log('否');
    }
}
let s = 'aa'
console.log(solution(s)); */

// var isValid = function(s) {
//     var a = []
//     var l = s.length;
//     var k = 0
//     var flag = 1;
//     for( var i = 0; i<l&&flag;i++) {
//         switch(s[i]){
//             case '(': 
//                 a[k] = i;
//                 k++;
//                 break;
//             case ')':
//                 var j = a[k-1]
//                 if(s[j] === '(') {
//                     a[k] = 0
//                     k--
//                 }else{
//                     flag = 0
//                 }
//                 break;
//             case '{':
//                 a[k] = i;
//                 k++;
//                 break;
//             case '}':
//                 var j = a[k-1]
//                 if(s[j] === '{') {
//                     a[k] = 0
//                     k--
//                 }else{
//                     flag = 0
//                 }
//                 break;
//                 case '[':
//                     a[k] = i;
//                     k++;
//                     break;
//                 case ']':
//                     var j = a[k-1]
//                     if(s[j] === '[') {
//                         a[k] = 0
//                         k--
//                     }else{
//                         flag = 0
//                     }
//                     break;
//         }
//     }
//     if(k!=0){
//         flag = 0
//     }
//     if(flag ===0){
//         return false
//     }else {
//         return true
//     }
// }


function solu(s) {
    let sarr = s.split('')
    let numL = 0
    let numM = 0
    sarr.forEach(e => {
        if(e === 'L'){
            numL++
        }else{
            numM++
        }
    });
    let newstr = ''
    if(mne)
}

console.log(solu('lll'));