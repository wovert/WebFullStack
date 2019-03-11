let sum = (prefix, ...rest) => {
  let result = 0
  rest.forEach(item => {
    result += item
  })
  return prefix + result
}

console.log(sum('$', 1, 2, 3, 4))