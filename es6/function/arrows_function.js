var name = "window属性name"
let obj = {
  name: 'wovert',
  getName: () => {
    setTimeout(() => {
      console.log(this)
      console.log(this.name) // this指向外层this
    }, 2000)
  }
}

obj.getName()

console.log('===============')

let objA = {
  name: 'wovert',
  getName: () => {
    console.log(this)
    console.log(this.name) // this指向外层this
  }
}

let objB = {
  name: 'other',
  getName: objA.getName
}

objB.getName()