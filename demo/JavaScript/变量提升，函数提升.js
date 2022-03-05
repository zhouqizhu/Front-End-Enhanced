function a() {
	var b = 1
	function c() {
		//发生了变量提升
		console.log(1,b)	//1 undefined		
		var b = 1 		//注释此处，则上面会输出1 1
		console.log(2,b)	//2 1
	}
	c()		//闭包
	console.log(3,b)	//3 1
}
a()

var name = 'hello';
(function(){

    if(typeof name ==='undefined'){

        var name = 'jack';		//输出truejack,注释此处输出falsejack

        console.log("true"+name);

    }else{
        console.log('false'+name);
    }

})()

// 函数提升只会提升函数声明，而不会提升函数表达式。
//函数声明
function foo() {
    console.log('foo1');
}
foo();  // foo2
function foo() {
    console.log('foo2');
}

foo(); // foo2
//函数表达式
var foo = function () {
    console.log('foo1');
}

foo();  // foo1

var foo = function () {
    console.log('foo2');
}

foo(); // foo2

var a = 10
console.log(a++) // 10    a=a+1
console.log(++a) // 12    a+1=1