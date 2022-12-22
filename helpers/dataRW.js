const fs = require('fs');

//Read and parse JSON file
const loadData = () => {
    const file = process.env.DB_FILE;
    try {
        const rawData = fs.readFileSync(file);
        return JSON.parse(rawData);
    } catch (error) {
        console.error(error);
        return null;
    }
}

//Write JSON file
const writeData = (file, data) => {
    stringData = JSON.stringify(data, null, 4);
    return fs.writeFileSync(file, stringData);
}

module.exports = { loadData, writeData };