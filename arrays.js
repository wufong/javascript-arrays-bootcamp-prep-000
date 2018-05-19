var chocolateBars = [
  "snickers",
  "hundred grand",
  'kitkat',
  'skittles'
  
  ];

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element){
  var myArray = [array]
  myArray[1] = element
  return myArray
}