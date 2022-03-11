//function.call(thisArg, arg1, arg2, ...)
Function.prototype.call1 = function (context) {
    if(typeof this !== 'function') {
        throw new TypeError('Error')
    }
    context = context || window
    context.fn = this

    const args = [...arguments].slice(1)
    const result = context.fn(...args)

    delete context.fn
    return result
}

// 测试
var value = 2
var obj = {
    value: 1
}

function bar(name, age){
    console.log(this.value)
    return {
        value: this.value,
        name: name,
        age: age
    }
}
console.log(bar.call1(obj, 'kevin', 18))
//1
//Object{value: 1, name: "kevin", age: 18}