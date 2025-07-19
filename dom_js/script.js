// 4 pillars of dom
// selection of Element
// changing HTML
// changing CSS
// event listener
// var a = document.querySelector("h1")
// console.log(a);
// a.innerHTML="changed content"
// a.style.color ="pink"
// a.style.backgroundColor="Black"
// a.addEventListener("click",function(){
//     a.style.color="blue"
//     a.innerHTML="event"
//     a.style.backgroundColor="white"
// })

var bulb= document.querySelector(".bit")
var btn= document.querySelector("#btn1")
// var btn2 = document.querySelector("#btn2")
var flag = 0
btn.addEventListener("click",function(){
    if(flag==0){
        bulb.style.backgroundColor="yellow"
        flag=1
    }
    else {
        bulb.style.backgroundColor="transparent"
        flag = 0

    }
    
})

btn2.addEventListener("click",function(){
    bulb.style.backgroundColor="white"
})

var h = document.querySelectorAll("h1")   
h.forEach(function(element){
    element.innerHTML = "bye"
})