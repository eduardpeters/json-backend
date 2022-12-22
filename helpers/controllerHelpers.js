const KEYS = ['name', 'publisher', 'alter_ego', 'first_appearance', 'image', 'characters'];

const checkAll = reqBody => {
    const bodyKeys = Object.keys(reqBody)
    // Check all required keys are present and have data
    return (KEYS.every(key => bodyKeys.includes(key) && reqBody[key]));
}

module.exports = { checkAll };