const express = require('express');
const router = express.Router();
const { loadData } = require('../helpers/dataRW.js');

const getAll = (req, res) => {
    const file = process.env.DB_FILE;
    const superheroes = loadData(file);
    if (!superheroes) {
        res.status(500).end();
    }
    else {
        res.status(200).json(superheroes);
    }
};

module.exports = { getAll };