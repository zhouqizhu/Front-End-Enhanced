// compose函数的作用就是组合函数
// 特点：
	// 1.后一个函数作为前一个函数的参数
	// 2.最后一个函数可以接受多个参数，前面的函数只能接受单个参数；后一个的返回值传给前一个

// 一、redux源码写法
function compose (...funcs) {
	// 如果没有参数，返回默认参数
	if(funcs.length === 0) {
		return arg => arg
	}

	if(funcs.length === 1) {
		// 调用reduce,单元素数组会直接返回该元素，不会执行callback，这里手动执行
		return funcs[0]
	}

	return funcs.reduce((a, b) => (...args) => a(b(...args)))
}

// 二、递归
function compose1(...fn) {
	return fn.reduce((result, it) => {
		return (...args) => {
			return result(it(...args))
		}
	}, it => it)
}

function fn1(x) { return x + 1; }
function fn2(x) { return x + 2; }
function fn3(x) { return x + 3; }
function fn4(x) { return x + 4; }
const a = compose(fn1, fn2, fn3, fn4);
console.log(a(1)); // 1+4+3+2+1=11
console.log(compose(fn1, fn2, fn3, fn4)(1)) // 1+4+3+2+1=11