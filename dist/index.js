"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import * as Operacoes from './Operacoes';
const validator_1 = __importDefault(require("validator"));
//import Operacoes from './Operacoes';  //importação por default
//Operacoes.somar;
// let n1: number = 10;
// let n2: number = 2;
// console.log(`Versão: ${versao}`);
// console.log(`SOMA: ${somar(n1,n2)} `);
// console.log(`SUBTRAÇÃO: ${subtrair(n1,n2)} `);
// console.log(`MULTIPLICAÇÃO: ${multiplicar(n1,n2)}`);
console.log(validator_1.default.isEmail('suportecosup@gmail.com'));
let ip = '127.0.0.1';
console.log(validator_1.default.isIP(ip));
