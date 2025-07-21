// let img = document.querySelector("img")
// img.setAttribute(
//     "src",
//     "https://images.unsplash.com/photo-1734329403517-d463a131f7b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8"
// )
// console.log(img.getAttribute("src"))
// img.removeAttribute("src")

//create element
//prepend or append
let h1= document.createElement("h1")
let h2= document.createElement("h2")
h2.textContent = "ok bhai"
h1.textContent = "hello ji"
// console.log(h1);
// document.body.append(h1)
document.querySelector("div").append(h1)
document.querySelector("div").prepend(h2)

h1.style.color ="blue"
h2.style.backgroundColor="beige"

h1.classList.add("hulu")
h1.classList.toggle("hulu") //toggle - class hogi to hata dega nhi hogi to lga dega 