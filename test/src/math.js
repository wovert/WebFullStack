module.exports = {
  add: (...args) => {
    return args.reduce((prev, cur) => {
      return prev + cur
    })
  },
  mul: (...args) => {
    return args.reduce((prev, cur) => {
      return prev * cur
    })
  }
}