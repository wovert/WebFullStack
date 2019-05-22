let set = new Set([1, 1, NaN, "aa", true, "aa", undefined])
console.log(set)

let arr = [NaN, NaN, 1,1,2,3,3,4]
let arr2 = ([...new Set(arr)])
console.log(arr2)

console.log(Object.is(NaN, NaN)) // true
console.log(Object.is(+0, -0)) // false
console.log(+0 === -0) // true

set.add('abc') // return set
set.add('abc') // return set
console.log(set)

console.log('delete abc is :', set.delete('abc')) // true/false
console.log(set)

console.log('aa has:', set.has('aa'))

console.log('set size:', set.size)

console.log('keys():', set.keys())
console.log('values():', set.values())
console.log('entries():', set.entries())

console.log('------start for of keys()-----')
for (let key of set.keys()) {
  console.log(key)
}
console.log('------end for of-----')

console.log('------start for of entries-----')
for (let [index, item] of set.entries()) {
  console.log('index=', index, ', item=', item)
}
console.log('------end for of-----')

set.clear()
console.log(set)
