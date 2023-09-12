const reserve = require('./reserve');
const calender = require('./calender')

const routes = (app) => {
    app.use(reserve)
    app.use(calender)
}

module.exports = routes