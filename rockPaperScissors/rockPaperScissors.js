
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
<<<<<<< HEAD

function rockPaperScissors(n){
	//cross product method
	var str=['rock', 'paper', 'scissors'];
	n= n || 3; // if n undefined
	var strings=[];
		//generating n arrays to calculate cross prdouct
		for (var i = 0; i < n; i++) {
			strings.push(str);	
		}
	   var result = [], max = n-1;
    function crossProduct(arr, i) {
        for (var j=0; j<n; j++) { // looping on number of players
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


=======
function rockPaperScissors(number){
  var array =[];
  var array2 =["rock","paper","scissors"]
  var bigArray=[];
  array.length=3;
  bigArray.length=number;
  	if (number > 0) {
  		for (var i = 0; i < array.length; i++) {
	    	var x=Math.floor(Math.random() * array2.length)
    		array.push(array2[x])
  		}
  			if (bigArray.indexOf(array) === -1) {
  				bigArray.push(array)
  			}
  	}	
  return bigArray + rockPaperScissors(number-1);
}

>>>>>>> 6568bbd23274e6102779dd33ae75e4ed66b62768
