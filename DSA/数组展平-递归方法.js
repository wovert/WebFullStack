/** 
 * 1星：数组展平（递归）
 * 展平一个数组：[[1,2],3,[[4],5,[[6,7,[8]]]]] => [1,2,3,4,5,6,7,8]
 * 数组S = {a1, a2, ..., an},函数F将数组展平
 * F(S) = F(a1) U F(a2) U ... U F(an)
 * F(ai) = {ai 数字，F(ai) 数组}
 */

function flatten(arr) {
  return [].concat(
    ...arr.map(x =>
      Array.isArray(x) ? flatten(x) : x  
    )
  )
}

console.log(flatten([[1,2],3,[[4],5,[[6,7,[8]]]]]))