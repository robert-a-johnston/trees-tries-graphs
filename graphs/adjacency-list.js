


class Node {
  constructor(value){
  this.value = value
  this.edgesList = []
  }

  connect(node){
    this.edgesList.push(node)
  }
}

class Graph {
  constructor(nodes){
   this.nodes = [...nodes] 
  }

  addTooGraph(node) {
    this.nodes.push(node)
  }

}


const nodeA = new Node ('A')
const nodeB = new Node ('B')
const nodeC = new Node ('C')
const nodeD = new Node ('D')
const nodeE = new Node ('E')

const graph = new Graph([nodeA, nodeB, nodeC, nodeD, nodeE])

console.log('nodeA', nodeA)
console.log('graph', graph)