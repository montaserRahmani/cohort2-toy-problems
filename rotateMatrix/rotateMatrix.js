/**
 * Write a function that rotates a NxN matrix 90 degrees.
 *
 * A matrix, also called a 2-D array, is simply an array of arrays of values.
 *
 * Example 1x1 matrix:
 *   [ [1] ]
 *
 * Example 2x2 matrix:
 *  [ [1,2],
 *    [3,4] ]
 *
 * Example rotation of a 4x4 matrix:
 *
 * var matrix = [
 *  [1,2,3,4],
 *  [5,6,7,8],
 *  [9,'A','B','C'],
 *  ['D','E','F','G']
 * ];
 *
 * matrix[0][0]; // 1
 * matrix[3][2]; // 'F'
 *
 * var rotatedMatrix = rotateMatrix(matrix); // Rotate 90 degrees clockwise
 * // rotatedMatrix is:
 * [ ['D',9,5,1],
 *  ['E','A',6,2],
 *  ['F','B',7,3],
 *  ['G','C',8,4]
 * ]
 * rotatedMatrix[0][0]; // 'D'
 * rotatedMatrix[3][2]; // 8
 *
 * Extra credit:
 *  - Make your function operate on rectangular matrices (MxN rather than NxN).
 *  - Make your function accept a parameter for the direction of rotation (1 = clockwise, -1 = counterclockwise)
 */


var rotateMatrix =function (matrix) {
  //start with the first row
  //i will start with the first row and then take the first element then swap it with first element
  //of the next column
  //then continue to swap next numbers till its done then swap row and column values or do somthing
  //to make it run on the next column and row
  //then swap again. this will work on the first level and we can make recursion in that
  //this code is just the start of what i thought, its not working
  var row = 0;
  var column = matrix.length -1;
  for (var i = 0; i < 9; i++) {
    //this part is when it hits the end of array length so its done with theses column and row
    if(row === matrix.length-1){
      var temp = row;
      row = column;
      column = row;
    }
    //swapping numbers of columns and rows;
    //this part made me confused of how i can swap the right numbers every times with row and column index
    var temp = matrix[row][row];
    matrix[row][row] = matrix[row][column];
    matrix[row][column] = temp;
    row ++;
    column --;
  }
}