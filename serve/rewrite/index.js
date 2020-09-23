const {resolve} = require('path');
const fs = require('fs');
const renderReact = require('../react');

module.exports = (current) => {
  //删除多余文件
  dropFile(current, ['index.html', 'server.bundle.js']);

  return async (ctx, next) => {
    const domContent = renderReact(ctx);
    rewriteHTML(current, domContent);
    await next();
  }
}

function rewriteHTML(current, domContent) {
  const cur = resolve(current, 'index.html');
  let html = fs.readFileSync(cur, 'utf-8');

  if (!domContent) return;
  console.log('rewrite HTML ...');
  /**
   * 改变加载css,script路径
   */
  if (! html.search(/\.\.\/\.\.\/app\/dist\//)) return;
  html = html.replace(/\.\.\/\.\.\/app\/dist\//gi, '');
  /**
   * 添加react render content
   */
  if (! html.search(/\<body\>.*\<\/body>/)) return;
  const newHTML = html.replace(/\<body\>.*\<\/body>/, `<body><div id='root'>${domContent}</div></body>`);
  console.log('\r\n', newHTML, '\r\n');
  /**
   * 重新写入文件
   */
  fs.writeFileSync(cur, newHTML);
  console.log('rewrite HTML end...')
  return;
}

/**
 * 
 * @param {string} dir 
 * @param {string[]} opts 
 */
function dropFile(dir, opts=[]) {
  let path = '';

  fs.readdir(dir, (err, files) => {
    if (err) throw new Error(err);

    if (files.length !== 0) {
      files.forEach(file => {
        path = resolve(dir, file);

        if (! fs.existsSync(path)) return;
        if (opts.find( opt => opt === file)) return;
        console.log('dropped --- ', path);
        fs.unlinkSync(path);
      });
    }
  });
}