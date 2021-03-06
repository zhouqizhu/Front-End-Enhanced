let target = {
  a: 1,
  b: 2
}
function MyProxy(target, handler) {
  // 操作副本
  let _target = deepClone(target);
  Object.keys(_target).forEach((key) => {
    Object.defineProperty(_target, key, {
      get() {
        return handler.get && handler.get(target, key);
      },
      set(newVal) {
        return handler.set && handler.set(target, key, newVal);
      }
    })
  })
  return _target;
}

let proxy = new MyProxy(target, {
  get(target, prop) {
    return 'Get:' + prop + '=' + target[prop];
  },
  set(target, prop, newVal) {
    target[prop] = newVal;
    console.log('Set:' + prop + '=' + newVal);
  }
})
console.log(proxy.a);
proxy.b = 3;
