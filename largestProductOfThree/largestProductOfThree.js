/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

var largestProductOfThree = function(array) {
  // checking array length to ensure there will be no errors
  if(array.length > 2){

  	//sorting the array to handle both positive and negative numbers
    array.sort(function(a,b){
      return a-b;
    });

    var len = array.length;

    //positive product: we will take the last 3 numbers (biggest numbers)
    //negative product: we will take the first 2 numbers (negative * negative = positive) 
    //and the last number (positive)
    posProduct = array[len-1] * array[len-2] * array[len-3];
    negProduct = array[0] * array[1] * array[len-1];

    //comparing which product is bigger
    return posProduct > negProduct ? posProduct : negProduct;

  } else {
    return "you should enter at least 3 numbers";
  }
};




