"use strict";
class Tree {
  constructor(){
    this.root = null;
  }
  addNode(value){
    var node = new Node(value);
    if (this.root == null) {
      this.root = node;
    } else {
      this.root.addChild(value);
    }
  }
  traverse(){
    this.root.visit();
  }
  search(sValue){
    if(this.root.nodeSearch(sValue) == null) console.log("Not found "+ sValue);
    else console.log("Found "+sValue);
  }
}

class Node{
  constructor(nValue){
    this.value = nValue;
    this.left = null;
    this.right = null;
  }
  addChild(nValue){
    var nNode = new Node(nValue);
    if(this.value > nValue){
      if(this.left == null) this.left = nNode;
      else this.left.addChild(nValue);
    } else {
      if (this.right == null) this.right = nNode;
      else this.right.addChild(nValue);
    }
  }
  visit(){
    if(this.left != null) this.left.visit();
    console.log(this.value);
    if (this.right != null) this.right.visit();
  }
  nodeSearch(val){
    if(this.value == val) return val;
    else {
      if (this.value > val && this.left != null) {
        this.left.nodeSearch(val);
      }else if (this.value < val && this.right != null) {
        this.right.nodeSearch(val);
      }
    }
    return null;
  }
}

(function () {
  var tree = new Tree();
  tree.addNode(4);
  tree.addNode(6);
  tree.addNode(5);
  tree.addNode(1);
  tree.addNode(3);
  console.log(tree);
  tree.traverse();
  tree.search(4);
  tree.search(10);
})();
