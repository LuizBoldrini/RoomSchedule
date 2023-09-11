const Reserve = require('../models/Reserve');

class ReserveController {
    async createReserve(req, res) {

    }

    async pageInit(req, res) {
        try {
            return res.render('index')
        }
        catch(error) {
            return res.send(error)
        }
    }
}

module.exports = new ReserveController()