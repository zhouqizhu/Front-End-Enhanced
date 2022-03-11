function myFreeze(obj) {
	 if(obj instanceof Object) {
	 	Object.seal(obj)
	 	for(let p in obj) {
	 		if(obj.hasOwnProperty(p)) {
	 			Object.defineProperty(obj, p, {
	 				writable: false,
	 			})
	 			myFreeze(obj[p])
	 		}
	 	}
	 }
}