let obj = {
  name: 'wovert',
  getName () {
    setTimeout(() => {
      console.log(this.name)
    }, 1000)
  }
}

obj.getName()