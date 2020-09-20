const router = require('@koa/router')();
const server = require('./server/server');

module.exports = router;

router.get(/./, server());