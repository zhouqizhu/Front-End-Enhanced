// some() 方法测试数组中是不是至少有1个元素通过了被提供的函数测试。它返回的是一个Boolean类型的值。
// arr.some(callback(element[, index[, array]])[, thisArg])
Array.prototype.some2 = function(callback, thisArg) {
    if (this == null) throw new TypeError('this is null or not defined')
    if (typeof callback !== "function") throw new TypeError(callback + ' is not a function')
    const O = Object(this)
    const len = O.length >>> 0
    let k = 0
    while (k < len) {
        if (k in O) {
            if (callback.call(thisArg, O[k], k, O)) {
                return true
            }
        }
        k++;
    }
    return false
}

// 测试：
function isBiggerThan10(element, index, array) {
  return element > 10;
}

[2, 5, 8, 1, 4].some2(isBiggerThan10)
[12, 5, 8, 1, 4].some2(isBiggerThan10)
console.log([2, 5, 8, 1, 4].some2(isBiggerThan10)) //false
console.log([12, 5, 8, 1, 4].some2(isBiggerThan10)) //true