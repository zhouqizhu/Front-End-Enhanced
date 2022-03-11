// instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。

// 1.递归实现
function instanceof1 (obj, func) {
	if(!(obj && ['object', 'function'].includes(typeof obj))) {
		return false
	}

	let proto = Object.getPrototypeOf(obj)

	if(proto === func.prototype) {
		return true
	}
	else if(proto === null) {
		return false
	}else {
		return instanceof1(proto, func)
	}
}


// 2.遍历实现
const instanceof2 = (obj, func) => {
	if(!(obj && ['object', 'function'].includes(typeof obj))) {
		return false
	}

	let proto = obj
	while(proto = Object.getPrototypeOf(proto)) {
		if(proto === func.prototype) {
			return true
		}
	}
	return false
}

let Fn = function () { }
let p1 = new Fn()

console.log(instanceof1({}, Object))
console.log(instanceof1(p1, Fn))
console.log(instanceof1({}, Fn))
console.log(instanceof1(null, Fn))
console.log(instanceof1(1, Fn))
console.log(instanceof1(function a() {}, Function))

console.log(11111111)


console.log(instanceof2({}, Object))
console.log(instanceof2(p1, Fn))
console.log(instanceof2({}, Fn))
console.log(instanceof2(null, Fn))
console.log(instanceof2(1, Fn))
console.log(instanceof1(function a() {}, Function))