var express = require('express');
var router = express.Router();

const loginController = require('../controllers').login;
const checkAuth = require('../middleware/check-auth');

/* Classroom Router */
router.post('/api/login', loginController.login);
router.get('/api/users',checkAuth,loginController.list);

module.exports = router;
