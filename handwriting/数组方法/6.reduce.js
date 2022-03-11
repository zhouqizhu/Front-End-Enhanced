// reduce() 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。
Array.prototype.reduce2 = function(callback, initialValue) {
    if (this == null) throw new TypeError('this is null or not defined')
    if (typeof callback !== "function") throw new TypeError(callback + ' is not a function')
    const O = Object(this)
    const len = O.length >>> 0
    let k = 0, acc
    
    if (arguments.length > 1) {
        acc = initialValue
    } else {
        // 没传入初始值的时候，取数组中第一个非 empty 的值为初始值
        while (k < len && !(k in O)) {
            k++
        }
        if (k > len) {
            throw new TypeError( 'Reduce of empty array with no initial value' );
        }
        acc = O[k++]
    }
    while (k < len) {
        if (k in O) {
            acc = callback(acc, O[k], k, O)
        }
        k++
    }
    return acc
}

// 测试：
var sum = [0, 1, 2, 3].reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
console.log(sum) //6