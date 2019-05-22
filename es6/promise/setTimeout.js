setTimeout(function(){
  var a=100;
  console.log(a);
  setTimeout(function () {
      var b=200;
      console.log(b)
      setTimeout(function () {
          var c=300;
          console.log(c)
      }, 1000);
  }, 1000);
},1000);