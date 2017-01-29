/*
You are lost in Amman and need directions. You talk to a few strangers
and get these directions: go "NORTH", then "SOUTH", then "WEST", then "EAST", then "EAST".

Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too. 
Going to one direction and coming back the opposite direction is a needless effort.

Your task is to look at the directions and eliminate all unnecessary moves.
In this case, you will just go EAST.

Another example:

plan = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].

You can immediatly see that going "NORTH" and then "SOUTH" is not reasonable, 
better stay where you are. So the task is to find a simplified version of the plan. 

A better plan in this case is simply: 
plan = ["WEST"]

You have to write a function dirReduc which will take an array of strings 
and returns an array of strings with the needless directions removed.

More examples:

dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]) => ["WEST"]
dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"]) => [] //don't need to move at all
*/


var dirReduc = function(directions){
  // var xaxis = ["EAST","WEST"];
  // var yaxis = ["NORTH", "SOUTH"];
  // flag = true;
  // i = 0;
  // while(flag){
  //   if(i === directions.length-1){
  //     flag = false;
  //   } else if(directions[i] === "EAST" && directions[i+1] === "WEST"){
  //       directions.splice(i , 2);
  //   } else if (directions[i] === "WEST" && directions[i+1] === "EAST "){
  //       directions.splice(i , 2);
  //   } else if (directions[i] === "NORTH" && directions[i+1] === "SOUTH"){
  //       directions.splice(i , 2);
  //   }else if (directions[i] === "SOUTH" && directions[i+1] === "NORTH"){
  //       directions.splice(i , 2);
  //   } else if(i < directions.length){
  //     i++;
  //   }
  // }

  var dirCount = {};
  var result = [];
  for (var i = 0; i < directions.length; i++) {
    if(dirCount[directions[i]]){
      dirCount[directions[i]] += 1;
    } else {
      dirCount[directions[i]] = 1;
    }
  }

  if(dirCount["EAST"] - dirCount["WEST"] > 0){
    result.push("EAST");
  } else if (dirCount["WEST"] - dirCount["EAST"] > 0){
    result.push("WEST");
  } else if(dirCount["NORTH"] - dirCount["SOUTH"] > 0){
    result.push("NORTH");
  } else if(dirCount["SOUTH"] - dirCount["NORTH"] > 0){
    result.push("SOUTH");
  }
  return result;
};