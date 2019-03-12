class Parent {
  constructor (name) {
    this.name = name
  }
  getName () {
    return this.name
  }
}

let p = new Parent('wovert')
console.log(p.getName())