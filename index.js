var recipes = {foo: 'bar'}
function updateObjectWithKeyAndValue(object, key, value) {
  return {...object, [key]:value}
  }

var a = updateObjectWithKeyAndValue(recipes, 'pie', 'pecan')
console.log(a)
console.log (recipes)
console.log("hello world!")