/*
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
Calculate the sum of the digits of the number 2^1000?
Hint the answer is 1366.
*/

//dumb solution
var powerOfTwo = function(num){
  var sum=0;
  var digits = Math.pow(2,num).toString();
  for(var i=0; i<digits.length; i++){
    if(!isNaN(parseInt(digits[i]))){ //to escape the dot in big numbers
      sum += parseInt(digits[i]); 
    } else if (digits[i] === 'e'){ //to escape the numbers after e
      break;
    }
  }
  return sum;
}


//What i thought is
//i calculated 2^50 in console and it showed all of the digits
//so i thought if i devide the number by 50 if its larger than 50
//then i will sum the digits of 2^50 (num/50) times
//i got 1368 for 2^1000 in this solution and i dont know if its the right way
//the best idea is to take digit by digit as strings everytime and calculate it manually for big numbers



// var powerOfTwo = function(num){
//   var sum=0;
//   var digits;
//   var loop;
//   if(num>50){
//     loop=num/50;
//     digits = Math.pow(2,50).toString()
//   } else {
//     loop=3;
//     digits = Math.pow(2,num).toString()
//   }

//   for(var i=0; i<loop-2; i++){
//     for(var j=0; j<digits.length; j++){ 
//         sum += parseInt(digits[j]); 
//     }
//   }
//   return sum;
// }

