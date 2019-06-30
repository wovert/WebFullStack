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

var p={
  age:18,
  //es6中对象方法的箭头函数表示形式
  run:()=>{
      setTimeout(()=>{
          //this:window
          console.log(this);//this是window
      },100)
  },
  travel:function(){
      //this:p
      setTimeout(()=>{
          console.log(this);//this是p
      },100)
  },
  //推荐使用的方式☆☆☆：es6中对象方法的简写形式
  say(){
      console.log("say方法中的this：",this);
      setTimeout(()=>{
          console.log("say内部的延迟函数：",this);//this是p
      },100)
  },
}

p.run();

p.travel();

p.say();