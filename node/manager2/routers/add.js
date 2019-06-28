module.exports=async (res, get, post, files)=>{
  let {title,price,count}=post;

  if(!title || !price || !count){
    res.writeJson({error: 1, msg: 'params invaild'});
    res.end();
  }else{
    price=Number(price);
    count=Number(count);

    if(isNaN(price) || isNaN(count)){
      res.writeJson({error: 1, msg: 'params invaild'});
      res.end();
    }else{
      try{
        await db.query('INSERT INTO item_table (title, price, count) VALUES(?,?,?)', [title, price, count]);

        res.writeJson({error: 0, msg: 'success'});
      }catch(e){
        res.writeJson({error: 1, msg: 'database error'});
      }
      res.end();
    }
  }
};
