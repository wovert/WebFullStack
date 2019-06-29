/** 
 * 2星：柯里化
 * 对于 curry(foo)，g函数参数足够4个，就调用foo(a,b,c,d)，如果小于4个就返回一个可以继续积累参数的函数
 */

const curry = func => {
  const g = (...allArgs) => allArgs.length >= func.length ?
    func(...allArgs)
      : (...args) => g(...allArgs, ...args)
  return g
}

const foo = curry((a, b, c, d) => {
  console.log(a, b, c, d)
})

foo(1)(2)(3)(4) // 1 2 3 4
foo(1)(2)(3) // 不返回
const f = foo(1)(2)(3)
f(5) // 1 2 3 5