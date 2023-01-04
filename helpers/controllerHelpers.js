const KEYS = ['name', 'publisher', 'alter_ego', 'first_appearance', 'image', 'characters'];

const fieldRegex = key => {
    switch (key) {
        case ('image'):
            return (/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/);
        case ('first_appearance'):
            return (/((\w+\s+)+(#[0-9]+)$)/);
        case ('characters'):
            return (/(\w+,?\s?)+(\w)$/);
        default:
            return (/(\w+\s*)+(\w)$/);
    }
}

const checkField = (key, value) => {
    const regex = fieldRegex(key);
    return regex.test(value);
}

// Check all required keys are present and have valid data
const checkAll = reqBody => {
    const bodyKeys = Object.keys(reqBody)
    return (KEYS.every(key => bodyKeys.includes(key) && checkField(key, reqBody[key])));
}

// Create an array with the valid keys provided, return it if data is valid
const getValidFields = reqBody => {
    const bodyKeys = Object.keys(reqBody).filter(key => KEYS.includes(key));
    if (bodyKeys.every(key => checkField(key, reqBody[key])))
        return (bodyKeys);
    return ([]);
}

module.exports = { checkAll, getValidFields };