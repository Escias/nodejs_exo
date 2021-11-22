let path = process.argv[2]
const parse = require('csv-parser');
const fs = require('fs');
const file = path.replace(/^.*[\\\/]/, '')

/* read file name */
console.log(file)

/* Verify if it's a csv file */
if (file.includes(".csv")){
    console.log("It's a CSV file")
}else {
    console.log("Not a CSV file")
}
console.debug(file)

fs.createReadStream(file)
    .pipe(parse())
    .on('data', (row) => {
        console.log(row);
    })
    .on('end', () => {
        console.log('CSV file successfully processed');
    });
