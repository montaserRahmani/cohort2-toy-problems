/*
 * Write a function that accepts a 2-dimensional array (array of arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Example:
    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);
    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

var spiralTraversal = function(matrix, result = []){
  //stopping condition because im taking out values from input
  if(matrix.length === 0){
    //result.push(matrix[0][0]);
    return result;
  } //handling the case of 3x3 matrix cause there will be only 1 row and 1 element 
  else if(matrix.length === 1 && matrix[0].length === 1){ 
    result.push(matrix[0][0]);
    return result;
  }

  //taking the first row from the matrix
  result=result.concat(matrix.shift());

  //taking the last element from the other rows
  var temp = [];
  matrix.forEach(function(row){
    temp.push(row.pop());
  })
  result = result.concat(temp);

  //taking the last row from the matrix (without its last element cause we pop'ed it) and reverse it
  result = result.concat(matrix.pop().reverse());

  //taking the first element from the other rows and reverse it (upwards)
  temp = [];
  matrix.forEach(function(row){
    temp.push(row.shift());
  })
  result = result.concat(temp.reverse());

  return spiralTraversal(matrix, result);
};