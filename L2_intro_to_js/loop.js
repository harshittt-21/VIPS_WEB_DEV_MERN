// // // for
// // for(i=0;i<=100;i++){
// //     console.log(i);   
// // }

// // //while
// // let i =1 
// // while(i<32){
// //     console.log(i);
// //     i++
// // }

// // //do while
// // let a = 1
// // do{
// //     console.log(a);
// //     a++
// // }
// // while(i>20)


// let x=10
// while(x>0){
//     console.log(x);
//     x--;
    
// }
    
// let val = prompt("eneter number: ")

// for (leti=1 ; i<=val;i++ ){
//     if(i%2==0){
//         console.log(`${i} is even`);
        
//     }
// else{                                    //only in consolee
//     console.log(`${i} is odd`);
// }
    
// }

//skip multiple of 3
// for(let x=1;x<=21;x++){
//     if (x%3==0) continue
//     console.log(x);   
// }


//first 5 odd number

let count =0
for(let i=0;i<=100;i++){
    if(i%2==1){
        console.log(i);    
        count ++
    }
    if (count ===5) break
}
