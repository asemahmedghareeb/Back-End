const fs = require('fs')
//for large reading files
const rs = fs.createReadStream('./loerm.txt', { encoding: 'utf-8' });

const ws = fs.createWriteStream('./new-lorem.txt');
// rs.on('data', (dataChunk)=> {
//     ws.write(dataChunk);
// })

rs.pipe(ws)