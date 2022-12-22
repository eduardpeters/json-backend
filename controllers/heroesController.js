const express = require('express');
const { loadData } = require('../helpers/dataRW.js');

const getAll = (req, res) => {
    if (!req.app.locals.superheroes)
        req.app.locals.superheroes = loadData();
    if (req.app.locals.superheroes)
        res.status(200).json(req.app.locals.superheroes);
    else
        res.status(500).end();
};

const getID = (req, res) => {
    //nothing yet
}

module.exports = { getAll, getID };