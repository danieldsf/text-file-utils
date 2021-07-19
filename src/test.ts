import { writeTextSync } from "."

const SLACK_URL: any = process.env.SLACK_URL;

async function main(){
    writeTextSync("test.txt", ['a', 'b'])
}

(main())