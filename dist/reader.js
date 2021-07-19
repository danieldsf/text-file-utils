"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readCSVHeaders = exports.readTextSync = exports.readCSV = exports.listFilesFromDir = void 0;
var fs_1 = __importDefault(require("fs"));
var csv_parser_1 = __importDefault(require("csv-parser"));
function listFilesFromDir(path) {
    return fs_1.default.readdirSync(path).map(function (file) {
        return path + "/" + file;
    });
}
exports.listFilesFromDir = listFilesFromDir;
function readCSV(path) {
    var results = [];
    return new Promise(function (resolve, reject) {
        fs_1.default.createReadStream(path)
            .pipe(csv_parser_1.default())
            .on('data', function (data) { return results.push(data); })
            .on('end', function () {
            resolve(results);
        })
            .on('error', function (err) {
            reject(err);
        });
    });
}
exports.readCSV = readCSV;
function readTextSync(path) {
    return fs_1.default.readFileSync(path).toString().split("\n").filter(function (x) { return x.trim(); }).map(function (x) { return x.trim(); });
}
exports.readTextSync = readTextSync;
function readCSVHeaders(path) {
    return new Promise(function (resolve, reject) {
        fs_1.default.createReadStream(path)
            .pipe(csv_parser_1.default())
            .on('headers', function (headers) {
            resolve(headers);
        })
            .on('error', function (err) {
            reject(err);
        });
    });
}
exports.readCSVHeaders = readCSVHeaders;
