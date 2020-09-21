const fs = require('fs');
const mime = require('mime');

module.exports = (root) => {
  return (ctx, next) => {
    ctx.response.type = mime.getType('json');
    ctx.response.body = fs.createReadStream(`${root}/serve/config/config.json`);
    next();
  }
};