const router = require('express').Router();
const WordsController = require('../controllers/WordsController');

/**
 * @swagger
 * /Words:
 *    post:
 *     description: Returns info for panel api 
 *     parameters:
 *       - name: body
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           required:
 *             - idLanguage
 *           properties:
 *             idLanguage:
 *               type: string
 *           example: {
 *             "idLanguage": "1",
 *           }
 *     responses:
 *       200:
 *         schema:
 *           type: object
 *           properties:
 *             id:
 *               type: integer
 *             term:
 *               type: string
 *             name:
 *               type: string
 *             abbreviation:
 *               type: string
 *         examples:
 *           application/json: {
 *             "id": 1,
 *             "term": "hola",
 *             "name": "Spanish",
 *             "abbreviation":"ESP"
 *           }
 *       500:
 *         description: There was an error
 */
router.get('/', WordsController.getAllbyIdLanguage);


module.exports = router;