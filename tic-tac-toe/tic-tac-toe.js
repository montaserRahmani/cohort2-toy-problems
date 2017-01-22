/*
Imagine you are playing a game of tic-tac-toe and you are trying to see if the current
board is solved.
If you never played the game, here is a good simulator: http://playtictactoe.org/
Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty,
1 if it is an X, or 2 if it is an O, like so:
[[0,0,1],
 [0,1,2],
 [2,1,0]]
We want our function to return -1 if the board is not solved yet, 1 if X won, 2 if O won,
or 0 if it's a draw.
You may assume that the board passed in is valid.
Example:
var board = [[0,0,1],
             [0,1,2],
             [2,1,0]];
ticTacToe(board);//should return -1
var solvedBoard = [[0,1,1],
                   [0,1,2],
                   [2,1,2]];
ticTacToe(solvedBoard);//should return 1
*/

//it's not that optimal, but its working :D

function ticTacToe(board){
  //functions to check rows, columns and diagonal values
  var rows = checkRows(board);
  var cols = checkColumns(board);
  var diag = checkDiagonal(board);
  //if any if that functions return 1 then X won
  if(rows === 1 || cols === 1 || diag === 1){
    return 1;
  } else if (rows === 2 || cols === 2 || diag === 2){
  	 //if any if that functions return 2 then X won
    return 2;
  } else if(checkDraw(board)){
  	 //if solution is not found and there is empty spaces then return 0
    return 0;
  } else {
  	//if its not solved and there is  no empty spaces then return 1
    return -1;
  }
};

function checkDraw(arr){
  //count how many zeros in the board
  var countZeros = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      if(arr[i][j] === 0){
        countZeros++;
      }
    }
  }
   return countZeros > 0 ? false : true;
}

function checkRows(arr){
  //checking rows for how many 1's and 2's
  var countX = 0;
  var countO = 0;
  for (var i = 0; i < arr.length; i++) {
    if(countO === 3 || countX === 3){
      break;
    } else {
      countO=0;
      countX=0;
    }
    for (var j = 0; j < arr[i].length; j++) {
      if(arr[i][j] === 1){
        countX++;
      } else if(arr[i][j] === 2){
        countO++;
      }
    }
  }

  if(countX === 3){
    return 1;
  } else if(countO === 3){
    return 2;
  } else {
    return 0;
  }
}

function checkColumns(arr){
   //checking columns for how many 1's and 2's
  var countX = 0;
  var countO = 0;
  for (var i = 0; i < arr.length; i++) {
    if(countO === 3 || countX === 3){
      break;
    } else {
      countO=0;
      countX=0;
    }
    for (var j = 0; j < arr[i].length; j++) {
      if(arr[j][i] === 1){
        countX++;
      } else if(arr[j][i] === 2){
        countO++;
      }
    }
  }

  if(countX === 3){
    return 1;
  } else if(countO === 3){
    return 2;
  } else {
    return 0;
  }
}

function checkDiagonal(arr){
  var countX = 0;
  var countO = 0;
  var j =0;
  //checking major diagonal for how many 1's and 2's
  for (var i = 0; i < arr.length; i++) {
    if(arr[i][j] === 1){
      countX++;
    } else if(arr[i][j] === 2){
      countO++;
    }
    j++;
  }

  //checking minor diagonal for how many 1's and 2's
  if(countX < 3 && countO < 3){
    countX = 0;
    countO = 0;
    j=2;
    for (var i = 0; i < 3; i++) {
      if(arr[i][j] === 1){
        countX++;
      } else if(arr[i][j] === 2){
        countO++;
      }
      j--;
    }
  }

  if(countX === 3){
    return 1;
  } else if(countO === 3){
    return 2;
  } else {
    return 0;
  }
}