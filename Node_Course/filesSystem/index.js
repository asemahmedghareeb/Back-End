const fsPromises = require('fs').promises;
const path = require('path');


const fileOps=async()=>{
    try{
        const data=await fsPromises.readFile(path.join(__dirname,'starter.txt'),'utf-8');
        console.log(data);


        await fsPromises.unlink(path.join(__dirname, 'starter.txt'))
        
        await fsPromises.writeFile(path.join(__dirname,'promiseWrite.txt'),data)
        console.log("write complete");
        await fsPromises.appendFile(path.join(__dirname,'promiseWrite.txt'),"\n\nNice to meet you" )
        console.log("append complete");

        await fsPromises.rename(path.join(__dirname,'promiseWrite.txt'),path.join(__dirname,'promiseComplete.txt') )
        console.log("rename complete");

        const newData=await fsPromises.readFile(path.join(__dirname,'promiseComplete.txt'),'utf-8');
        console.log(newData);

    }catch(err){
        console.log(err)
    }
}
fileOps();

// to catch any error
process.on('uncaughtException', err => {
    console.error(`threr was an uncaugt error ${err}`);
    process.exit(1)
})