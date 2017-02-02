/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 *
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/


/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
*/

//Works for arrays of arrays/objects

Array.prototype.isSubsetOf = function (arr) {
	//looping through this array elements
	for(var i = 0; i < this.length; i++){

		//if the element is an array then convert it to JSON and then compare it
		//to elements in the other array
		if( Array.isArray(this[i]) ){

			//a function to compare sub arrays with the current found array
			if( !this.findSubArrays(arr, JSON.stringify(this[i])) ){
				return false;
			}

		} else if( !arr.includes(this[i]) ){

			//if one of the elements is not included at all in the other array return false
			return false;
		}
	}
	return true;
}

Array.prototype.findSubArrays = function(arr, str){
	for (var i = 0; i < arr.length; i++) {
		//if the current element is an array JSONifiy it and then compare it
		//to the coming json array
		if(Array.isArray(arr[i])){
			if( str === JSON.stringify(arr[i])){
				return true;
			}
		}
	}
	return false;
}