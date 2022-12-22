const getAll = (req, res) => {
    if (req.app.locals.superheroes)
        res.status(200).json(req.app.locals.superheroes);
    else
        res.status(500).end();
};

const getID = (req, res) => {
    const id = parseInt(req.params.id);
    const singleHero = req.app.locals.superheroes.filter(hero => hero.id === id)[0];
    if (singleHero)
        res.status(200).json(singleHero);
    else
        res.status(404).send('No entry matches the id requested');
}

module.exports = { getAll, getID };