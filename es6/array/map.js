let users = [
  {
    id: 1,
    name: 'wovert',
  },
  {
    id: 2,
    name: 'lingyima'
  }
]
// 老数组里的每一个元素映射为新数组的每一个元素
let newUsers= users.map(function(user, index){
  return `<li>${user.id}:${user.name}</li>`
})
let ul = `
  <ul>
    ${newUsers.join('')}
  </ul>
`
console.log(ul)


console.log('------start for of entries-----')
for (let [index, item] of users.entries()) {
  console.log('index=', index, ', item=', item)
}