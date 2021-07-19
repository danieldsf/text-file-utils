import fs from 'fs'
import { createObjectCsvWriter } from 'csv-writer'

export function writeJsonSync(path: string, array: Array<string> = []) : boolean {
    fs.writeFileSync(path, JSON.stringify(array, null, 4))
    return true
}

export function writeTextSync(path: string, array: Array<string> = []) : boolean {
    let file = fs.createWriteStream(path)
    file.on('error', function(err) { throw err })
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
        .catch(err => {
            reject(err)
        })
    })
}

