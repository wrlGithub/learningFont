function solu1(arr1, arr2) {
    let sum = 0
    let arr = []
    for(let i = 0; i<arr1.length; i++) {
        if(arr2[i] == 0) {
            sum += arr1[i]
        }else{
            arr.push(arr1[i])
        }
    }
    // console.log(arr.sort().reverse());
    // console.log(sum);
    let s1 = sum + arr.reduce( (a,b) => a+b )
    let s2 = sum
    for( let i = 0; i < arr.length; i++) {
        s2 = s2*2
    }
    // console.log(s1, s2);
    if(s1 > s2) {
        return s1
    }else {
        return s2
    }
}

function solu(arr1, arr2) {
    let sum = 0
    let arr = []
    for(let i = 0; i<arr1.length; i++) {
        if(arr2[i] == 0) {
            sum += arr1[i]
        }else{
            arr.push(arr1[i])
        }
    }
    arr.sort().reverse()
    let s1 = sum
    let s2 = sum
    for( let i = 0; i < arr.length; i++) {
        s1 = s1 +arr[i]
        s2 = s2*2
      if(s1 > s2 ) {
        sum = s1
      }else {
        sum = s2
      }
      console.log(sum);
    }
    console.log(sum);
    return sum
 }


let arr1 = [1, 3, 5, 2, 2]
let arr2 = [1, 1, 1, 0, 0]
solu(arr1,arr2)

let this.$parent