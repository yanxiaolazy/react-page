const fs = require('fs');
const mime = require('mime');
const { resolve } = require('path');

/**
 * 读取html模板文件
 * @param {*} ctx 
 * @param {*} next 
 */
module.exports = () => {
  const root = resolve('./');

  return async (ctx, next) => {
    ctx.response.type = mime.getType('html');
    ctx.response.body = fs.createReadStream(`${root}/serve/build/server.html`);
  };
}




