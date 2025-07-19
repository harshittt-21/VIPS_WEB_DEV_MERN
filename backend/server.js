// const sum = require("./app")
// console.log(sum(23,43));


const fs = require("fs")

// fs.readFile("app.js",'utf8',(err,data)=>{
//     if(err){
//         console.log(err);
//         return
//     }else{
//         console.log(data);
        
//     }
// })

// fs.writeFile("text.txt","ok yar ",(err)=>{
//     if(err){
//         console.log(err);
//         return
//     } 
//     console.log("file created successfully ");
    
// })

// fs.appendFile("text.txt","changa si",(err)=>{  
//     if(err){
//         console.log(err);
        
//     }else{
//         console.log("data appended");
        
//     }
// })

// fs.unlink("text.txt",(err)=>{
//     if(err){
//         console.log(err);
        
//     }
//     else{
//         console.log("file unlinked");
        
//     }
// })

// fs.mkdir("sample",(err)=>{
//     if(err){                      //remove empty folders only
//         console.log(err);
        
//     }else{
//         console.log("folder created");
        
//     }
// })

// fs.rmdir("sample",(err)=>{
//     if(err){
//         console.log(err);
        
//     }else{
//         console.log("folder deleted");
        
//     }
// })
fs.rmdir("sample",{recursive:true},(err)=>{
    if(err){
        console.log(err);
        
    }
    else{
        console.log("folder deleted");
        
    }
})