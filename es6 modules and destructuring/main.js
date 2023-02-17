import User,{printAge as age,printName as name} from './user.js'


const user = new User('bob', 21);

console.log(user)

age(user)
name(user)