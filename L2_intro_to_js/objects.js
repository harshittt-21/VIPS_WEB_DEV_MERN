//singleton 
// Object.create
//object literals
const mysym = Symbol("key1")

const jsuser = {
    name: "Harshit",
    [mysym]:"mkey1",
    "full name": "Harshit Rawat",
    age:20,
    loc: "DELHI"
}
for(let key in obj){  //for in
    console.log(key," ",obj[key]);
    
}

// console.log(jsuser.age)
// console.log(jsuser[age])

// console.log(jsuser.loc);
// console.log(jsuser["loc"]);

// console.log(jsuser.full name); cant access like this
// console.log(jsuser["full name"]);
// console.log(jsuser[mysym]);


// Object.freeze(jsuser)

// jsuser.name = "harry"  //wont change

jsuser.greeting = function(){
    console.log(`Hello user ${this.name}`);
    
}
console.log(jsuser.greeting);  //[Function (anonymous)]

console.log(jsuser.greeting()); 

// const tinderuser= new Object() //singletonobject
const tinderuser={} //non singleton object
tinderuser.id="123abc"
tinderuser.name = "sam"
tinderuser.age = 18 
console.log(tinderuser);
