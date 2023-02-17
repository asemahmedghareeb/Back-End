import fs from 'fs';
import os from 'os';
import path from 'path';
import { mod, add, multiply, divide, subtract } from './math.js'
//when we use es6 modules we should edit the json file and add type module
//to solve __dirname and __filename problems we add this three lines this problem happens with es6 modules
// import {fileURLToPath} from 'url';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// _______________________________________________________
//common js import
// const {add,subtract,multiply,divide}=require('./math.js')
//________________________________________________________
//path and os modules
// console.log(os.freemem());
// console.log(os.totalmem());
// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());

// console.log(__filename);
// console.log(__dirname);

// console.log(path.dirname(__filename))
// console.log(path.basename(__filename))//=> Server.js
// console.log(path.extname(__filename))//=> js

// let x = path.parse(__filename);
// console.log(x.base);
// console.log(x.dir);
// console.log(x.ext);
// console.log(x.root);
// console.log(x.name);
//______________________________________________________
//top level await allow us to import conditionally
// let a;
// if (1 === 1) {
//     const { add, subtract, divide, multiply, mod } = await import('./math.js')
//     a={add,subtract,divide,multiply,mod}
// }

// const { add,subtract,divide,multiply,mod}=a
// console.log(add(1,2))
// console.log(subtract(4, 2))
// console.log(multiply(4, 2))
// console.log(divide(4, 2))
// console.log(mod(4, 2))