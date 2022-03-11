// forEach() 方法对数组的每个元素执行一次给定的函数。
// arr.forEach(callback(currentValue [, index [, array]])[, thisArg])
Array.prototype.forEach2 = function(callback, thisArg) {
    if (this == null) throw new TypeError('this is null or not defined')
    if (typeof callback !== "function") throw new TypeError(callback + ' is not a function')
    const curArr = Object(this)  // curArr就是条件数组
    const len = curArr.length >>> 0  // O.length >>> 0是为了保证转换后的值为正整数。
    let k = 0
    while (k < len) {
        if (k in curArr) { //k的值包含在curArr的索引中
            callback.call(thisArg, curArr[k], k, curArr);
        }
        k++;
    }
}

// 例子：
const arraySparse = [1,3,,7];
let numCallbackRuns = 0;

arraySparse.forEach2(function(element){
  console.log(element);
  numCallbackRuns++;
});

console.log("numCallbackRuns: ", numCallbackRuns);
// 1
// 3
// 7
// numCallbackRuns:  3