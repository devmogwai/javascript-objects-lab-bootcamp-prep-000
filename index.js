var recipes = {foo: 'bar'}
function updateObjectWithKeyAndValue(object, key, value) {
  var newObject = object 
  return Object.assign(newObject, {[key]:value})  
  }

var a = updateObjectWithKeyAndValue(recipes, 'pie', 'pecan')
console.log(a)
console.log("hello world!")