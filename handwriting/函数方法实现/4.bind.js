// bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，
// 而其余参数将作为新函数的参数，供调用时使用。
// function.bind(thisArg[, arg1[, arg2[, ...]]])

Function.prototype.bind2 = function (context) {
    if (typeof this !== "function") {
      throw new Error("Error");
    }

    const _this = this
    const args = [...arguments].slice(1)

    return function F() {
        if(this instanceof F) {
            return new _this(...args, ...arguments)
        }
        return _this.apply(context, args.concat(...arguments))
    }
}

