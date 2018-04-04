var recipes = {foo: 'bar'}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]:value})
  }

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, {[key]:value})
  }
  
function deleteFromObjectByKey(object, key) {
  return delete object[key]
  }
  
console.log(deleteFromObjectByKey(recipes, 'foo'))
console.log (recipes)
