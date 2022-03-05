function Foo() {        //构造函数
 getName = function () { alert (1); };
 return this;
}
Foo.getName = function () { alert (2);};  //Foo相当于变量
Foo.prototype.getName = function () { alert (3);};
var getName = function () { alert (4);};
function getName() { alert (5);}
 
//请写出以下输出结果：
Foo.getName();// 2    查看Foo的静态属性
getName();// 4    getName变量提升覆盖getName函数提升    
Foo().getName();// 1    执行Foo()，this指向全局变量，覆盖之前的getName
getName();// 1
new Foo.getName();// 2    .运算符由于new，相当于new(Foo.getName())
new Foo().getName();// 3    (new Foo()).getName(),实例化了Foo()
new new Foo().getName();// 3    new(new Foo().getName())



function fn(){
    this.name="张三"
    this.run=function(){
        return 111
    }
} 
fn.prototype.name="李四";
fn.prototype.run=function(){
    return 222;
}

var obj = new fn();

console.log(obj.name,obj.run())     //张三 111
