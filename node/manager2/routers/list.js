module.exports=async (res, get, post, files)=>{
  try{
    let data=await db.query(`SELECT * FROM item_table`);
    res.writeJson({error: 0, data});
  }catch(e){
    res.writeJson({error: 1, msg: 'database error'});
  }

  res.end();
};
