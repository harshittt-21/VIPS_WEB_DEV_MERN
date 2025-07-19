const button = document.querySelector(".btn")

button.addEventListener("click",()=>{
    let parent = button.parentElement
    console.log(parent);

    parent.style.height="100px"
    parent.style.width="100px"
    parent.style.backgroundColor ="blue"
    
})

const lisst = document.querySelector(".list")
lisst.addEventListener("click",()=>{
    console.log(lisst.firstElementChild)
    console.log(lisst.lastElementChild);
        
    console.log(lisst.firstChild);

    console.log(lisst.lastChild);

    console.log(lisst.nextSibling); 

    console.log(lisst.previousSibling);

    console.log(lisst.nextElementSibling);



})
const img = document.getElementById("myImg");
img.src = "https://images.unsplash.com/photo-1742268350506-efd0f67ee859?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
console.log(img.src)
var flag = 0
img.addEventListener("mouseover ",()=>{
    if(flag==0){
    img.src = "https://images.unsplash.com/photo-1731276221027-e96a7825b43d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D"
    flag =1
    }
    else{
     img.src = "https://images.unsplash.com/photo-1742268350506-efd0f67ee859?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
     flag=0
    }
})