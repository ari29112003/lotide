


const findKeyByValue=function(key,value){
  const keys= Object.keys(key);
for(var k of keys){
  if(key[k]===value){//Inside the loop, we check if the value of the current key matches the value parameter
    return k
  }
}
}



const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Expanse"));