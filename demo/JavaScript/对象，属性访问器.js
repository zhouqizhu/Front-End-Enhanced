var arr = { 'name':'章三' };
var brr = { 'name':"李四" };
var crr = 111
var obj = {}

obj[arr] = '数组arr';
obj[brr] = '数组brr';
obj[crr] = '数组crr'

console.log(obj)    //{111: '数组crr', [object Object]: '数组brr'}

var a = { }
var b = { key:"a" }
var c = { key:"c" }

a[b]='123';
a[c]='456';

console.log(a[b]);       //456
console.log(a[c]);       //456
console.log(a);          //{ '[object Object]': '456' }


let a={},b='0',c=0;
a[b]='超逸';
a[c]='博客';
console.log(a[b]);  //博客
// 数字属性名==字符串属性名 在堆中进行了覆盖


let a={},b=Symbol('1'),c=Symbol('1');
a[b]='超逸';
a[c]='博客';
console.log(a[b]);  //超逸
console.log(a[c]);  //博客