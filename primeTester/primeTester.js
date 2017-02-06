/**
 * A prime number is an integer number that cannot be divided by any number 
 * except itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

var primeTester = function(num) {

	//looping through numbers from 2 to num-1, if it can be divided by any number in this range
	//then its not prime, otherwise its prime

    for(var i = 2; i < num; i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return true;
}

var primeNumbers = function(from, to) {

	var result = [];

	//checking limits
	if(from < 1){
		from = 1;
	}
	if(to < 2){
		to = 10;
	}

	//looping through range from begin to end
	for (var i = from; i < to; i++) {
		if(primeTester(i)){
			result.push(i);
		}
	}

	return result;
}

 /* Extra credit: Write a function that generates a list of all prime numbers
  * in a user-specified range (inclusive). If you're not quite sure where to start,
  * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
  * saucy, check out the Sieve of Atkin.)
  */

  