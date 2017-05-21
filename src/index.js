"use strict"
const fs = require('fs');
const math = require('mathjs');
const _ = require('lodash');
const euclidianDistance = (rose1, rose2) => {
    const soma = math.pow(parseFloat(rose1.split(',')[0]) - parseFloat(rose2.split(',')[0]), 2) +
        math.pow(parseFloat(rose1.split(',')[1]) - parseFloat(rose2.split(',')[1]), 2) +
        math.pow(parseFloat(rose1.split(',')[2]) - parseFloat(rose2.split(',')[2]), 2) +
        math.pow(parseFloat(rose1.split(',')[3]) - parseFloat(rose2.split(',')[3]), 2);
    return math.sqrt(soma);
};
const calcularDiferença = (roses, nova_rose, k) => {
    let contk = 0;
    const tamRoses = roses.length;
    let list_DistRoses = [];
    for (let i = 0; i < tamRoses - 1; i++) {
        let dist = euclidianDistance(roses[i], nova_rose);
        list_DistRoses.push({
            dist: dist,
            index: i
        });
    }
    let count00 = 0;
    let count01 = 0;
    let count02 = 0;
    let dist_roses_ordened = _.orderBy(list_DistRoses, ['dist'], ['asc']);
    for (let g = 0; g < k - 1; g++) {
        let label_temp = parseInt(roses[dist_roses_ordened[g].index].split(',')[4])
        if (label_temp === 0) {
            count00++;
        } else if (label_temp === 1) {
            count01++;
        } else {
            count02++;
        }
    }
    if (count00 >= count01 && count00 >= count02) {
        return 0;
    } else if (count01 >= count00 && count01 >= count02) {
        return 1;
    } else {
        return 2;
    }
}
const treinamento = fs.readFileSync('./files/treinamento.csv', 'utf8').split('\n');
const teste = fs.readFileSync('./files/teste.csv', 'utf8').split('\n');
const rotulo_teste = fs.readFileSync('./files/rotulos-teste.txt', 'utf8').split('\n')
const main = () => {
    const k = 3;
    const tam_treinamento = treinamento.length;
    const tam_teste = teste.length;
    let resultado = []
    let acertos = 0;

    for (let i = 0; i < tam_teste; i++) {
        resultado.push(calcularDiferença(treinamento, teste[i], k));
        if (parseInt(rotulo_teste[i]) === calcularDiferença(treinamento, teste[i], k)) {
            acertos++
        }
        fs.appendFileSync('resultado.txt', '\n' + calcularDiferença(treinamento, teste[i], k));
    }
    console.log('A eficiência foi de: ', ((acertos / tam_teste) * 100), 'somando ', acertos, ' acertos');
    console.log('resultado.txt criado com sucesso');
}

main();