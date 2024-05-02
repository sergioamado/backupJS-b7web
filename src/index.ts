import {versao, somar, subtrair, multiplicar} from './Operacoes';
//import * as Operacoes from './Operacoes';

import validator from 'validator';


//import Operacoes from './Operacoes';  //importação por default
//Operacoes.somar;



// let n1: number = 10;
// let n2: number = 2;

// console.log(`Versão: ${versao}`);
// console.log(`SOMA: ${somar(n1,n2)} `);
// console.log(`SUBTRAÇÃO: ${subtrair(n1,n2)} `);
// console.log(`MULTIPLICAÇÃO: ${multiplicar(n1,n2)}`);

console.log( validator.isEmail('suportecosup@gmail.com'));
let ip = '127.0.0.1';
console.log(validator.isIP(ip));