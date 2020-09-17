const Koa = require('koa');
const static = require('koa-static');

const app = new Koa();

app
  .use(static('./app/dist'))
  .listen(3000);

console.log('start server at http://localhost:3000');