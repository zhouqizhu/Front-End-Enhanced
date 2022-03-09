// 数组的浅拷贝： 1.直接赋值     2.Object.assign()
// 使用slice和concat返回一个新的数组，如果这个数组只有一层，可以理解为“深拷贝”。
// 但嵌套的数组和对象还是引用类型，修改值也会影响原来的值，如果按这样定义，属于“浅拷贝”
// 浅拷贝只拷贝一层

// 浅拷贝
function simpleCopy(obj1) {
	var obj2 = Array.isArray(obj1) ? [] : {}
	for(let i in obj1) {
		obj2[i] = obj1[i]
	}
	return obj2
}

// 实例：
var obj1 = {
   a: 1,
   b: 2,
   c: {
         d: 3
      }
}
var obj2 = simpleCopy(obj1);
// obj2.a = 3;
// obj2.c.d = 4;
alert(obj1.a); // 1
alert(obj2.a); // 3
alert(obj1.c.d); // 4
alert(obj2.c.d); // 4

// 深拷贝
function deepClone(obj) {
	let objClone = Array.isArray(obj) ? [] : {}
	if(obj && typeof obj === 'object') {
		for(let key in obj) {
			if(obj.hasOwnProperty(key)) {
				if(obj[key] && typeof obj[key] === 'object') {
					objClone[key] = deepClone(obj[key])
				}
				objClone[key] = obj[key]
			}
		}
	}
	return objClone
}

// 实例：
let a=[1,2,3,4],
    b=deepClone(a);
a[0]=2;
console.log(a,b);

// 通过JSON对象实现深拷贝
function deepClone(obj) {
	var o = JSON.stringify(obj)
	let objClone = JSON.parse(o)
	return objClone
}

// 通过jQuery的extend方法实现深拷贝。
var array = [1,2,3,4];
var newArray = $.extend(true,[],array); // true为深拷贝，false为浅拷贝
// lodash函数库实现深拷贝
let result = _.cloneDeep(test)

// 代理法
function deepClone(obj) {
	let isObject = (obj) => obj instanceof Object ? true : false
    if (!isObject(obj)) {
        throw new Error('obj 不是一个对象！')
    }

    let isArray = Array.isArray(obj)
    let cloneObj = isArray ? [...obj] : { ...obj }
    Reflect.ownKeys(cloneObj).forEach(key => {
        cloneObj[key] = isObject(obj[key]) ? deepClone(obj[key]) : obj[key]
    })

    return cloneObj
}


// 手动实现深拷贝

let obj1 = {
   a: 1,
   b: 2
}
let obj2 = {
   a: obj1.a,
   b: obj1.b
}
obj2.a = 3;
alert(obj1.a); // 1
alert(obj2.a); // 3
// 如果对象的value是基本类型的话，也可以用Object.assign来实现深拷贝，但是要把它赋值给一个空对象

var obj = {
    a: 1,
    b: 2
}
var obj1 = Object.assign({}, obj); // obj赋值给一个空{}
obj1.a = 3;
console.log(obj.a)；// 1
// 用slice实现对数组的深拷贝

// 当数组里面的值是基本数据类型，比如String，Number，Boolean时，属于深拷贝
// 当数组里面的值是引用数据类型，比如Object，Array时，属于浅拷贝
var arr1 = ["1","2","3"]; 
var arr2 = arr1.slice(0);
arr2[1] = "9";
console.log("数组的原始值：" + arr1 );
console.log("数组的新值：" + arr2 );
// 用concat实现对数组的深拷贝

// 当数组里面的值是基本数据类型，比如String，Number，Boolean时，属于深拷贝
var arr1 = ["1","2","3"];
var arr2 = arr1.concat();
arr2[1] = "9";
console.log("数组的原始值：" + arr1 );
console.log("数组的新值：" + arr2 );
// 当数组里面的值是引用数据类型，比如Object，Array时，属于浅拷贝
var arr1 = [{a:1},{b:2},{c:3}];
var arr2 = arr1.concat();
arr2[0].a = "9";
console.log("数组的原始值：" + arr1[0].a ); // 数组的原始值：9
console.log("数组的新值：" + arr2[0].a ); // 数组的新值：9
// 直接使用var newObj = Object.create(oldObj)，可以达到深拷贝的效果。

function deepClone(initalObj, finalObj) {    
  var obj = finalObj || {};    
  for (var i in initalObj) {        
    var prop = initalObj[i];        // 避免相互引用对象导致死循环，如initalObj.a = initalObj的情况
    if(prop === obj) {            
      continue;
    }        
    if (typeof prop === 'object') {
      obj[i] = (prop.constructor === Array) ? [] : Object.create(prop);
    } else {
      obj[i] = prop;
    }
  }    
  return obj;
}
// 使用扩展运算符实现深拷贝

// 当value是基本数据类型，比如String，Number，Boolean时，是可以使用拓展运算符进行深拷贝的
// 当value是引用类型的值，比如Object，Array，引用类型进行深拷贝也只是拷贝了引用地址，所以属于浅拷贝
var car = {brand: "BMW", price: "380000", length: "5米"}
var car1 = { ...car, price: "500000" }
console.log(car1); // { brand: "BMW", price: "500000", length: "5米" }
console.log(car); // { brand: "BMW", price: "380000", length: "5米" }