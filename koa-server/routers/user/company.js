const Router=require('koa-router');

let router=new Router();

router.get('/a', async ctx=>{
  ctx.body='企业的a';
});

module.exports=router.routes();
