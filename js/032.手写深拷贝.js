function deepclone(obj = {},map = new Map()) {
    if(typeof obj !== "Object") return obj;
    if(map.get(obj)) return map.get(obj);
    let result = {};
    if( obj instanceof Array || Object.prototype.toString.call(obj)==="[object Array]") result = [];
    map.set(obj,result);
    for(const k in obj) {
        if(obj.hasOwnProperty(k)) deepclone(obj[k],map);
    }
    return result;
}