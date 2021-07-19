import fs from 'fs'
import csv from 'csv-parser'

export function listFilesFromDir(path: string) : Array<string>{
    return fs.readdirSync(path).map(file => {
        return `${path}/${file}`
    })
}

export function readCSV(path: string) : Promise<Array<any>>{
    let results: Array<any> = [];
    return new Promise((resolve, reject) => {
        fs.createReadStream(path)
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            resolve(results)
        })
        .on('error', (err) => {
            reject(err)
        })
    })
}

export function readTextSync(path: string) : Array<any>{
    return fs.readFileSync(path).toString().split("\n").filter(x => x.trim()).map(x => x.trim())
}

export function readCSVHeaders(path: string) : Promise<any>{
    return new Promise((resolve, reject) => {
        fs.createReadStream(path)
        .pipe(csv())
        .on('headers', (headers: any) => {
            resolve(headers)
        })
        .on('error', (err) => {
            reject(err)
        })
    })
}