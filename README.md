# CSV Utils

> A small set of CSV utilities

This is a node.js project that aims provides a simple interface that allow developers to read and write CSV/Text files.

# Installation

`npm install @danieldsf/csv-utils`

# Example

Read a file in the current directory ("test.csv") and retrieve its headers.

```js
const path = require('path');
const { readCSV, readCSVHeaders } = require('@danieldsf/csv-utils');

const filepath = path.join(__dirname, "test.csv");

(async () => {
  const content = await readCSV(filepath);
  const headers = await readCSVHeaders(filepath);
  // Output the results:
  console.log('Content: ', content);
  console.log('Headers: ', headers);
})();
```


# Methods

## readText

readText is a method that opens a text-file and return a list of non-empty lines as array.

##### Example:

```js
let items = await readText(path);
```

Where path is the current path of the file you desire to open.

## readCSV

readCSV is a method that opens a CSV file and returns a list of items as an array of dicts (where the keys are the columns).

##### Example:

```js
let items = await readCSV(path);
```

Where path is the current path of the CSV file you desire to open.

## readCSVHeaders

readCSVHeaders is a method that opens a CSV file and return a list of columns as a array of strings.

##### Example:

```js
let columns = await readCSVHeaders(path);
```

Where path is the current path of the file you desire to open.

## writeCSV

writeCSV is a method that stores a list of dicts into a CSV file and returns its path after finishing the operation.

##### Example:

```js
let storedCSVPath = await writeCSV(path, data, headers?);
```

Where there are multiple params such as:
- path: the path of the file you desire to generate.
- data: the list of items that are going to be inserted in the file.
- headers: the list of columns are going to be used to generate the CSV file.

## writeText

writeCSV is a method that stores a list of dicts into a CSV file and returns its path after finishing the operation.

##### Example:

```js
let storedTextPath = await writeText(path, data);
```

Where there are multiple params such as:
- path: the path of the file you desire to generate.
- data: the list of items that are going to be inserted in the file.

# Contact

In case of any suggestion, you can open a pull request by yourself or send me an e-mail (daniel.dsfarias@gmail.com).

Thank you!


