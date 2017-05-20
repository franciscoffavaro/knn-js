"use strict"

const fs = require('fs');
const csv = require('fast-csv');



const readCsv = (path) => {
    let array = []
    fs.createReadStream(path)
        .pipe(csv())
        .on('data', (data) => {
            console.log(data)
        });
}

readCsv('../files/treinamento.csv')