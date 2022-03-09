// 使用 Array.prototype.flat 可以直接将多层数组拍平成一层：
[1 ,[2, [3]]].flat(2) //[1, 2, 3]

// ES5实现：递归
function flatten(arr){
	var result = []
	for(var i = 0; i < arr.length; i++){
		if(Array.isArray(arr[i])){
			result = result.concat(flatten(arr[i]))
		}else{
			result.push(arr[i])
		}
	}
	return result
}

// ES6实现：
function flatten(arr){
	while(arr.some(item => Array.isArray(item))){
		arr = [].concat(...arr)
	}
	return arr
}