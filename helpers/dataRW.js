const fs = require('fs');

//Read and parse JSON file
const loadData = (file) => {
    const rawData = fs.readFileSync(file);
    return JSON.parse(rawData);
}

//Write JSON file
const writeData = (file, data) => {
    stringData = JSON.stringify(data, null, 4);
    return fs.writeFileSync(file, stringData);
}

module.exports = { loadData, writeData };