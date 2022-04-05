const Koa = require('koa');
const serve = require('koa-static');
const path = require('path');
const app = new Koa();

app.use(serve(path.resolve(__dirname, '../../dist')));
const port = 9092;
app.listen(port, () => {
  console.log('测试打包的服务器已启动...');
  console.log(`端口${port}`);
});
