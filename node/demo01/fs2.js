const fs=require('fs');

fs.readFile('ofo.png', (err, data)=>{
  fs.writeFile('ofo2.png', data, ()=>{});
});
