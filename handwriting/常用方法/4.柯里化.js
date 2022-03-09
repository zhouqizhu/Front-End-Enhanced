// 函数柯里化就是将使用多个参数的函数转换成一系列使用一个参数的函数的技术。
function curry (fn) {
	let judge = (...args) => {
        // fn.length表示函数的形参个数
        // ...args表示剩余参数
		if(args.length == fn.length)	return fn(...args)
		return (...arg) => judge(...args, ...arg)
	}
	return judge
}


function add (a, b, c) {
	console.log(a + b + c)
}
let addCurry = curry(add)

addCurry(1)(2)(3)



function curry(fn, args) {
    var length = fn.length;
    var args = args || [];
    return function(){
        newArgs = args.concat(Array.prototype.slice.call(arguments));
        if (newArgs.length < length) {
            return curry.call(this,fn,newArgs);
        }else{
            return fn.apply(this,newArgs);
        }
    }
}

function multiFn(a, b, c) {
    return a * b * c;
}

var multi = curry(multiFn);

console.log(multi(2)(3)(4));    //24
console.log(multi(2,3,4));      //24
console.log(multi(2)(3,4));     //24
console.log(multi(2,3)(4))      //24


// Array.prototype.slice.call(arguments) 把类数组转化为真正的数组
// 等价于Array.from()