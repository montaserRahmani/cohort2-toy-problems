/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4'
// list.tail.value;   //yields '5';




var LinkedList = function(){
  // i filled it :P
  //initially set to null
  this.head = null;
  this.tail = null;
};

//this function for making objects with next object reference
LinkedList.prototype.makeNode = function(value){
  return {value:value, next:null};
}

LinkedList.prototype.addToTail = function(value){
  //checking the tail if its null to put the head same as the tail
  if(this.tail === null){
    this.head=this.makeNode(value);
    this.tail=this.head;
  } else {
    //else make a new node and assign it to the tail then make the old tail reference to the new tail
    this.tail.next=this.makeNode(value);
    this.tail=this.tail.next;
  }
}

LinkedList.prototype.removeHead = function(){
  //just to store the value to return it
  var removedValue = '';
  if(this.head !== null){
    //if the head is not null and next node is not null remove reference
    if(this.head.next !== null){
      removedValue = this.head;
      this.head=this.head.next;
    } else {
      //if its the only node then set everything to initial state
      this.tail=null;
      this.head=null
    }
    return removedValue.value + " Removed!";
  } else {
    return "Nothing there! Focus!"
  }
}

LinkedList.prototype.contains = function(value){
  //set the head as the stating point
  var node = this.head;
  while(node.next !== null){
    if(node.value === value){
      return true;
    }
      node = node.next;
  }
  //just to include the tail, becaue in the loop the last node doesnt have next refernce
  if(this.tail.value === value){
    return true;
  }
  return false;
}
