const router = require('express').Router();
const MainController = require('../controllers/MainController');

router.get('/', MainController.isAlive);

module.exports = router;