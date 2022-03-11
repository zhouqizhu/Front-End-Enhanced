// filter() 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。 
Array.prototype.filter2 = function(callback, thisArg) {
    if (this == null) {
        throw new TypeError('this is null or not defined')
    }
    if (typeof callback !== "function") {
        throw new TypeError(callback + ' is not a function')
    }
    const O = Object(this)
    const len = O.length >>> 0
    let k = 0, res = []
    while (k < len) {
        if (k in O) {
            if (callback.call(thisArg, O[k], k, O)) {
                res.push(O[k])                
            }
        }
        k++;
    }
    return res
}

// 测试：
function isBigEnough(element) {
  return element >= 10;
}
var filtered = [12, 5, 8, 130, 44].filter2(isBigEnough);
console.log(filtered)
// filtered is [12, 130, 44]
