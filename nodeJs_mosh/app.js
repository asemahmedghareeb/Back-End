let path = require('path');
let os = require('os');
let fs = require('fs');

//global object
// console.log(__dirname);
// console.log(__filename);
//node core modules

// let pathObj = path.parse(__filename);
// console.log(pathObj)

// console.log(os.uptime())
// console.log(os.freemem())
// console.log(os.totalmem())

// let txt = fs.readdirSync('./')
// console.log(txt)

// let x = fs.readdir('./', (err, data) => {
    //     if (err) console.log('error'.err);
    //     else console.log(data);
    // })

let EventEmitter = require('events');
const Logger = require('./logger');
const logger = new Logger();

//event register
logger.on('messageLogged', (arg) => console.log('listener logged', arg));
logger.log('message');





