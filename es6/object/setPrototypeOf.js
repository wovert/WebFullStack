let obj1 = {age: 1, getFood(){ return 'obj1'}}
let obj2 = {age: 2}
// let obj3 = {}

// 3 
let obj3 = {
  __proto__: obj1,
  getFood() {
    return 'obj3 ' + super.getFood()
  }
}

// 1.设置obj3的原型为obj1
Object.setPrototypeOf(obj3, obj1)
// 2. obj3.__proto__ = obj1

console.log(obj3.age)
console.log(obj3.getFood())