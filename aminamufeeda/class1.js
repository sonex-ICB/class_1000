// comments
// output-print
console.log("solomon")
console.log('Yellow world')
console.log('Welcome to script')

// variables
x=2
let y = 10
const z = x + y

// local and gloabl variable

// VARIABLES ARE CASE SENSTIVE AND THEY HAVE TO BE WRITTEN TOGETHER

User = 'solomon'
user=""
full_Name= ""
user1=""

// console = "" // do not use key words

// Data type:Number, string, boolean, array, object undefined 

// number : numeric without quotes
a=10
a=-16
a=0.5
// a= 0098 - error

// string : plain text in quotes: An array of characters
b="solomon"
b='14325'
b=" 12c"

// boolean : a value at can only be true|| false

c=true
d=false
d="false"  // string

let my_file // undefined type
let my_file1= undefined // undefined

// print a varianle from each of the data type above

w=1
r="man"
s=true

console.log(my_file)
 console.log(c)
 console.log(a)
 console.log(b)


//  array: list of items

fruits=[ "apple","watermelon", 'pineapple', 'tomato']
console.log(fruits)
console.log(fruits[3])
console.log(fruits[0])

mx=[0,7,true, undefined, 'welcome', ['text1', 'text 2']]
// len=6,5
console.log(mx [5][1])
courses=[
    [ 'css', 'bs'],
    'script',
    [ 'py', 'cpp'],
    ['React']
]

console.log( courses[3][0])

// class 2


console.log(personalbar.course[1])

person={

    name: {
        first: " Mufeeda",
        title: "miss"
    },

    mobile_number: '08120108744',
    course: [
        {
            name: "front end",
            list: [ "css", "script"]
        }
    ]

}

cart=[  
    {amt:300, name:"Apple",qty:3 },
    {amt:40, name:"Red",qty:1 },
    {amt:100, name:"Blue",qty:11 }
    
]

console.log(person)
console.log(person.course[0].list[1])// script
console.log(person.name.first)// mufeeda
// objects use dot
// array use square bracket


console.log(cart[2].name)// script
console.log(cart[1].name)// script

console.log(person['mobile number'])

// operators:: Arithmethics, comparison, local, ternary
// arithmetic :: +,-/, %, **,


x = 10
y = 4
console.log(x**y)// 10 * 10 * 10 * 10
console.log(x%y)// 10%4 = 2:remainder
console.log(2%6) // 2 remainder

// comparison ::: ==,===, >,<, >=, <= bool
console.log(10>5) // true
console.log(5>=5) // true
console.log(3 == 3)//true
console.log("solomon" == "solomon") //true
console.log("Solomon" == "solomon") //true
console.log("10"=== "10")// true
console.log("10"=== 10)//

//logical OR ||, && AND, !NOT

bal = 100
w = 200
console ( bal>w)// false
pass1 = '000'
pass2 = '1234'
console.log(pass1==pass2)// false


/* 
 AND = *
 OR = +

 AnB = A * B
 true  = 1
 false = 0

 a = 10>5 = true = 1
 b = 4>9 false = 0
 c = 1<6 = true = 1

 anbnc = 1*0*1=0 false
 avbvc = 1 + 0 + 1 = 2 true

 truth values> 0 , "", array with props, true
 false= 0, '', null, undefined

*/


// 1. create an arry of users, [id, full name adress, email]








let users = [
    {
        id: 1,
        fullName: "Mufeeda Rabiu",
        address: "Abuja",
        email: "mufeeda@gmail.com"
    },

    {
        id: 2,
        fullName: "Aisha Bello",
        address: "Lagos",
        email: "aisha@gmail.com"
    },

    {
        id: 3,
        fullName: "Fatima Musa",
        address: "Kano",
        email: "fatima@gmail.com"
    }
];
let bizmarrow = {
    brand: "Bizmarrow",
    numberOfStaff: 4,
    address: "Preferred address",

    coursesOffered: [
        {
            name:"frontEnd", 
            duration: "2 weeks",
            price: 2000
        },

        {
            name: "backEnd", 
            duration: "4 weeks",
            price: 2000
        }
    ],

    websiteName: "bizmarrow.com"
};