const {Word} = require ('../models');

const WordsController = {
    async getAllbyIdLanguage(req, res) {
        try {
            const idLanguage = req.params.idLanguage;
            const words = await Word.findAll({
                where:{
                    idLanguage : id
                },
                include: Language
            });
           res.status(200).send(words);
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: "There was a problem with the request." });
        }
    }
}

module.exports = WordsController;