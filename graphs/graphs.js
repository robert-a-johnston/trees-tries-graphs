const vertices = [ 'A', 'B', 'C', 'D', 'E']
const edges = [
  ['A', 'B'],
  ['A', 'D'],
  ['B', 'C'],
  ['C', 'D'],
  ['C', 'E'],
  ['D', 'E']
              ]
// FIND ADJACENT NODES
const findAdjacentNodes = function (node) {
  const listOfAdjacentNodes = []
  // loop through edges array
  for(let edge of edges) {
  // is node in edge?
  const nodeIndex = edge.indexOf(node)
  // if yes push node in pair that
  //   is not node used in search into adjacent nodes array
  if (nodeIndex > -1){
    adjacentNode = nodeIndex === 0 ? edge[1] : edge[0]
    listOfAdjacentNodes.push(adjacentNode)
  }
  // if no then skip to next pair
  }
  // return list of adjacent nodes
  return listOfAdjacentNodes
}

console.log('find adjacent node', findAdjacentNodes('A'))

