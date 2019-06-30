function q(){
  return new Promise((resolve,reject)=>{
      setTimeout(()=>{
          reject("你好");
      },100)
  })
}

(async function(){
  try{
      let res = await q();
      console.log(res);
  }catch(e){
      console.log(e);
  }
})()