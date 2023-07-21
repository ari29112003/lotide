
const findKey= function(obj,value){
  const keys= Object.keys(obj);//trasformar o obj em uma array para poder fazer a compraçao

  for(var k of keys){
    if(value(obj[k])){
      return k;
    }
  } 
}


console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)) // => "noma"*/