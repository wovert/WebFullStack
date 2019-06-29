const Router=require('koa-router');
const fs=require('await-fs');
const path=require('path');

let router=new Router();

router.get('/login', async ctx=>{
  await ctx.render('admin/login', {});
});

router.post('/login', async ctx=>{
  let {user, pass}=ctx.request.fields;
  let admins=JSON.parse((await fs.readFile(
    path.resolve(__dirname, '../../admins.json')
  )).toString());

  ctx.body=admins;
});

module.exports=router.routes();
