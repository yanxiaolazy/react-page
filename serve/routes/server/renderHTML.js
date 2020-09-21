const fs = require('fs');
const mime = require('mime');

/**
 * 读取html模板文件
 * @param {*} ctx 
 * @param {*} next 
 */
module.exports = (root) => {
  return async (ctx, next) => {
    ctx.response.type = mime.getType('html');
    ctx.response.body = fs.createReadStream(`${root}/serve/build/server.html`);
    await next();
  };
}




