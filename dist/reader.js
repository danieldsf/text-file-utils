"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readCSVHeaders = exports.readTextSync = exports.readCSV = exports.listFilesFromDir = void 0;
const fs_1 = __importDefault(require("fs"));
const csv_parser_1 = __importDefault(require("csv-parser"));
function listFilesFromDir(path) {
    return fs_1.default.readdirSync(path).map(file => {
        return `${path}/${file}`;
    });
}
exports.listFilesFromDir = listFilesFromDir;
function readCSV(path) {
    let results = [];
    return new Promise((resolve, reject) => {
        fs_1.default.createReadStream(path)
            .pipe(csv_parser_1.default())
            .on('data', (data) => results.push(data))
            .on('end', () => {
            resolve(results);
        })
            .on('error', (err) => {
            reject(err);
        });
    });
}
exports.readCSV = readCSV;
function readTextSync(path) {
    return fs_1.default.readFileSync(path).toString().split("\n").filter(x => x.trim()).map(x => x.trim());
}
exports.readTextSync = readTextSync;
function readCSVHeaders(path) {
    return new Promise((resolve, reject) => {
        fs_1.default.createReadStream(path)
            .pipe(csv_parser_1.default())
            .on('headers', (headers) => {
            resolve(headers);
        })
            .on('error', (err) => {
            reject(err);
        });
    });
}
exports.readCSVHeaders = readCSVHeaders;
