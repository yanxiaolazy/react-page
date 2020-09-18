const fs = require('fs');
const assert = require('assert');
const {resolve, dirname} = require('path');
// //使用react服务端渲染
const reactRender = require('../routes/server/react');

/**
 * 处理模板
 * @param {string} newPath 
 * @param {string} oldPath 
 * @param {string} content 
 */
function rewriteHtml(newPath, oldPath, content) {
  assert(newPath, 'newPath is required');
  assert(oldPath, 'oldPath is required');

  console.log("newPath -->", newPath);
  console.log("oldPath -->", oldPath);
  if (!fs.existsSync(oldPath)) {
    const datas = fs.readFileSync(newPath, 'utf-8');

    if (datas.search(/id="root"\>\<\/div/) === -1) return;

    const newDatas = datas.replace(/id="root">/, `id="root">${content}`);
    console.log('\r\nrewrite --> ', dirname(newPath));
    const newP = resolve(dirname(newPath), 'server.html');
    console.log('\r\nnew path --> ', newP);
    fs.writeFileSync(newP, newDatas);  
    return;  
  }
  /**
   * 复制模板
   */
  const datas = fs.readFileSync(oldPath, 'utf-8');
  fs.writeFileSync(newPath, datas);
  fs.unlinkSync(oldPath);
}

/**
 * 读取html模板文件中间件
 * @param {string} newPath 
 * @param {string} oldPath 
 */
module.exports = (newPath, oldPath) => {
  assert(newPath, 'newPath is required');
  assert(oldPath, 'oldPath is required');
  rewriteHtml(newPath, oldPath);

  return async (ctx, next) => {
    const {domContent} = reactRender(ctx, next);
    console.log('domContent --> ', domContent);
    rewriteHtml(newPath, oldPath, domContent);

    await next();
  };
}