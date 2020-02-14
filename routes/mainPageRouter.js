const express = require('express');

const mainPageController = require('../controllers/mainPageController');

const router = express.Router();

router.get('/', mainPageController.getOverview);

module.exports = router;
