var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles',
]

function addElementToBeginningOfArray(array, element){
  var beginning = [array]
    beginning.unshift(element)
  return beginning
}

function destructivelyAddElementToBeginningOfArray(array, element){
  var beginning = [array]
  beginning.push(element)
  return beginning
}
