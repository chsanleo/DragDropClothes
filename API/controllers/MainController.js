const MainController = {
    async isAlive(req, res) {
        try {
           res.status(418).send({ message: "It's Alive!" })
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: "Not alive" });
        }
    }
}

module.exports = MainController;