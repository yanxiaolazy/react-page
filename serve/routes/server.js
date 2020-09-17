const Router = require('@koa/router');
//使用react服务端渲染
const React = require('react');
const {renderToString} = require('react-dom/server');
//引入react项目
const {Client} = require('../../app/views');

const router = new Router();

// router.redirect('/', '/user');
router.get('/', async (ctx, next) => {
  const domContent = renderToString(
  // <React.Fragment>
    <Client />
  // </React.Fragment>
  );

  const html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Client App</title>
  </head>
  <body>
    <div id="root">${domContent}</div>
  <script src="client.bundle.js"></script></body>
  </html>
  `

  ;console.log(html);
  ctx.response.body = html;
});

module.exports = router;

