// map() 方法创建一个新数组，其结果是该数组中的每个元素是调用一次提供的函数后的返回值。
Array.prototype.map2 = function(callback, thisArg) {
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
            res[k] = callback.call(thisArg, O[k]);
        }
        k++;
    }
    return res
}

var numbers = [1, 4, 9];
var roots = numbers.map2(Math.sqrt);
// roots的值为[1, 2, 3], numbers的值仍为[1, 4, 9]
console.log(numbers) //[1, 4, 9]
console.log(roots) //[1, 2, 3]