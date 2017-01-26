/*
 * Given a SORTED array, find the index of an element
 * using a binary search algorithm.
 *
 * Note that you can't just use indexOf. Your function must run in O(log(n)) time.
 *
 * Example usage:
 *
 * 
 * console.log(index); // 4
 */

//note: i though at the begining the answer will be true or false, then i realized it needs index and i ran out of time
//its working but i dont know its not keeping track of the index the right way, and my mind is closed now >_<
//it should be too easy :(

var binarySearch = function (array, target) {
  //we start by taking the the middle value of the array
  var midIndex = Math.floor(array.length/2);
  var mid = array[midIndex];

  var index = 0;
  
  while(true){
    //if the target === mid value then its found
    if(target === mid){
      break;
    } else if(array.length < 2){
      //to check if this is the last element in the array, then break the loop
      index = -1;
      break;
    } else if(target > mid){
      //dividing the problem by 2, and taking the part that is bigger than mid
      //and assign the new mid value from the new created array
      index += midIndex;
      array=array.slice(midIndex, array.length);
      midIndex = Math.floor(array.length/2);
      mid = array[midIndex];
    } else {
      //dividing the problem by 2, and taking the part that is lower than mid
      //and assign the new mid value from the new created array
      if(index > 0)
        index -= midIndex;
      else
        index = midIndex; 
      array = array.slice(0, midIndex);
      midIndex = Math.floor(array.length/2);
      mid = array[midIndex];
    }
  }
  return index;
};

