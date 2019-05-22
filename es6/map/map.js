let map = new Map([[true, true], [{}, {}], [[], []], [null, null]])
console.log(map)

map.set(NaN, NaN) // 返回 map对象
map.set('abc', 123) // 返回 map对象

console.log(map)

console.log(map.get(true)) // 返回 key 对应的 value

console.log(map.has(true)) // 返回是否存在key

map.forEach((value, key, c) => {
  console.log('value=', value)
  console.log('key=', key)
})

console.log('----------let of map.entries()----------')
for (let [key, value] of map.entries()) {
  console.log(value, key)
}
console.log('----------/let of map.entries()----------')