//es6 moduales
export default class User{
    constructor(name, age) {
        this.name = name
        this.age=age
        
    }
}

export function printName(user) {
    console.log(`user's name is ${user.age}`)
}

export function printAge(user) {
    console.log(`user is ${user.age} years old`);
}

// export default User
// export {printAge,printName}