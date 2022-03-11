// 图片全部加载完成后移除事件监听；
// 加载完的图片，从 imgList 移除；
let imgList = [...document.querySelectorAll('img')]
let length = imgList.length
// 自动执行
const imgLazyLoad = (function(){
	let count = 0

	return function(){
		let deleteIndexList = []
		imgList.forEach((img, index) => {
			let rect = img.getBoundingClientRect() //监听 scroll 事件
			if(rect.top < window.innerHeight){
				img.src = img.dataset.src
				deleteIndexList.push(index)
				count++
				if(count === length){
					document.removeEventListener('scroll',imgLazyLoad)
				}
			}
		})
		imgList = imgList.filter((img, index) => !deleteIndexList.includes(index))
	}
})()

// 防抖处理
document.addEventListener('scroll', imgLazyLoad)

