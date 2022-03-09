var f = true;
if(f===true){
    var a = 10;
}
function fn(){
    var b=20;   //{...}内声明的是局部变量，有作用域,变量提升
    c=30;       //作用域为window
}

fn();

console.log(a,c,b)  //b is not undefined
console.log(window.c)   //30
console.log(window.b)   //undefined