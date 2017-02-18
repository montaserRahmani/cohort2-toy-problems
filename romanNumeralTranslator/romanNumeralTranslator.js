
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Example:
 * translateRomanNumeral("XXI") // 21
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Example:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` on invalid input.
 */


var translateRomanNumeral = function(romanNumeral){
  var DIGIT_VALUES = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  //ensure all of chars are in upper case
  var str = romanNumeral.toUpperCase();
  var result = 0;

  for (var i = 0; i < str.length; i++) {

    //checking if input char is in roman numbers
    if(DIGIT_VALUES[str[i]]){

      //checking if current char's value is less than the next value
      //then make substraction operation
      if(DIGIT_VALUES[str[i]] < DIGIT_VALUES[str[i+1]]){

        //substract
        result += (DIGIT_VALUES[str[i+1]] - DIGIT_VALUES[str[i]]);
        //increase i so it skips the next number we already counted
        i++;

      } else {

        //sum the value of it
        result += DIGIT_VALUES[str[i]]; 

      }

    } else {

      return null;
      
    }
  }
  
  return result;
var translateRomanNumeral = function(romanNumeral){
	var DIGIT_VALUES = {
	  I: 1,
	  V: 5,
	  X: 10,
	  L: 50,
	  C: 100,
	  D: 500,
	  M: 1000
	};
}