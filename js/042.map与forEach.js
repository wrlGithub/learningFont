let arr = [1, 'aa', {a:12,t:'wang'}]
let res1 = arr.forEach((item, second) => {
    console.log('second', second);
    console.log(item);
})

let res2 = arr.map((item, second) => {
    console.log('second', second)
    console.log(item);
    return item
})

console.log('forEach', res1);
console.log('map', res2);


/**
 * forEach改变原数组
 * map不改变原数组
 * 
 *  */


let array = [{a: 1,b:2}, [1,2]]
/* array.forEach( (item) => {
    item.conut = 3
}) */

array.map( (item) => {
    item.conut = 3
})
console.log(array);