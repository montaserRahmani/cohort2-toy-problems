/**
  * Implement the `countLeaves` function in this Tree class.
  *
  * A leaf node is any node in the tree that has no children. `countLeaves` should
  * traverse the tree, and return the number of leaf nodes the tree contains.
  *
  * Illustration of a tree with three leaves:
  *
  *       * <- root
  *      / \
  *     *    * <- leaf
  *    / \
  *   *   * <- leaf
  *  /
  * * <- leaf
  *
  * Example usage:
  *   var root = new Tree();
  *   root.countLeaves(); // 1
  *   root.addChild(new Tree());
  *   root.countLeaves(); // still 1
  *   root.addChild(new Tree());
  *   root.children[0].addChild(new Tree());
  *   root.children[0].addChild(new Tree());
  *   root.children[0].children[0].addChild(new Tree());
  *   root.countLeaves(); // 3
  *
  */

/*
 * Basic tree that stores a value.
 */


var Tree = function(value){
  this.value = value;
  this.children = [];
};




Tree.prototype.countLeaves = function () {
  var counter = 0;
  var tree = this;

  // recursion function to check if tree has children and if its children has children
  // and so on..

  var countFunc = function(obj){
    for (var i = 0; i < obj.children.length; i++) {
      countFunc(obj.children[i]);
    }
    if(obj.children.length === 0){
      counter++;
    }
  }

  countFunc(tree);

  return counter;
}

/**
  * You shouldn't need to change anything below here, but feel free to look.
  */

/**
  * add an immediate child
  * (wrap values in Tree nodes if they're not already)
  */
Tree.prototype.addChild = function(child){
  if(child.value){
    this.children.push(child);
  } else {
    this.children.push(new Tree(child));
  }
  return "Child added";
};

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function(child, tree, result = false){

  //initialize this function with this tree object
  tree = tree || this;

  for (var i = 0; i < tree.children.length; i++) {
    if(tree.children[i].value === child.value){
      return true;
    } else {
      //if not found based on value, search every sub children
      result = this.isDescendant(child, tree.children[i], result)
    }
  }
  return result;
};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child){
  for (var i = 0; i < this.children.length; i++) {
    if(this.children[i].value === child.value){
      this.children.splice(i,1);
      return 'deleted';
    }
  }
  return 'child not found';
};