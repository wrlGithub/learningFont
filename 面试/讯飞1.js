
function soltion(N,k,arr) {
    function sum1(N,k,arr) {
        let res = 0;
        for(let i = 0; i<=N-k-1;i++) {
            res+=arr[i]*arr[i+k]
        }
        return res;
    }
    function sum2(N,k,arr) {
        let res = 0;
        for(let i = N-k; i<=N-1;i++) {
            res+=arr[i]*arr[i+k-N]
        }
        return res;
    }
    let res = [];
    for(let j = 0; j<N;j++) {
        res.push(sum1(N,j,arr)+sum2(N,j,arr))
    }
    return res;
}
let N = 10;
let arr = [6,6,6,6,6,6,6,6,6,6]
let j = 1;
// console.log(sum1(N,j,arr)+sum2(N,j,arr));
console.log(soltion(N,1,arr));



