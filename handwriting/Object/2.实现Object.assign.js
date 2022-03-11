// Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象分配到目标对象。
// 它将返回目标对象。
Object.assign2 = function(target, ...source) {
    if (target == null) {
        throw new TypeError('Cannot convert undefined or null to object')
    }
    let ret = Object(target) 
    source.forEach(function(obj) {
        if (obj != null) {
            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    ret[key] = obj[key]
                }
            }
        }
    })
    return ret
}

// 测试：
const obj = { a: 1 };
const copy = Object.assign2({}, obj);
console.log(copy); // { a: 1 }
