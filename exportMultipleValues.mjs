let myArray = ["camel", 265, true, "5.6"];
let bulb = {
  watts: 10,
  type: "LED",
};
let multiplyByFour = function (a) {
  let result = a * 4;
  return result;
};

/*console.log(myArray);
console.log(bulb);
console.log(multiplyByFour(4));
export myArray
export bulb 
export multiplyByFour*/
export { myArray, bulb, multiplyByFour };
