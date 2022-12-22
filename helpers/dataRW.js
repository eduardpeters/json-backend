const fs = require('fs');
const FILE = process.env.DB_FILE;

//Read and parse JSON file
const loadData = () => {
    try {
        const rawData = fs.readFileSync(FILE);
        return JSON.parse(rawData);
    } catch (error) {
        console.error(error);
        return null;
    }
}

//Write JSON file
const writeData = (data) => {
    stringData = JSON.stringify(data, null, 4);
    try {
        fs.writeFileSync(FILE, stringData);
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

module.exports = { loadData, writeData };