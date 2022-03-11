// 将url地址的参数解析为对象
// 对象方法实现
function parseQueryString (url) {
	let obj = {}

	if (url.indexOf('?') === -1) return obj

	let first_res = url.split('?')[1]
	let second_res = first_res.split('&')

	for (let i in second_res) {
		third = second_res[i].split('=')
		obj[third[0]] = third[1]
	}

	return obj
}

// // 正则表达式实现
function parseParam(url){
	const paramStr = /.+\?(.+)$/.exec(url)[1] //将url中？后面的字符串取出来
	const paramArr = paramStr.split('&') //将字符串以&分割后存到数组中
	let paramObj = {}
	//将params存到对象中
	paramArr.forEach(param => {
		if(/=/.test(param)){ //查看正则表达式与指定的字符串是否匹配
			let [key, val] = param.split('=') //分割key和value
			val = decodeURIComponent(val) //解码
			val = /^\d+$/.test(val) ? parseFloat(val) : val //判断是否转化为数字

			if(paramObj.hasOwnProperty(key)){
				paramObj[key] = [].concat(paramObj[key],val) //如果有对象key，则添加一个值
			}else{
				paramObj[key] = val //如果对象没有这个key,创建key并设置值
			}
		}else{
			paramObj[param] = true //
		}
	})
	return paramObj
}
// 测试
let URL = 'https://www.sogou.com/web?ie=UTF-8&query=搜索内容&_em=3'
console.log(transform(URL));
