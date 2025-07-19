const themebtn = document.querySelector("button")
themebtn.addEventListener("click",change)

function change(){
    document.body.classList.toggle('darkmode')
}