// function bmi(weight,height){
//     return weight/(height*height)
// }
// console.log(bmi(64,1.8).toFixed(2));


//discount  calc
function discountcalc(discount){
    return function(price){
        console.log(price- price*(discount/100));
         
    }
}
let ten = discountcalc(10)
ten(200)
 
let twenty = discountcalc(20)
twenty(200)

//understand this
function counter(){
    let count=0
    return function(){
        count++
        return count
        
    }
}
let a = counter(); //alag
console.log(a());
console.log(a());
console.log(a());

let b = counter(); //alag
console.log(b());
console.log(b());
console.log(b());
