var recipes = {foo: 'bar'}
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, foo:"bar") 
  }

var a = updateObjectWithKeyAndValue(recipes, 'pie', 'pecan')
console.log(a)
console.log("hello world!")