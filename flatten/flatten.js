/*
For this exercise you will create a flatten function. 
The function takes in any number of arguments and flattens them into a single array. 
If any of the arguments passed in are an array then the individual objects within the array
will be flattened so that they exist at the same level as the other arguments. 
Any nested arrays, no matter how deep, should be flattened into the single array result.

The following are examples of how this function would be used and what the expected results would be:

flatten(1, [2, 3], 4, 5, [6, [7]]) // returns [1, 2, 3, 4, 5, 6, 7]
flatten('a', ['b', 2], 3, null, [[4], ['c']]) // returns ['a', 'b', 2, 3, null, 4, 'c']

*/

function flatten(){
	//storing indivdual elements in array
	var result = [];
	//taking all arguments so we can pass it to the function
	var args = Array.from(arguments);

	function solution(elem){
		//in every call check if it array (first time i passed the arguments as array)
		if(Array.isArray(elem)){
			//loop throuh array elements and pass every element to the function again
			for (var i = 0; i < elem.length; i++) {
				solution(elem[i]);
			}
		} else {
			//if its not array then push it to the result array
			result.push(elem);
		}
	}
	//calling function with initially the arguments as array
	solution(args);

	//return the final flatten array;
	return result;
}