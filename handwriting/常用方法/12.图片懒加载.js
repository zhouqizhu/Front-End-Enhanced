function render(template, data) {
    const reg = /\{\{(\w+)\}\}/
    if(reg.test(template)) {
        const name = reg.exec(template)[1]
        template = template.replace(reg, data[name])
        return render(template, data)
    }
    return template
}

let template = '我叫{{name}}，来自{{address}}，今年{{age}}岁'
let person = {
  name: '小明',
  address: '北京',
  age: 20
}
console.log(render(template, person))
// 我叫小明，来自北京，今年20岁