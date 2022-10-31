function transformValue(obj) {

for(key  in obj) {
 
 if('number' ==  typeof obj[key]) {
  	obj[key] = (obj[key]+1) || 1 ;
 } else if ('object' ==  typeof obj[key]) {

  	 transformValue(obj[key])
 }
 else if ('string' ==  typeof obj[key]) {
  	obj[key]= obj[key] + " AI";
 }

};

return obj
}
var obj = {
  'a': 123,
  'b': 'hero',
  'c': [1, 2, 3],
  'd': {
    'e': 3,
    'f': ['abc', 'def']
  }
}
let finalObj = transformValue(obj);
console.log(finalObj)