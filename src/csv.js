const fs = require('fs');
const csv = require('csv-parser');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

function writeText(path, array){
    return new Promise((resolve, reject) => {
        let file = fs.createWriteStream(path);
        file.on('error', function(err) { reject(err) });
        array.forEach(value => file.write(`${value}\r\n`));
        file.end();
        resolve(path);
    });
}

function readText(path){
    return new Promise((resolve, reject) => {
        let array = fs.readFileSync(path).toString().split("\n").filter(x => x.trim()).map(x => x.trim());
        resolve(array);
    })
}

function readCSVHeaders(name){
    return new Promise((resolve, reject) => {
        fs.createReadStream(name)
        .pipe(csv())
        .on('headers', (headers) => {
            resolve(headers);
        })
        .on('error', (err) => {
            reject(err);
        });
    })
}

function writeCSV(path, data, headers = []){
    return new Promise((resolve, reject) => {
        const csvWriter = createCsvWriter({
            path: path,
            header: headers.map(item => {return {id: item, title: item}}),
        });
    
        csvWriter.writeRecords(data)
        .then(() => {
            resolve(path);
        })
        .catch(err => {
            reject(err);
        });
    });    
}

function readCSV(name){
    let results = [];
    return new Promise((resolve, reject) => {
        fs.createReadStream(name)
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            resolve(results);
        })
        .on('error', (err) => {
            reject(err)
        });
    });
}

module.exports = {
    readText,
    readCSV,
    readCSVHeaders,
    writeCSV,
    writeText
}