const express = require('express');
const saveUserInfo = require('./saveUserInfo');
const history = require('./history');

const router = express.Router();

router.use('/', saveUserInfo);
router.use('/', history);

module.exports = router;
