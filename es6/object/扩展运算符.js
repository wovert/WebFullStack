var car = { brand:"BMW",price:"368000",length:"3米" }

// 克隆一个跟car完全一样的对象出来：
var car2 = { ...car }
console.log(car2)

// 新车子，跟car的长度不同，其他相同
var car3 = { ...car, length: "4米" }
console.log(car3)

var car4 = { ...car,type: "SUV"}
console.log(car4)

var car5 = {...car4, price: "69800", brand: "BYD"}
console.log(car5)

var s1 = [1,3,5,7,9]
var s2 = [ ...s1 ]
console.log(s2)