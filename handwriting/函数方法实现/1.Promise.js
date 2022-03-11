// 函数实现
function MyPromise (fn) {
	let _this = this
	_this.status = "pending"
	_this.resolve_val = undefined
	_this.reject_val = undefined
	_this.resolveCb = []
	_this.rejectCb = []

	try {
		fn (resolve, reject)
	} catch (e) {
		reject (e)
	}

	function resolve (value) {
		if (_this.status === 'pending') {
			_this.status = 'resolve'
			_this.resolve_val = value
			_this.resolveCb.map(cb => cb(value))
		}
	}

	function reject (value) {
		if(_this.status === "pending"){
            _this.status = "reject"
            _this.reject_val = value
            _this.rejectCb.map(cb=>cb(value))
        }
	}

	MyPromise.prototype.then = function (success, fail) {
		if(_this.status === "pending"){
            _this.resolveCb.push(success)
            _this.rejectCb.push(fail)
        }
            
        if(_this.status === "resolve"){
            success(_this.resolve_val)
        }
            
        if(_this.status === "reject"){
            fail(_this.resolve_val)
        }
        return this
	}
}


    let p = new MyPromise((resolve,reject)=>{
        setTimeout(()=>{
            reject("你好")
        },2000)
    })
    p.then((e)=>{
        console.log(e)
    },(err)=>{
        console.log(err)
    })



class MyPromise {
  constructor (exe) {
    this.value = undefined
    this.status = 'pending'
    this.successQueue = []
    this.failureQueue = []
    const resolve = () => {
      const doResolve = (value) => {
        if (this.status === 'pending') {
          this.status = 'success'
          this.value = value
  
          while (this.successQueue.length) {
            const cb = this.successQueue.shift()
  
            cb && cb(this.value)
          }
        }
      }

      setTimeout(doResolve, 0)
    }

    const reject = () => {
      const doReject = (value) => {
        if (this.status === 'pending') {
          this.status = 'failure'
          this.value = value
  
          while (this.failureQueue.length) {
            const cb = this.failureQueue.shift()
  
            cb && cb(this.value)
          }
        }
      }

      setTimeout(doReject, 0)
    }

    exe(resolve, reject)
  }

  then (success = (value) => value, failure = (value) => value) {
    return new MyPromise((resolve, reject) => {
      const successFn = (value) => {
        try {
          const result = success(value)
          
          result instanceof MyPromise ? result.then(resolve, reject) : resolve(result)
        } catch (err) {
          reject(err)
        }
      }

      const failureFn = (value) => {
        try {
          const result = failure(value)
          
          result instanceof MyPromise ? result.then(resolve, reject) : resolve(result)
        } catch (err) {
          reject(err)
        }
      }

      if (this.status === 'pending') {
        this.successQueue.push(successFn)
        this.failureQueue.push(failureFn)
      } else if (this.status === 'success') {
        success(this.value)
      } else {
        failure(this.value)
      }
    })
  }

  catch () {

  }
} 

const pro = new MyPromise((resolve, reject) => {
  setTimeout(resolve, 1000)
  setTimeout(reject, 2000)
})

pro
  .then(() => {
    console.log('2_1')
    const newPro = new MyPromise((resolve, reject) => {
      console.log('2_2')
      setTimeout(reject, 2000)
    })
    console.log('2_3')
    return newPro
  })
  .then(
    () => {
      console.log('2_4')
    },
    () => {
      console.log('2_5')
    }
  )
  
pro
  .then(
    data => {
      console.log('3_1')
      throw new Error()
    },
    data => {
      console.log('3_2')
    }
  )
  .then(
    () => {
      console.log('3_3')
    },
    e => {
      console.log('3_4')
    }
  )