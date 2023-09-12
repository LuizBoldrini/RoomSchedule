const Reserve = require("../models/Reserve")
const moment = require('moment')

class ReserveController {
  async createReserve(req, res) {
    const reqBody = req.body
    const block = reqBody.block
    const room = reqBody.room
    const date = reqBody.date
    const dateFormat = moment(date).format('DD/MM/YYYY')
    const requester = reqBody.requester
    try {
      const createReserves = await Reserve.create(reqBody) 
      
      return res.render("index", {date: dateFormat, room: room, block: block, requester: requester})
    } catch (error) {
      return res.send(error)
    }
  }

  async pageInit(req, res) {
    const reqBody = req.body
    const block = reqBody.block
    const room = reqBody.room
    const date = reqBody.date
    const requester = reqBody.requester
    try{
      return res.render("index", {date: date, room: room, block: block, requester: requester})
    } catch(error){
      return res.send(error)
    }
  }
}

module.exports = new ReserveController()
