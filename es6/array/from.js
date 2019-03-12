function print() {
  // let arr = Array.prototype.slice.call(arguments)

  // arr.forEach(function(item) {
  //   console.log(item)
  // })

  // Array.prototype.forEach.call(arguments, function(item){
  //   console.log(item)
  // })

  // 把一个类数组变成一个数组
  Array.from(arguments).forEach(function(item) {
    console.log(item)
  })
}

print('a', 'b', 'c')