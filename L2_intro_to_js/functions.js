// // let fnc= function xy(x){
// //     if(x%2==0){
// //         console.log(`${x} is even`);
        
// //     }
// // }

// // fnc(5)
// // fnc(4)

// //arrow function
// // let xyz = () => {

// // }

// // function add(param1=0,param2=0){
// //     x=param1+param2;
// //     console.log(x);
    
// // }
// // // add(45,62)

// //  function abcd(...val){           //rest , spread 
// //     console.log(val);            //when ... function ke parameter space me lge to rest hota h , array,objects me lge to spread
// // }
// // // abcd(1,2,3,4,5,5,6)    //array deta h

// //return and early return
// // function abcd(){
// //     return 12;
// // }

// // let val = abcd()
// // console.log(val);

// // //early return
// // function checkAge(age) {
// //   if (age < 0) {
// //     return "Invalid age";  // Early return: no point checking further
// //   }

// //   if (age < 18) {
// //     return "Minor";        // Early return if under 18
// //   }

// //   return "Adult";          // This runs only if above conditions failed
// // }

// //first class function=> function ko value ki tarah treat krna

// // let abdc = function z(){

// // }
// // abdc(function(){

// // })

// // //higher order func => function which returns func or accepts a func as parameter
// // function q(v){     //q is a higher order func

// // }
// // q(function(){

// // })

// // function g(){
// //     return function(){

// //     }
// // }
// // g()

// //pure vs impure => func jo bahar ki value na bdle is pure
// function ab(){
//     console.log(hi);
    
// }
// function hui(){
//     a++
// }

// //closure=>ek func jo return kre dusra func aur return hone vala func use krega parent func ka koi var 
// // function sm(){
// //     let a =12;
// //     return function(){
// //         console.log(a+2);
        
// //     }
// // }
// // lexical scoping

// // function adhd(){
// //     let a=13;   //can be used in adhd func
// //     function d(){
// //         let b =12;  //can be used in whole d func
// //         function e(){
// //             let c=11;   //can be used in e func
// //         }
// //     }
// // }

// (function ab(){
//     console.log("heyheyhye");
    

// })();

// function multiply(a,b){   //convert to arrow function
//     return a*b
// }

// let multiply=(a,b)=>{
//     return a*b
// }


// function getscore(...scores){
//     let total = 0
//     scores.forEach((val)=> {
//         total = total +val
//     });
//     return total
// }
// console.log(getscore(10,20,30,40))

// function g(){
//     return;
// }
// console.log(g());  //undefined

function dd(val){
    val()
}
dd(function(){
    console.log("yes");
    
})


function outer(){
    let count = 0 
    return function (){             //closure btw function returning function
        count ++
        console.log(count);
        
    }
}

const counter =outer()    
counter()       //1
counter()       //2

