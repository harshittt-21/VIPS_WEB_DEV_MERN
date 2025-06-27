// // normal function 
// function nameofFunc(){
//     return 1
// }

// // anonymous function
// function(){

// }

// // arrow function
// () =>{

// }

// // function expression
// var myfunc=() =>{

// }

// var myfunc2= function(){
//     console.log("hello")
// }
// myfunc2();

// functionB();
// var functionB = () =>{
//     var x=100                   //nhi chalega functionB var h 
//     console.log("x");
    
// }

// var functionB = () =>{
//     var x=100                   
//     console.log(x);
    
// }

// functionB();

// var functionB = function(){
//     var x=100                   
//     console.log(x);             //here what happened is there is an anonymous function inside a var named functionB which got invoked later
    
// }

// functionB()    

// HW   var fun1 = named fun

// var fun= function xyz(){
//     console.log("hey");
    
// }

// fun();


// *important* First class function/citizen [we pass function as an argument and also we return a function]
// function num(){
//     var x =5;
//     return x
// }
// function square(param1){
   
//     return param1*param1
// }
// console.log(square(num()))

// function sm(){
//     var result1= square(6,6)
//     return result1
// }
// console.log(sm())


function menuDetail(cb){
    console.log("Checking Menu");
    
}

