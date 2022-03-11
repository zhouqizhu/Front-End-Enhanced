// eval() 函数会将传入的字符串当做 JavaScript 代码进行执行。
// 简单：
var json = '{"a":"1", "b":2}';
var obj = eval("(" + json + ")");  // obj 就是 json 反序列化之后得到的对象

// 复杂：在调用 eval 之前，需要对数据进行校验。
var rx_one = /^[\],:{}\s]*$/;
var rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
var rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
var rx_four = /(?:^|:|,)(?:\s*\[)+/g;

if (
    rx_one.test(
        json.replace(rx_two, "@")
            .replace(rx_three, "]")
            .replace(rx_four, "")
    )
) {
    var obj = eval("(" +json + ")");
}

// new Function 实现：Function 与 eval 有相同的字符串参数特性。
var json = '{"name":"小姐姐", "age":20}';
var obj = (new Function('return ' + json))();
