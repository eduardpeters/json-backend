const { writeData } = require('../helpers/dataRW.js');
const { checkAll, getValidFields } = require('../helpers/controllerHelpers.js');

const getAll = (req, res) => {
    if (req.app.locals.superheroes)
        res.status(200).json(req.app.locals.superheroes);
    else
        res.status(500).end();
};

const getHero = (req, res) => {
    const id = parseInt(req.params.id);
    const singleHero = req.app.locals.superheroes.filter(hero => hero.id === id)[0];
    if (singleHero)
        res.status(200).json(singleHero);
    else
        res.status(404).send('No entry matches the id requested');
}

const replaceHero = (req, res) => {
    const id = parseInt(req.params.id);
    const heroIndex = req.app.locals.superheroes.findIndex(hero => hero.id === id);
    if (checkAll(req.body) && heroIndex !== -1) {
        const updatedHero = {
            id: id,
            name: req.body.name,
            publisher: req.body.publisher,
            alter_ego: req.body.alter_ego,
            first_appearance: req.body.first_appearance,
            image: req.body.image,
            characters: req.body.characters
        };
        req.app.locals.superheroes[heroIndex] = updatedHero;
        if (writeData(req.app.locals.superheroes))
            res.status(201).json(updatedHero);
        else {
            res.status(500).end();
            req.app.locals.superheroes = null;
        }
    }
    else {
        res.status(400);
        if (heroIndex === -1)
            res.send('Invalid ID');
        else
            res.send('Invalid request format');
    }
}

const updateHero = (req, res) => {
    const id = parseInt(req.params.id);
    const heroIndex = req.app.locals.superheroes.findIndex(hero => hero.id === id);
    const newFields = getValidFields(req.body);
    if (newFields.length && heroIndex !== -1) {
        // this is a pointer, so mutating updatedHero mutates the actual object in app.locals
        const updatedHero = req.app.locals.superheroes[heroIndex];
        newFields.forEach(field => updatedHero[field] = req.body[field]);
        if (writeData(req.app.locals.superheroes))
            res.status(201).json(updatedHero);
        else {
            res.status(500).end();
            req.app.locals.superheroes = null;
        }
    }
    else {
        res.status(400);
        if (heroIndex === -1)
            res.send('Invalid ID');
        else
            res.send('Invalid request format');
    }
}

const postHero = (req, res) => {
    if (checkAll(req.body)) {
        const newHero = {
            id: req.app.locals.superheroes[req.app.locals.superheroes.length - 1].id + 1,
            name: req.body.name,
            publisher: req.body.publisher,
            alter_ego: req.body.alter_ego,
            first_appearance: req.body.first_appearance,
            image: req.body.image,
            characters: req.body.characters
        };
        req.app.locals.superheroes.push(newHero);
        if (writeData(req.app.locals.superheroes))
            res.status(201).json(newHero);
        else {
            res.status(500).end();
            req.app.locals.superheroes = null;
        }
    }
    else
        res.status(400).send('Invalid request format');
}

const deleteHero = (req, res) => {
    const id = parseInt(req.params.id);
    const oldLength = req.app.locals.superheroes.length;
    req.app.locals.superheroes = req.app.locals.superheroes.filter(hero => hero.id !== id);
    // only write if something was deleted
    if (req.app.locals.superheroes.length !== oldLength) {
        if (!writeData(req.app.locals.superheroes)) {
            req.app.locals.superheroes = null;
            return res.status(500).end();
        }
    }
    res.status(204).end();
}

module.exports = { getAll, getHero, replaceHero, updateHero, postHero, deleteHero };