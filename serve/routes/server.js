const Router = require('@koa/router');
//使用react服务端渲染
const React = require('react');
const {renderToString} = require('react-dom/server');
const { StaticRouter } = require('react-router-dom');
//引入react项目
const {Routes} = require('../../app/views/routes');

const router = new Router();

router.get(/./, async (ctx, next) => {
  const context = {};

  const domContent = renderToString(
      <StaticRouter location={ctx.url} context={context}>
        <Routes />
      </StaticRouter>
  );
  console.log('response body content: ', domContent);
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
  ctx.response.body = html;
});

module.exports = router;

