var recipes = {foo: 'bar'}
function updateObjectWithKeyAndValue(object, key, value) {
  var newObject = {...object, [key]:value}
  return newObject  
  }

var a = updateObjectWithKeyAndValue(recipes, 'pie', 'pecan')
console.log(a)
console.log("hello world!")