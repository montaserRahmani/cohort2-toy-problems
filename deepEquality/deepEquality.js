/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */


//this works for all types but in 1 level, if you need nested levels i just need to make recursion
// i didnt use the strinfiy way because that seems not cool :P

var deepEquals = function(obj1, obj2){
  for(var key in obj1){
      //checking if that key exists in the second object
      if(obj2[key]){
        //sending these values to the checking function
        if(!checkElements(obj1[key], obj2[key])){
          return false;
        }
      } else {
        return false;
      }
    }
    return true;
  }

  var checkElements= function(value1, value2){
    //checking type
    if(Array.isArray(value1) && Array.isArray(value2)){
      //checking same length
      if(value1.length !== value2.length){
        //checking value if its equal
        for(var i= 0; i <value1.length; i++){
          if(value1[i] !== value2[i]){
            return false;
          }
        }
      } else {
        return false;
      }
      //checking type
    } else if(typeof(value1) === 'object' && typeof(value2) === 'object'){
      //checking same length
      if(Object.keys(value1).length === Object.keys(value2).length){
        //checking value if its equal
        for(var key in value1){
          if(value2[key]){
            if(value1[key] !== value2[key]){
              return false;
            }
          }
        }
      } else {
        return false;
      }
       //checking type
     } else if(typeof(value1) === typeof(value2)){
      if(value1 !== value2){
        return false;
      }
    } else {
      return false;
    }
    return true; // if it passes all tests

  }