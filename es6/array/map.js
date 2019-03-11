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