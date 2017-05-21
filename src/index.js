"use strict"
const fs = require('fs');
const math = require('mathjs');

class Rose {
    constructor(sepallength_, sepalwidth_, petallength_, petalwidth_, label_) {
        let sepallength = sepallength_;
        let sepalwidth = sepalwidth_;
        let petallength = petallength_;
        let petalwidth = petalwidth_;
        let label = label_;

        this.getSepallength = () => sepallength;
        this.getSepalwidth = () => sepalwidth;
        this.getPetallength = () => petallength;
        this.getPetalwidth = () => petalwidth;
        this.getLabel = () => label;

        this.setSepallength = (a_) => sepallength = a_;
        this.setSepalwidth = (a_) => sepalwidth = a_;
        this.setPetallength = (a_) => petallength = a_;
        this.setPetalwidth = (a_) => petallength = a_;
        this.setLabel = (a_) => label = a_;


    }
}

const readCsvFile = (path) => fs.readFileSync(path, 'utf8').split('\n');

const euclidianDistance = (rose1, rose2) => {
    const soma = math.pow((rose1.getSepallength() - rose2.getSepallength()), 2) +
        math.pow((rose1.getSepalwidth() - rose2.getSepalwidth()), 2) +
        math.pow((rose1.getPetallength() - rose2.getPetallength()), 2) +
        math.pow((rose1.getPetalwidth() - rose2.getPetalwidth()), 2);
    return math.sqrt(soma);
}