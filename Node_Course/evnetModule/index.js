const logEvent = require('./logEvent');

const EventEmitter = require('events');

class MyEmitter extends EventEmitter { };


//iniatlize object
const myEmitter = new MyEmitter();

myEmitter.on('log', (msg) => {
    logEvent(msg);
})

setTimeout(() => {
    myEmitter.emit('log', 'log event emitted!');
}, 2000);