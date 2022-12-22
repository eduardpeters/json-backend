const { loadData } = require('../helpers/dataRW.js');

const loadLocals = (req, res, next) => {
    if (!req.app.locals.superheroes)
        req.app.locals.superheroes = loadData();
    next();
}

module.exports = { loadLocals };