const router = require('@koa/router')();
const renderHTML = require('./server/renderHTML');
const renderConfig = require('./server/renderConfig');

module.exports = router;
router
  .redirect('/', '/login')
  .get(/./, renderHTML)

  .get('/config', renderConfig());
