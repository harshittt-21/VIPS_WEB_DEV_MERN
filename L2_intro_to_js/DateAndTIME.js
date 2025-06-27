//  let mydate = new Date()
// console.log(mydate.toString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toDateString());

// console.log(typeof mydate);  //object

// let myCreatedDate = new Date(2023 , 0 , 23)  
// console.log(myCreatedDate.toDateString());
let myCreatedDate = new Date("1-14-2023")  
console.log(myCreatedDate.toLocaleString());

let timestamp = Date.now()
console.log(Math.floor(Date.now()/1000)); // to convrt ms to sec 
let newDate =  new Date()
console.log(newDate.getDay());

