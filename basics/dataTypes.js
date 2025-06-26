// let name ="harshit"
// let age =18
// let isloggedin= false

// // null => standalone value
// //undefined => value not assigned
// // symbol => unique

// //object

// console.log(typeof "hello")
// console.log(typeof null) //object
// console.log(typeof undefined) //undefined

// let score =33
// console.log(typeof score)
// let cd = "33ab"
// let value= Number(cd)
// console.log(typeof value);
// console.log(value)  //NaN 

// //"33"=33 , "33abs"=nan , true==1 ,false=0

// let islogged= -1


// let bl = Boolean(islogged)
// console.log(bl);


// //1 ==  true , 0== false , ""(empty string)=false , "sas"=true

// let d = 33
// let stringnum= String(d)
// console.log(stringnum); 


//operations
let value=3
let nvalue=-value
console.log(nvalue)

let str1= "hello"
let str2= " harry"

str = str1+str2
console.log(str);
console.log(1+2+"2");
console.log(+true)

console.log("02">1); //true

console.log(null>0); //false same for undefined
console.log(null ==0); //false 
console.log(null>=0); //true convert null to 0

console.log(("2"===2)); //strictly check dont convert datatype

//primitive ==> string null number boolean undefined symbol BigInt
//reference ==> array objects 

const id = Symbol('123')
const id2 =  Symbol('123')
console.log(id == id2);

