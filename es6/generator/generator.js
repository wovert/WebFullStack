/**
 * read生成器 用来生成迭代器
 * @param {*} books 
 */
function read(books) {
    let index = 0
    return {
        next() {
            let done = index === books.length-1
            let value = done ? undefined : books[index++]
            return {
                value,
                done
            }
        }
    }
}

// 迭代器可以不停的调用next方法得到一个结果
// done为true是表示取完
let it = read(['js','node'])
// next()返回一个结果 {value, done}
let r1 = it.next();
console.log(r1)
let r2 = it.next();
console.log(r2)

let books = read(['js','node','css','java','php'])
let result = ''
do {
    result = books.next()
    console.log(result)
} while(!result.done)

///////////////////////////

// 生成器函数，返回迭代器
function *show(){
    console.log('show-aaa')
    yield;
    console.log('show-bbb')
  }

  let gen = show()
  gen.next() // aaa

  setTimeout(function (){
    gen.next() //bbb
  }, 5000)


console.log('==============show2')
function *show2(){
    console.log('show2-aaa')
    let a = yield
    console.log('show2-bbb' + a)
}
let gen2 = show2()
gen2.next()
gen2.next(12)

console.log('==============show3')
function *show3(){
    console.log('show3-aaa')
    yield 55
    console.log('shw3-bbb')
    return 89
}

let gen3 = show3()
let res1 = gen3.next()
console.log(res1)    //{value: 55, done: false}
console.log('--------')
let res2 = gen3.next()
console.log('--------')
console.log(res2)    //{value: 89, done: true}