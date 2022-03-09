// 指定时间内，事件只处理一次
// 策略是当事件被触发时，设定一个周期延迟执行动作，若期间又被触发，则重新设定周期，直到周期结束，执行动作。
function debounce (fn, delay) {
	let timer
	return function() {
		if(timer) {
			clearTimeout(timer)
			timer = setTimeout(fn, delay)
		}else{
			timer = setTimeout(fn, delay)
		}
	}
}