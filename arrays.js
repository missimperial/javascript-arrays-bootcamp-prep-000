var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray(array, element){
  return[element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element){
  var array = [array]
  array.unshift(element)
  return array
}
