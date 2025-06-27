const name ="harshit"
const count = 40

//console.log(name + count);
console.log(`Hello my name is ${name} and my marks are ${count}`);

const gameName = new String('harshit')

console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4) //last index not included

const string2 = gameName.slice(-6,4) //can give -ve values here unlike substring


const string3 = "   hahhu  "
console.log(string3.trim()); //spaces remove
//trimstart and trimend also exist

const url = "https://sm.com/"
url.replace('s','a') 

url.includes('harshit') //true
const string4 = "gmh-fh"
console.log(string4.split('-'));

  