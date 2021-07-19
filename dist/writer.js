"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeCSV = exports.writeTextSync = exports.writeJsonSync = void 0;
var fs_1 = __importDefault(require("fs"));
var csv_writer_1 = require("csv-writer");
function writeJsonSync(path, array) {
    if (array === void 0) { array = []; }
    fs_1.default.writeFileSync(path, JSON.stringify(array, null, 4));
    return true;
}
exports.writeJsonSync = writeJsonSync;
function writeTextSync(path, array) {
    if (array === void 0) { array = []; }
    var file = fs_1.default.createWriteStream(path);
    file.on('error', function (err) { throw err; });
    array.forEach(function (value) { return file.write(value + "\r\n"); });
    file.end();
    return true;
}
exports.writeTextSync = writeTextSync;
function writeCSV(path, data, headers) {
    if (data === void 0) { data = []; }
    if (headers === void 0) { headers = []; }
    return new Promise(function (resolve, reject) {
        var csvWriter = csv_writer_1.createObjectCsvWriter({
            path: path,
            header: headers.map(function (item) { return { id: item, title: item }; })
        });
        csvWriter.writeRecords(data)
            .then(function () {
            resolve(true);
        })
            .catch(function (err) {
            reject(err);
        });
    });
}
exports.writeCSV = writeCSV;
