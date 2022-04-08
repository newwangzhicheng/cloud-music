const Koa = require('koa');
const Router = require('koa-router');
const Mock = require('mockjs');

const app = new Koa();
const router = new Router();
app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', ctx.headers.origin);
  ctx.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  ctx.set('Access-Control-Allow-Headers', '*');
  ctx.set('Access-Control-Allow-Credentials', true);
  next();
});

router.get('/hi', (ctx) => {
  const data = Mock.mock({
    description: '测试的数据'
  });
  ctx.body = data;
});

app.use(router.routes()).use(router.allowedMethods());
const port = 9091;
app.listen(port, () => {
  console.log('跨域服务器已启动...');
  console.log(`端口${port}`);
});
