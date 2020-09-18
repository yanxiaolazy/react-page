//使用react服务端渲染
const React = require('react');
const {renderToString} = require('react-dom/server');
const { StaticRouter } = require('react-router-dom');
//引入react项目
const {Routes} = require('../../../app/views/routes');

module.exports =  (ctx) => {
  const context = {};

  const domContent = renderToString(
      <StaticRouter location={ctx.url} context={context}>
        <Routes />
      </StaticRouter>
  );
  console.log('response body content: ', domContent);
  return {domContent};
}