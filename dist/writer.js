"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeCSVStringSync = exports.writeCSV = exports.writeTextSync = exports.writeJsonSync = void 0;
const fs_1 = __importDefault(require("fs"));
const csv_writer_1 = require("csv-writer");
function writeJsonSync(path, array = []) {
    fs_1.default.writeFileSync(path, JSON.stringify(array, null, 4));
    return true;
}
exports.writeJsonSync = writeJsonSync;
function writeTextSync(path, array = []) {
    let file = fs_1.default.createWriteStream(path);
    file.on('error', function (err) { throw err; });
    array.forEach(value => file.write(`${value}\r\n`));
    file.end();
    return true;
}
exports.writeTextSync = writeTextSync;
function writeCSV(path, data = [], headers = []) {
    return new Promise((resolve, reject) => {
        let csvWriter = csv_writer_1.createObjectCsvWriter({
            path: path,
            header: headers.map(item => { return { id: item, title: item }; })
        });
        csvWriter.writeRecords(data)
            .then(() => {
            resolve(true);
        })
            .catch((err) => {
            reject(err);
        });
    });
}
exports.writeCSV = writeCSV;
function writeCSVStringSync(data = [], headers = []) {
    let csvStringifier = csv_writer_1.createObjectCsvStringifier({
        header: headers.map(item => { return { id: item, title: item }; })
    });
    return `${csvStringifier.getHeaderString()}${csvStringifier.stringifyRecords(data)}`;
}
exports.writeCSVStringSync = writeCSVStringSync;
