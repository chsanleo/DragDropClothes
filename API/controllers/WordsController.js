const WordsController = {
    async CheckWords(req, res) {
        try {

           res.status(200).send({ message: "" })
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: "" });
        }
    }
}

module.exports = WordsController;