// 函数执行后，指定时间后再执行
// 定时器实现
function throttle(func, wait) {
  let timeout

  return function() {
    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null
        func.call(this, arguments)
      }, wait)
    }
  }
}

//计算时间差实现
function throttle (func, wait) {
	let previous = 0

	return function () {
		let now = +new Date()
		let remain = wait - (now - previous)

		if (remain < 0) {
			previous = now
			func.call(this, arguments)
		}
	}
} 