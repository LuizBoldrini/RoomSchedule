const Reserve = require('../models/Reserve')

class ReserveController {

    async pageInit(req, res) {
        try {
            return res.render('calender')
        
        } catch(error) {
            return res.send(error)
        }
    }
}

module.exports = new ReserveController()