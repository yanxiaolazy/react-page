//使用react服务端渲染
const React = require('react');
const {renderToString} = require('react-dom/server');
const { StaticRouter } = require('react-router-dom');
//引入react项目
const {Routes} = require('../../app/views');

/**
 * react 渲染成字符串
 * @param {*} ctx 
 * @param {*} next 
 */
module.exports =  (ctx, next) => {
  const context = {};
  
  const domContent = renderToString(
    <StaticRouter location={ctx.url} context={context}>
      <Routes/>
    </StaticRouter>
  );
  if (!domContent) return;
  
  console.log('React Render ------------------\r\n ', 
                domContent, 
                  '\r\n------------------ Render End\r\n');
  return domContent;
}