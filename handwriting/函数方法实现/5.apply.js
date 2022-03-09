// apply() 方法调用一个具有给定this值的函数，以及以一个数组（或类数组对象）的形式提供的参数。
// func.apply(thisArg, [argsArray])

Function.prototype.apply = function (context, arr) {
    var context = Object(context) || window;
    context.fn = this;

    var result;
    if (!arr) {
        result = context.fn();
    }
    else {
        // var args = [];
        // for (var i = 0, len = arr.length; i < len; i++) {
        //     args.push('arr[' + i + ']');
        // }
        // result = eval('context.fn(' + args + ')')
        // 展开运算符解构数组
        result = context.fn(...arr)
    }

    delete context.fn
    return result;
}