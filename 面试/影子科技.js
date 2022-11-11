/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 比较版本号
 * @param version1 string字符串 
 * @param version2 string字符串 
 * @return int整型
 */
 function compare( version1 ,  version2 ) {
    // write code here
    const v1 = version1.split('.')
    const v2 = version2.split('.')
    for(let i=0; i < v1.length;  i++) {
        v1[i] = parseInt( v1[i])
    }
    for(let i=0; i < v2.length;  i++) {
        v2[i] = parseInt( v2[i])
    }
    const len = Math.max(v1.length, v2.length)
    for(let i =0 ; i< len; i++) {
        if(v1[i] > v2[i]) {
            return 1
        }else if(v1[i] < v2[i]) {
            return -1
        }else if(v1[i] = v2[i]) {
            continue
        }else if( i == len-1 && v1.length > v2.length && v1[v1.length-1]!=0){
            return 1
        }else if( i == len-1 && v2.length > v1.length && v2[v2.length-1]!=0){
            return -1
        }
    }
    return 0
}
module.exports = {
    compare : compare
};
let s1 = '1.1.0'
let s2 = '1.2'
console.log(compare(s1, s2));
