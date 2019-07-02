const xml2js=require('xml2js');
const fs=require('fs');

let str=fs.readFileSync('./a.xml').toString();


xml2js.parseString(str, (err, res)=>{
  if(err){
    console.log('parse error', err);
  }else{
    console.log(res.xml);
  }
});
