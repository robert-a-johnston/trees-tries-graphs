const vertices = ['A', 'B', 'C', 'D', 'E']

const vertexIndexes = {
  'A': 0,
  'B': 1,
  'C': 2,
  'D': 3,
  'E': 4
}

const adjacencyMatrix = [
  [0, 1, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 1, 0, 1, 1],
  [1, 0, 1, 0, 1],
  [0, 0, 1, 1, 0]
]

// find adjacent
const findAdjacencies = function(node){
  const adjacentNodes = []
  // get row of in the matrix for the node

  for(let i=0; i <= vertices.length; i++ ){
    nodeVertex = vertexIndexes[node]
    if(adjacencyMatrix[nodeVertex][i] === 1) {
      adjacentNodes.push(vertices[i])
    }
  }

  return adjacentNodes
}

// is connected
const isConnected = function(node1, node2){
  const nodeIndex1 = vertexIndexes[node1]
  const nodeIndex2 = vertexIndexes[node2]
  // !! forces boolean
  return !!adjacencyMatrix[nodeIndex1][nodeIndex2]
}

console.log('find adjacencies ', findAdjacencies('D'))
console.log('are vertices connected', isConnected('A', 'E'))