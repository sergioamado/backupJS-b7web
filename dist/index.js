"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Operacoes_1 = require("./Operacoes");
//import * as Operacoes from './Operacoes';
//import Operacoes from './Operacoes';  //importação por default
//Operacoes.somar;
let n1 = 10;
let n2 = 2;
console.log(`Versão: ${Operacoes_1.versao}`);
console.log(`SOMA: ${(0, Operacoes_1.somar)(n1, n2)} `);
console.log(`SUBTRAÇÃO: ${(0, Operacoes_1.subtrair)(n1, n2)} `);
console.log(`MULTIPLICAÇÃO: ${(0, Operacoes_1.multiplicar)(n1, n2)}`);
