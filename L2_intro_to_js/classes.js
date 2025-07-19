class Human{
    age =13;  //public
    #wt= 70 //pvt
    ht = 180

    constructor(newage,newht,newwt){
         this.age=newage
         this.ht=newht
         this.#wt=newwt
    }

    walking(){
        console.log("i am walking ", this.#wt);
        
    }
    running(){
        console.log("I am running");
        
    }
    get fetchwt(){
        console.log(this.#wt);
        
    }
    set modifywt(val){
        this.#wt=val
    }
}

// let obj = new Human(12,223,72);
// console.log(obj.ht);
// obj.fetchwt

// console.log(obj.age);
// // console.log(obj.wt); pvt

// obj.walking()
// obj.modifywt=65
// obj.fetchwt

//getters and setters

//default param

function sayname(myname="user"){
    console.log("my name is ",myname);
    
}
sayname()
function sayname2(myname=["rahul","gupta"]){
    console.log("my name is ",myname);
    
}
sayname2()

function two(val="23"){
    console.log(val);
    
}
two(null) //nul print
two(undefined) //default val print

function gets(){
    return 190
}

function score(marks=gets()){
    console.log(marks);
    
}
score()

//error handling
try{
       console.log("try block starts");
       console.log(x);
       console.log("ends");
       
       
       
}
catch(err){
    console.log("in catch block");
    console.log("error ", err);
    
    
    
}
finally{
    console.log("always runs ");
    
    
} 






