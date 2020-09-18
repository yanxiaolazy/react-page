const Router = require('@koa/router');
const server = require('./server/server');

const router = new Router();

module.exports = router;

router.get(/./, server);