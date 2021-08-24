import fs from 'fs'
import { createObjectCsvWriter, createObjectCsvStringifier } from 'csv-writer'

export function writeJsonSync(path: string, array: Array<string> = []) : boolean {
    fs.writeFileSync(path, JSON.stringify(array, null, 4))
    return true
}

export function writeTextSync(path: string, array: Array<string> = []) : boolean {
    let file = fs.createWriteStream(path)
    file.on('error', function(err: any) { throw err })
    array.forEach(value => file.write(`${value}\r\n`))
    file.end()
    return true
}


export function writeCSV(path: string, data: Array<any> = [], headers: Array<string> = []) : Promise<boolean>{
    return new Promise((resolve, reject) => {
        let csvWriter = createObjectCsvWriter({
            path: path,
            header: headers.map(item => {return {id: item, title: item}})
        })
    
        csvWriter.writeRecords(data)
        .then(() => {
            resolve(true)
        })
        .catch((err: any) => {
            reject(err)
        })
    })
}

export function writeCSVStringSync(data: Array<any> = [], headers: Array<string> = []) : string{
    let csvStringifier = createObjectCsvStringifier({
        header: headers.map(item => {return {id: item, title: item}})
    })
    
    return `${csvStringifier.getHeaderString()}${csvStringifier.stringifyRecords(data)}`
}

