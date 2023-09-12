const express = require("express")
const CalenderController = require("../controller/CalenderController")
const router = express.Router()

router
  .get("/calender.ejs", CalenderController.pageInit)

  
  module.exports = router