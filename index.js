var recipes = {foo: 'bar'}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]:value})
  }

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, {[key]:value})
  }
  
function deleteFromObjectByKey(object, key) {
  var newObj = delete object[key]
  return newObj
  }
  
console.log(deleteFromObjectByKey(recipes, 'foo'))
console.log (recipes)
