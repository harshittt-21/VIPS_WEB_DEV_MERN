// const myArr = [0,1,2,3,4,5,true ,"henry"]
// //resizable , mix of data types 

// console.log(myArr[6]); 

// //COPY OPERATION = SHALLOW COPY  [copy whose properties share the same ref pt, mtlb original array me bhi changes honge] opp of this is deep copy

// const myArr2 = new Array(1,2,3,4,6)

// //Array methods

// myArr.push(6) //adds to the array
// myArr.pop()  //last value remove
// myArr.unshift(9) //adds to the start of array
// myArr.shift()  //removes the first element of array

// console.log(myArr.includes(4)); //tells if the arr have the element or not [boolean type]
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(typeof newArr); //converts array to string

// //slice , splice

// console.log("A ", myArr);

// console.log(myArr.slice(1,3))  //slice doesnt include the ending index and also dont affect the array
// console.log("B ", myArr);

// console.log(myArr.splice(1,3));  //splice also changes the original array hence removing the element 1,2,3
// console.log("C ", myArr);


const mv_her = ["THOR", "IRONMAN","WIDOW"]
const dc_her= ["BATMAN","SUPERMAN","FLASH"]

// mv_her.push(dc_her)    array ke andar array
// console.log(mv_her);

// console.log(mv_her[3][1]);
// const her = mv_her.concat(dc_her)
// console.log(her);    //merges properly no array ke andar array

// const all_her = [...mv_her, ...dc_her]
// console.log(all_her);     //better method

const another_arr = [1,2,3,[4,5,[6,7]]]
const new_arr = another_arr.flat(Infinity)
console.log(new_arr);

console.log(Array.isArray("harry"));
console.log(Array.from("harry"));  //cnvt to array
console.log(Array.from({name : "harry"})); //gives empty arrray***

let score1 = 100;
let score2 =200;
let score3= 300

console.log(Array.of(score1,score2,score3));




