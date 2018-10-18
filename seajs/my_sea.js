const sea = {
  use(path, fn_end){
    $.ajax({
      url: path,
      success(str) {

        parseStr(str, fn_end);

        // 递归
        function parseStr(str, fn_end) {

          // console.log(str);
          function define(fn) {
            let module = {
              exports: {}
            };

            fn(function(){}, module.exports, module);

            console.log(module.exports);
            fn_end(module.exports)
          }

          // 1. 查找require函数
          tmp = str.substring(str.indexOf('{')+1, str.lastIndexOf('}'));
          
          //console.log(tmp.match(/require\([^\(\)]+\)/g));

          let arr = tmp.match(/require\([^\(\)]+\)/g).map(function(item){
            if(item.indexOf('"') != -1) {
              return item.substring(item.indexOf("\"")+1, item.lastIndexOf("\""));
            } else {
              return item.substring(item.indexOf("\'")+1, item.lastIndexOf("\'"));
            }
          });

          console.log(arr);

          let i = 0;
          let json = {};
          function next() {
            $.ajax({
              url: arr[i],
              success(str){
                parseStr(str, function(mod){
                  json[arr[i]] = mode;
                  i++;

                  if(i == arr.length) {
                    // 2. 执行代码
                    str.replace('require(xxx)', json[arr[i]]);
                    eval(str);
                  } else {
                    next();
                  }

                })
              } 
            });
          }
          next();

        
        }


      },
      error() {
        alert('失败');
      }
    })
  }
}