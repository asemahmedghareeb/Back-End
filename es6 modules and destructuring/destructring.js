arr = [1, 2, 3, 4]

console.log(arr[0])

const [one, two, three, four] = arr;

console.log(one, two, three, four)


//skip item
const [first, , third] = arr
//storing the rest of the array in new  array
const [First, ...rest] = arr
console.log(first, third)

console.log(First, rest)

//object Destructring
const obj = {
    one: 1,
    two2: 2,
    three3: 3
};

const { one1:itm1, two2, three3 } = obj;


console.log(itm1)

// const obj2=[
//     P{
//         child: 'baby'
//     },
// ]


//destructuring in function
const user = { id: 0, username: 'jeff' };

function haveFun({ id, username }) {
    console.log(`hi ${username}`)
}


haveFun(user)


// swapping
let a = 'foo';
let b = 'bar';
[a, b] = [b, a]
console.log(a,b)