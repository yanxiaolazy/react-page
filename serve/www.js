const {resolve} = require('path');
const Koa = require('koa');
const staticFile = require('koa-static');
const log = require('koa-logger');
// const views = require('koa-views');//使用views模板时，不从服务端加载数据
const router = require('./routes');
//在所有中间件运行之前先复制一份html模板
const copyHtml = require('./rewrite');

const app = new Koa();

app.context.root = resolve('./');

app
  .use(copyHtml(resolve('./', 'serve/build/index.html'), resolve('./', 'app/dist/index.html')))
  .use(log())//打印请求日志
  .use(staticFile('./app/dist'))//发送静态文件
  // .use(views(path.resolve('./serve/build'), {extension: 'html'}))//加载index.html
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(3000);

console.log('start server at http://localhost:3000');