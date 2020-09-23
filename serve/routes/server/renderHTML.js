const fs = require('fs');
const mime = require('mime');
const {resolve} = require('path');

/**
 * 读取html模板文件
 * @param {*} ctx 
 * @param {*} next 
 */
module.exports = (ctx, next) => {
  const path = resolve(ctx.root, 'serve/build/index.html');
  if (!fs.existsSync(path)) return;

  ctx.response.type = mime.getType('html');
  ctx.body = fs.createReadStream(path);
  next();
}




