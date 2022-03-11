// 偏函数就是将一个 n 参的函数转换成固定 x 参的函数，
// 剩余参数（n - x）将在下次调用全部传入。
// function partial (fn, ...args) {
// 	return (...arg) => {
// 		return fn (...args, ...arg)
// 	}
// }

// 加上占位功能
function partial (fn, ...args) {
	return (...arg) => {
		let index = args.findIndex (item => item === '_')
		args[index] = arg[0]
		arg.shift(arg[0])
		return fn(...args, ...arg)
	}
}




function clg(a, b, c) {
    console.log(a, b, c)
}
let partialClg = partial(clg, '_', 2)
partialClg(1, 3) // 依次打印：1, 2, 3