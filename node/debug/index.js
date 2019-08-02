const a = 100

for (let i = 0; i < a; i++) {
  if (i === 10) {
    test()
  }
  console.log('i=', i)
}

function test() {
  console.log('call test function')
}