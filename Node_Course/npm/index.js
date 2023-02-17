const { format } = require('date-fns')
//import v4 as uuid
const {v4:uuid}=require('uuid')
console.log(format(new Date(), 'yyyy/MM/dd\tHH:mm:ss'), uuid()); 