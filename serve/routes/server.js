const Router = require('@koa/router');
const fs = require('fs');
//使用react服务端渲染
const React = require('react');
const {renderToString} = require('react-dom/server');
const { StaticRouter } = require('react-router-dom');
//引入react项目
const {Routes} = require('../../app/views/routes');

const router = new Router();

const readIndex = () => {
  return async (ctx, next) => {
    ctx.response.type = 'text/html';
    ctx.response.body = fs.createReadStream('./serve/build/index.html');
  }
}
router.get(/./, readIndex());
// function renderServe() {
//   const context = {};

//   const domContent = renderToString(
//       <StaticRouter location={ctx.url} context={context}>
//         <Routes />
//       </StaticRouter>
//   );
//   console.log('response body content: ', domContent);
//   return domContent;
// }
// const body = {
//   domContent: renderServe()
// }
// router.get(/./, (ctx) => {
//   await ctx.render('index', {body})
// });


// router.get(/./, async (ctx, next) => {
//   readIndex();
//   const context = {};

//   const domContent = renderToString(
//       <StaticRouter location={ctx.url} context={context}>
//         <Routes />
//       </StaticRouter>
//   );
//   console.log('response body content: ', domContent);
//   const html = `
//   <!DOCTYPE html>
//   <html lang="en">
//   <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Client App</title>
//   </head>
//   <body>
//     <div id="root">${domContent}</div>
//   <script src="client.bundle.js"></script></body>
//   </html>
//   `
//   // ctx.response.body = html;
// });

module.exports = router;

