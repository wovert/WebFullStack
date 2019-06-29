/** 
 * 3星：Y-组合子
 * 有没有可能去掉 const g?
 */

// 前置知识 lambda 验算
const y = function (le) {
  return function (f) {
    return f(f)
  }(function (f) {
    return le(
      function (...x) {
        return (f(f))(...x)
      }
    )
  })
}

const curryY = func => y(
  g => {
    (...allArgs) => {
      allArgs.length >= func.length ?
        func(...allArgs)
        : (...args) => g(...allArgs, ...args)
    }
  }
)

const foo = curryY((a, b, c, d) => {
  console.log(a, b, c, d)
})

foo(1)(2)(3)(4)

/////////////////////

const curry = func => {
  return (...allArgs) => allArgs.length >= func.length ?
    func(...allArgs)
      : (...args) => g(...allArgs, ...args)
}

const curry = func =>
  (...allArgs) =>
    allArgs.length >= func.length ?
      func(...allArgs)
        : (...args) => g(...allArgs, ...args)

foo(1)(2)(3)(4)