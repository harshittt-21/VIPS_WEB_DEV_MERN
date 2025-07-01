function get(val){
    if(val>40) return "A";
    else if (val >30 ) return "B";
    else if(val>20) return "C";
    else return "D"

}

console.log(get(9));

// rock papper scissor

function rps(user ,computer){
    // if(user===rock&& computer ===paper) return "computer wins";
    if(user===rock&& computer ===scissor) return "user wins";
    // if(user===rock&& computer ===rock) return "tie";
    // if(user===paper&& computer ===paper) return "tie";
    // if(user===paper&& computer ===scissor) return "computer wins";
    if(user===paper&& computer ===rock) return "user wins";
    if(user===rock&& computer ===scissor) return "user wins";
    if (user === computer )   return tie; 
    return "computer wins";

}

rps(rock , scissor )