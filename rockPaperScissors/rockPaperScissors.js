
/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

function rockPaperScissors(){
	var strings=[['rock', 'paper', 'scissors'],['rock', 'paper', 'scissors'],['rock', 'paper', 'scissors']];
    var result = [], max = 2;
    function crossProduct(arr, i) {
        for (var j=0; j<strings[i].length; j++) {
            var a = arr.slice(0); // clone arr
            a.push(strings[i][j]);
            if (i==max)
                result.push(a);
            else
                crossProduct(a, i+1);
        }
    }
    crossProduct([], 0);
    return result;
}

