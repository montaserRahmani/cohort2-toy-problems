/*
Pascal triangle is a triangle made with rows of numbers.
The first row is [1]. 
The second row is [1,1].
In all following rows, each number is the sum of the two directly above it.

For example, the pascal triangle with 4 rows is:

        1
      1   1
    1   2   1
  1   3   3   1

or in array form: [[1],[1,1],[1,2,1],[1,3,3,1]];

Read more about Pascal Triangle here:
http://en.wikipedia.org/wiki/Pascal's_triangle

Also, see the animated GIF file in this folder (open it in Chrome)

The task for this exercise is to write a function that given the number of rows, builds an array of arrays that represents the pascal triangle.

For example:
buildTriangle(3);// should output [[1],[1,1],[1,2,1]];
*/


var buildTriangle = function(numOfRows){
  //initializing result array with the first two rows because its constant
  var result = [[1],[1,1]];
  
  //looping through the next rows
  for(var i = 2; i < numOfRows; i++){
    
    //adding 1 to the begining of new row
    result[i] = [1];

    //looping through the second element to the element before last  of the previous array
    for(var j = 1; j <= i-1; j++){

      result[i].push(result[i-1][j] + result[i-1][j-1]);

    }

    //adding 1 to the end of new row
    result[i].push(1);
    
  }
  return result;
}