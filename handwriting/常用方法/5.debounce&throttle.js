// 1.防抖（debounce）：频繁的触发任务事件，在一定时间内只执行一次，过了这个时间又能继续触发
// ·非立即执行防抖：
const debounce = (fn, delay) => {
	let timer = 0
	return function() {
		if(timer) {
			clearTimeout(timer)
			timer = setTimeout(fn, delay)
		}
		timer = setTimeout(fn, delay)
	}
}

// ·立即执行防抖：
const dobounce = (fn, delay) => {
	let timer = null
	return function() {
		if(timer) clearTimeout(timer)
		let callNow = !timer
		timer = setTimeout(fn,  delay)
		if(callNow) fn
	}
}


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