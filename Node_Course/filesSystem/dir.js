const fs = require('fs');
//making directory
if (!fs.existsSync('./new')) {//checking wheather the file exist or not
    fs.mkdir('./new', err => {
        if (err) throw err;
        console.log('Directory Created');
    })
}

process.on('uncaughtException', err => {
    console.error(`threr was an uncaugt error ${err}`);
    process.exit(1)
})

//deleting directory
if (fs.existsSync('./new')) {//checking wheather the file exist or not
    fs.rmdir('./new', err => {
        if (err) throw err;
        console.log('Directory Removed');
    })
}
