const router = require('express').Router();
const MainController = require('../controllers/MainController');

/**
 * @swagger
 * /main:
 *    get:
 *      description: This should return if is alive or not
 */
router.get('/', MainController.isAlive);

module.exports = router;