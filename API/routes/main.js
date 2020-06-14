const router = require('express').Router();
const MainController = require('../controllers/MainController');

/**
 * @swagger
 * /main:
 *    get:
 *     description: Returns info for panel api
 *     produces:
 *       - application/json
 *     responses:
 *       418:
 *         description: Is alive the server
 *       500:
 *         description: Error, is not alive
 */
router.get('/', MainController.isAlive);

module.exports = router;