/**
  * Write a stack using your preferred instantiation pattern. Once you're done,
  * implement a queue using two stacks.
  */

 /**
   * Stack Class
   */
   var Stack = function() {
    this.storage=[];
  };

    // add an item to the top of the stack
    Stack.prototype.push = function(value){
      this.storage.push(value);
    };

   // remove an item from the top of the stack
   Stack.prototype.pop = function(){
    return this.storage.pop();
  };

   // return the number of items in the stack
   Stack.prototype.size = function(){
    return this.storage.length;
  };

 /**
   * Queue Class
   */
   var Queue = function() {
   // Use two `stack` instances to implement your `queue` Class
     this.inbox = new Stack();
     this.outbox = new Stack();
  };

   // called to add an item to the `queue`
  Queue.prototype.enqueue = function(value){
    this.inbox.push(value);
  };

   // called to remove an item from the `queue`
  Queue.prototype.dequeue = function(){
    var inSize, outSize, result;
    //storing size to loop through and prevent changing in size to affect the loop
    inSize=this.size();
    //loop through all elements exept the last one which is the first element we want to dequeue
    //push it to outbox stack to store it temporary
    for(var i=0; i<inSize-1; i++){
      this.outbox.push(this.inbox.pop());
    }
    //storing the result of the first elemnt
    result= this.inbox.pop();
    //storing size to loop through and prevent changing in size to affect the loop
    outSize= this.outbox.size();
    //push it back to inbox stack so its in the right order as it was
    for(var i=0; i<outSize; i++){
      this.inbox.push(this.outbox.pop());
    }
    return result;
  };

   // should return the number of items in the queue
   Queue.prototype.size = function(){
    return this.inbox.size();
  };
