const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
for(var i in actual)
  if (actual[i] === expected[i]) {
    console.log(`✅✅✅ os objetos sao iguais ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 os objetos nao sao iguais ${inspect(actual)} !== ${inspect(expected)}`);
  }
};



//isso aqui acho que nao precisa
const eqObjects = function(object1, object2) {

  const ob1= Object.keys(object1);//we first use Object.keys() to get the keys of both objects. Because we cant compare the 
  //.length of an object, we need to transforme to an array first
  const ob2= Object.keys(object2);
   
      if(ob1.length===ob2.length){// We then compare the lengths of the two arrays of keys.
        return true;
      }else{
        return false;
      }
  };



const names = { nameTwo: "arielle", name: "fernanda", };
const othernames = { name: "guilherme", nameTwo: "arielle"};
assertObjectsEqual(names, othernames);

