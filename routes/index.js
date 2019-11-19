var express = require('express');
var router = express.Router();

const loginController = require('../controllers').login;


/* Classroom Router */
router.get('/api/users', loginController.list);
router.post('/api/login', loginController.login);

module.exports = router;
