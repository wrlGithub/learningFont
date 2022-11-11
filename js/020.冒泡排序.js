function sort(arr) {
    const length = arr.length
    for(let i = 0; i < length - 1; i++ ) {
        let haschange = false
        for(let j=0;j < length - i - 1;j++) {
            if(arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                haschange = true
            }
        }
        if(!haschange) break
    }
    return arr;
}

var arr = [2,1,4,3]
console.log(sort(arr));\

var a = 1
function b(a){
    a =2
    console.log(a);
}
b(a)
console.log(a);



function func1() {
    var n = 99
    nAdd = function() {
        this.n +=1 
        console.log(this.n);
    }
    function func2() {
        console.log(n);
    }
    return func2
}
var result = func1()
result()
nAdd()
result()


function f1() {
    function f2() {
        console.log(2);
    }
    return f2
}
f3 = f1()
f3()