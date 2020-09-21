const router = require('@koa/router')();
const server = require('./server/renderHTML');
const { resolve } = require('path');
const renderConfig = require('./server/renderConfig');

module.exports = router;

const root = resolve('./');

router.get(/./, server(root));

router.get('/config', renderConfig(root));
