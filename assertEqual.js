const sum = function(a, b) {
  return a + b;
};

// TEST CODE
console.assert(sum(1, 2) === 3);
console.assert(sum(1, 20) === 3);




const assertEqual = function(actual , expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
assertEqual("FiltreForte", "FiltreForte");
assertEqual(2, 2);



const name = 'Ariel';
const otherName='guilherme'
console.log(`Hello, how are you ${name} and ${otherName}?`); 
console.log(`what you wanna do today ${otherName}?`)