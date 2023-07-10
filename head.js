const assertEqual = function(actual , expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
assertEqual("FiltreForte", "FiltreForte");
assertEqual(2, 2);

const head= function (arr){
  var firstItem=arr[0]
  return firstItem

}
console.log(head([1,2,3]))//output 1
assertEqual(head([5,6,7]), 6);//output 🛑 Assertion Failed: 5 !== 6
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");//✅ Assertion Passed: Hello === Hello