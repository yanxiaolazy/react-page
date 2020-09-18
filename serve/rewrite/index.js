const fs = require('fs');
const {resolve, dirname} = require('path');
const assert = require('assert');

module.exports = rewriteHtml;

function rewriteHtml(path, content) {
  assert(path, 'path is required');

  const 
      p = resolve(path),
      dir = dirname(p),
      datas = fs.readFileSync(p, 'utf-8');
  
  console.log(dir);
  if (datas.search(/id="root"\>\<\/div/) === -1) return;
  // if (datas.search(/<%= body.domContent %>/) !== -1) return;
  const newDatas = datas.replace(/id="root">/, `id="root">${content}`);
  console.log('rewrite ---> | ', newDatas);
  const newP = resolve(dir, 'server.html');
  console.log('\r\nnew path ---> | ', newP, ' |\r\n');
  fs.writeFileSync(newP, newDatas);
}