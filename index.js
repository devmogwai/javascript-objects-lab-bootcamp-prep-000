var recipes = {}
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, key.value) 
  }

var a = updateObjectWithKeyAndValue(recipes, 'pie', 'pecan')
// console.log(a)
console.log("hello world!")