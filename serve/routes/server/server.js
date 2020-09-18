const fs = require('fs');
const mime = require('mime');
//使用react服务端渲染
const reactRender = require('./react');
//向index.html中添加模板字符
const renderHtml = require('../../rewrite');

/**
 * 读取html模板文件
 * @param {*} ctx 
 */
module.exports = async (ctx) => {
  const {domContent} = reactRender(ctx);
  console.log(domContent);
  renderHtml('../node/serve/build/index.html', domContent);
  ctx.response.type = mime.getType('html');
  ctx.response.body = fs.createReadStream('../node/serve/build/server.html');
};


