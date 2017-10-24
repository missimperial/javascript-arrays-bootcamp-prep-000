var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles',
]

function addElementToBeginningOfArray(array, element){
  var beginning = [array]
  [element, ...beginning]
  return beginning
}