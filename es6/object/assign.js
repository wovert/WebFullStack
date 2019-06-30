// Object.assign 就是进行对象的浅拷贝
var source={
  age: 18,
  height: 170,
  className:"3年2班",
  attribute: {
    color: 'red'
  }
}

// 克隆一个新对象出来
var newObj = Object.assign({}, source)
newObj.attribute.color = 'blue'
console.log(newObj) // blue
console.log(source) // blue

var newObj2 = {}
Object.assign(newObj2, source)
console.log(newObj2)