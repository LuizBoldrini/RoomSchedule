const reserve = require('./reserve');

const routes = (app) => {
    app.use(reserve)
}

module.exports = routes