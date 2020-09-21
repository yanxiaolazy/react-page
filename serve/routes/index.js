const router = require('@koa/router')();
const server = require('./server/renderHTML');
const renderConfig = require('./server/renderConfig');

module.exports = router;

router.get(/./, server());

router.get('/config', renderConfig());
