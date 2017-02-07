/**
 *  
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the 
 *  bottom right corner. The robot can move either up, down, left, or right, 
 *  but cannot visit the same spot twice. How many possible unique paths are 
 *  there to the bottom right corner? 
 *  
 *  Be systematic with your approach - make a clear plan before you start writing code.
 *
 *  Extra credit: Make your solution work for a grid of any size.
 *
 */

// A Board class will be useful. You can add extra methods to it.

var makeBoard = function(n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  }
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  }
  return board;
};

//You can create a board size 5 like this:
//var myBoard = makeBoard(5);
//The answer for a board size 5 is 8512 unique paths


//it applies the way n-queens works
var robotPaths = function(myBoard, paths = 0, i = 0, j = 0) {
	var pathCount = 0;
	var len = myBoard[0].length;

	var countPaths = function(i,j){
		//stoping condition
	    if (i === len - 1 && j === len - 1) {
	      pathCount++;
	      //just to exit recursion
	      return;
	    }
	    // if the i or j out of the bounds
	    if (i < 0 || i >= len || j < 0 || j >= len) {
	      return;
	    }
	    //check if this square is visited
	    if (myBoard.hasBeenVisited(i, j)) {
	      return;
	    } else {
	      //toggle square on the board
	      myBoard.togglePiece(i, j);
	      //recursion on every direction
	      countPaths(i, j + 1);
	      countPaths(i + 1, j);
	      countPaths(i, j - 1);
	      countPaths(i - 1, j);
	      //toggle the piece back so it continues for the other recursion loops
	      myBoard.togglePiece(i, j);
	    }
  	};

  	//call the inner function
	countPaths(0, 0);

  return pathCount;
}

      










