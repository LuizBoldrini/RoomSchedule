const express = require("express")
const ReserveController = require("../controller/ReserveController")
const router = express.Router()

router
  .get("/", ReserveController.pageInit)
  .post("/", ReserveController.createReserve)
module.exports = router
