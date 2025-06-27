
for (var a=0;a<=5;a++){
    function close(i){
        setTimeout(function(){               //what that function did is it changes the output 6 which happens when you use only var to 0 to 5 because it stores 0 to 5 in diff blocks
            console.log(i);
                  
        },2000)
    }
    close(a)
}

//advatages of closure
// can not change any thing from outside
// data hiding [encapsulation]

//disadvantages
// overconsumption of spaces because till program ends it holds the space in block i.e closure doesnt die until unless program dies 
// no garbage collection

