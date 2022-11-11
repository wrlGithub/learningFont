function deepClone(obj = {},map = new Map()){
    //obj 如果为基础类型 则不需要拷贝
    if (typeof obj !== "object") {
        return obj;
    }
    if (map.get(obj)) {
        return map.get(obj);
    }
    let result = {}
    // 初始化返回结果
    if ( obj instanceof Array || Object.prototype.toString.call(obj) === "[object Array]"){
        result = [];
    }
    // 防止循环引用
    map.set(obj, result);
    for (const key in obj) {
        // 保证 key 不是原型属性
        if(obj.hasOwnProperty(key)) {
            // 递归调用
            result[key] = deepClone(obj[key],map);
        }
    }
    // 返回结果
    return result
}