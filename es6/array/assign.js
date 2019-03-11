let obj1 = {
  'key1': 'val1',
  'home': {
    name: 'wovert'
  }
}
let obj2 = {
  'key2': 'val2'
}

var obj3 = {}
for (var key in obj1) {
  obj3[key] = obj1[key]
}
for (var key in obj2) {
  obj3[key] = obj2[key]
}

console.log(obj3)

let obj4 = {}

// 浅拷贝
console.log('====================== 浅拷贝')
obj4 = Object.assign(obj4, obj1, obj2)
obj4.home.name = '新的wovert'
console.log('obj4:', obj4)
console.log('obj1:', obj1)

console.log('====================== 深拷贝1')

// 深拷贝
let obj5 = JSON.parse(JSON.stringify(obj4))
obj5.home.name = 'super的wovert'
console.log('obj4:', obj4)
console.log('obj1:', obj1)
console.log('obj5:', obj5)

console.log('====================== 深拷贝2')

function clone(origin) {
  let newObj = {}
  for(let key in origin) {
    if (typeof origin[key] === 'object') {
      newObj[key] = clone(origin[key])
    } else {
      newObj[key] = origin[key]
    }
  }
  return newObj
}
let obj6 = clone(obj5)
obj6.home.name = 'obj6的wovert'
console.log('obj4:', obj4)
console.log('obj1:', obj1)
console.log('obj5:', obj5)
console.log('obj6:', obj6)