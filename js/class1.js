
//  Comments
// output - Print
console.log("Solomon")
console.log('Yellow world!')
console.log(`Welcome to script`)

// variables :
x = 2
let y = 10
const z = x + y

x = 0
x = 5
y = 6

User = 'Solomon'
user = ""
full_Name = ''
user1 = ""
// console = "" // do not use key words

//  Data type : Number, strin,boolean, array, Object, undefined
// number  : NUmeric text witout quotes 
a = 10
a = -16
a = 0.5
a = 0
// a =  0998 -error

// strin : Plain text in quotes : An array of xters 
b = "Solomon"
b = '14'
b = '12c'

// Boolean  : a value 'at can only be true || false
c = true
d = false
d = 'false' // strin 

let my_file  // undefined
let my_file1 = undefined // undefined


// print a variable from eac' of t'e data type of above 
console.log(my_file)
console.log(c)
console.log(b)
console.log(a)

// array : List of items 
fruits = ["Apple", "Water melon", 'Pineapple', 'Tomato']
console.log(fruits)
console.log(fruits[3])
console.log(fruits[0])
mx = [0, 7, true, undefined, "Welcome", ['text1', 'text2']]
// len = 6, 5
// print text2
console.log(mx[5][1])
console.log(mx[1])

courses = [
    ['CSS', 'B5'],
    'Script',
    ['PY', 'CPP'],
    ['React']
]
// B5
// Script
// React
// CSS
// PY 

console.log(courses[2][0]) //Py
console.log(courses[1]) //Script
console.log(courses[0][1])  //B5
console.log(courses[0][0])   //CSS
console.log(courses[3][0])   //react

// Object : keys ; Key values collection of properties of an item 
person = {
    name: "Solomon",
    mobile_number: "0902193333",
    course: ["CSS", "Script"]
}
console.log(person)
console.log(person.name)
console.log(person.course)
console.log(person.course[1])

person = {
    "name": {
        first: "Solomon",
        title: "Mr "
    },
    "mobile number": "0902193333",
    course: [
        {
            name: "front end",
            list: ["CSS", "Script"]
        }
    ]
}

// 
cart = [
    {amt:300,name:"Apple",qty:3},
    {amt:40,name:"Red",qty:1},
    {amt:100,name:"Blue",qty:11}
]

console.log(person.course[0].list[1]) // script 
console.log(person.name.first) // Solomon

console.log(cart[2].name) // script 
console.log(cart[1].name) // script 

console.log(person['mobile number'])

//  Operators :: Arithmetic, comparison, logical, tenary 
// Arithmetic  +,-/, %,**,


x = 10
y = 4
console.log( x**y) // 10 * 10 * 10 * 10
console.log( x%y) // 10%4 = 2 : remainder
console.log( 2%6) // 2 remainder

// comparison ::: ==, ===, >,<, >=, <=    bool
console.log(10 > 5 ) // true
console.log(5 >= 5 ) // true
console.log(3 == 3 ) // true
console.log("Solomon" == "solomon" ) // false 
console.log("10" === "10" ) // true 
console.log("10" === 10 ) // false 


bal = 100
w = 200
console.log(bal>w) // false

pass1 = '0000'
pass2 = '1234'
console.log(pass1 == pass2) // false
// logical  OR  ||, && AND, ! NOT 
console.log(true && true && false) // false
console.log(true || true || false) // true


/*
    1. create an array of users, [id, full name, address, email]
    2. create a suitable data structure  to store t'e data below

    brand : Bizmarrow
    Number of staff: 4
    address : "prefered address"
    courses offered 
    front end 
            2 weeks course 
            price 2000
    Back end 
            4 weeks course 
            price 2000
    website name bizmarrow.com


*/
 