const fs = require('fs');
const mime = require('mime');

module.exports = () => {
  return (ctx, next) => {
    ctx.response.type = mime.getType('json');
    ctx.response.body = fs.createReadStream(`${ctx.root}/serve/config/config.json`);
    next();
  }
};