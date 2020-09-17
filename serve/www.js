const Koa = require('koa');
const staticFile = require('koa-static');
const log = require('koa-logger');
// const views = require('koa-views');

const router = require('./routes/server');

const app = new Koa();

// console.log(path.resolve(__dirname, './'))
app
  // .use(views(path.resolve(__dirname, './'), {extension: 'html', autoRender: false}))
  .use(log())
  .use(staticFile('./app/dist'))
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(3000);

console.log('start server at http://localhost:3000');