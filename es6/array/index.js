let arr = [,1,,9,,,,,,]
console.log(arr) // [empty, 1, empty, 5个empty]
console.log(0 in arr) // false
console.log(1 in arr) // true
arr.forEach(item => console.log(item)) // 1 9
arr.find(item => console.log(item)) // undefined 1 undefined 9 undefined ...