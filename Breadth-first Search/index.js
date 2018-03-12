class Node{
  constructor(val){
    this.value = val;
    this.edge = [];
    this.search = false;
    this.parent = null;
  }
  addEdge(neighbor){
    this.edge.push(neighbor);
  }
}

class Graph{
  constructor(){
    this.nodes = [];
    this.graph = {};
  }
  addNode(nNode){
    this.nodes.push(nNode);
  }
  search(start, end){
    for (let i = 0; i < this.nodes.length; i++) {
      if (this.nodes[i].value == start)  var nodeS = this.nodes[i];
      if (this.nodes[i].value == end)  var nodeE = this.nodes[i];
      if(nodeS != null && nodeE != null) break;
    }
    let queue = [];
    nodeS.search = true;
    queue.push(nodeS);

    while (queue.length>0) {
      let current = queue.shift();
      if (current.value == nodeE.value) {
        console.log("Found "+ current.value);
        break;
      }
      let edges = current.edge;
      for (let i = 0; i < edges.length; i++) {
        let neighbor = edges[i];
        if (!neighbor.search) {
          neighbor.search = true;
          neighbor.parent = current;
          queue.push(neighbor);
        }
      }
    }
    let path = [];
    path.push(nodeE);
    let temp = nodeE.parent;
    while (temp != null) {
      path.push(temp);
      temp = temp.parent;
    }
    for (let i = 0; i < path.length; i++) {
      console.log(path[i].value+" ");
    }
  }

}

(function () {
  let graph = new Graph();
  for (let i = 0; i < 20; i++) {
    let node = new Node(i+1);
    graph.addNode(node);
  }
  for (let i = 0; i < graph.nodes.length-1; i++)
    for (let j = i+1; j < graph.nodes.length; j++)
      if(graph.nodes[i].value % graph.nodes[j].value == 0 ||
        graph.nodes[j].value % graph.nodes[i].value == 0){
          graph.nodes[i].addEdge(graph.nodes[j]);
          graph.nodes[j].addEdge(graph.nodes[i]);
        }
  console.log(graph);
  graph.search(3,14);
})();
