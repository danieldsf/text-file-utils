# Text File Utils

> A small set of Text file utilities

This is a node.js project that aims provides a simple interface that allow developers to read and write CSV/Text/Json files.

# Installation

`yarn add text-file-utils`

# Example

Read a file in the current directory ("test.csv") and retrieve its headers.

```js
import path from 'path'
import { readCSV, readCSVHeaders } from 'text-file-utils'

var filepath = path.join(__dirname, "test.csv")

(async () => {
  let content = await readCSV(filepath);
  let headers = await readCSVHeaders(filepath);
  // Output the results:
  console.log('Content: ', content)
  console.log('Headers: ', headers)
})()
```


# Methods

## readTextSync

readTextSync is a method that opens a text-file and return a list of non-empty lines as array.

##### Example:

```js
let items = readTextSync(path)
```

Where path is the current path of the file you desire to open.

## readCSV

readCSV is a method that opens a CSV file and returns a list of items as an array of dicts (where the keys are the columns).

##### Example:

```js
let items = await readCSV(path)
```

Where path is the current path of the CSV file you desire to open.

## readCSVHeaders

readCSVHeaders is a method that opens a CSV file and return a list of columns as a array of strings.

##### Example:

```js
let columns = await readCSVHeaders(path)
```

Where path is the current path of the file you desire to open.

## writeCSV

writeCSV is a method that stores a list of dicts into a CSV file and returns true if the operation was performed with no errors.

##### Example:

```js
let wasStored = await writeCSV(path, data, headers?)
```

Where there are multiple params such as:
- path: the path of the file you desire to generate.
- data: the list of items that are going to be inserted in the file.
- headers: the list of columns are going to be used to generate the CSV file.

## writeTextSync

writeTextSync is a method that stores a list of dicts into a CSV file and returns true if the operation was performed with no errors.

##### Example:

```js
let wasStored = writeTextSync(path, data)
```

Where there are multiple params such as:
- path: the path of the file you desire to generate.
- data: the list of items that are going to be inserted in the file.

## writeJsonSync

writeJsonSync is a method that stores a list of dicts into a JSON file and returns true if the operation was performed with no errors.

##### Example:

```js
let wasStored = writeJsonSync(path, data)
```

Where there are multiple params such as:
- path: the path of the file you desire to generate.
- data: the list of items that are going to be inserted in the file.

# Contact

In case of any suggestion, you can open a pull request by yourself or send me an e-mail (daniel.dsfarias@gmail.com).

Thank you!


