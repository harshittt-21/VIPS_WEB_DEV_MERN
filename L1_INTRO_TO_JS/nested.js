// function firstfun(){
//     var x = 45
//     console.log("hey");

//     function secondfun(){
//         var y = 34;
    
//         function thirdfun(){
//             var z =56
//             var answer1=x+y+z
//             return answer1
//         }
//         return thirdfun()
        
//     }
    
//     return secondfun()
    
// }
// console.log(firstfun())

// set timeout

// for (var i=0 ; i<=5;i++){
//     setTimeout(function(){
//         console.log(i)         //we pass call back function and time in settimeout
//     },2000)                     //will give 6 as output 6 times , why??? ==> var global scope 
// }


// for (let i=0 ; i<=5;i++){
//     setTimeout(function(){
//         console.log(i)         //0 to 5 output this time 
//     },2000)                    //let -  each let creates a scope for their i   
// }

// console.log("start");

// // setTimeout(() => {
// //     console.log("timeout");
//                                     //here first start will print then end and at last timeout after 2 sec because js is a synchronus language
// // }, 2000);

// // console.log("end");

// setInterval(function(){
//     console.log("will run after 5 sec");
    
// },5000)

// to stop interval 
// Start an interval
// let intervalID = setInterval(() => {
//   console.log("This will print every second");
// }, 1000);
//                                                 //output==>will print after every 1 sec and at the 5th sec it will stop
// // Stop the interval after 5 seconds
// setTimeout(() => {
//   clearInterval(intervalID);
//   console.log("Interval stopped");
// }, 5000);


    