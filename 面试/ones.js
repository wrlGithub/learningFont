// let num = '12300'

// function solu(num) {
//     return num.split('').reverse().join('')
// }
// console.log(solu(num));


function solu(arr) {
    let b = 0
    let sumA = 0, sumB = 0
    let tab = 9999999
    for(let i = 0; i < arr.length; i++) {
        // 求和
        for(let j = 0; j <= b; j++) {
            sumA += arr[j]
        }
        // 得到sumA

        for(let k = arr.length-1; k > b ; k --) {
            // 求和
            for(let g = k; g < arr.length; g++){
                sumB += arr[g] 
            }
            if(Math.abs( sumA - sumB ) < tab) {
                tab = Math.abs( sumA - sumB)
            }
            sumB = 0
        }
        sumA = 0
        b++ 
    }
    return tab
}

let arr = [1,2,3,4,5]
console.log(solu(arr));


function aa(a,b,c) {
    console.log(arguments);
    console.log([...arguments].slice(1,3));
}
aa(1,2,3)