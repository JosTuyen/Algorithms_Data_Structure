class Node{
  constructor(val){
    this.value = val;
    this.edge = [];
    this.search = false;
    this.parent = null;
  }
}

class Graph{
  constructor(){
    this.nodes = [];
    this.graph = {};
  }
}
