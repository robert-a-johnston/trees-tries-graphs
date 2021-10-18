[Graph YouTube Vid](https://www.youtube.com/watch?v=e4RezPkq3UI)  
#GRAPH NOTES
- Graph
  - a data structure with nodes, vertices, edges
- How to represent graph in code
  - determined by time/space complexity (big O)

  - Set up two arrays
    - array 1 vertices = [a,b,c]
    - array 2 edges = [[a,b], [a,c] ..]
    - time complexity to find adjacent nodes or two nodes are connected
      - O(e) e = number of edges
    - Space complexity 
      - O(v + e) v = number of edges

  - Adjacency Matrix
    - Have a 2-d array filled out with 1 and 0 where each array represents a node and each index in the subarray represents a potential connection to another node
      - array 1 vertices = [a,b,c]
      - array 2 matrix = [
        [0,1,0]
        [1,0,1]
        [0,1,0]
       ]
       - Also need object that indicates where vertices are indexed at on matrix array
         - object = {
              a: 1,
              b: 2,
              c: 3
              }
          - this keeps the time complexity down
    - value at adjacencyMatrix[node1][node2]
    - Time complexity to find adjacent nodes -> O(v) v= number of vertices
    - Time complexity to check if two nodes are connected -> O(1)
    - Space complexity -> O(v^2) 

  - Adjacency List
    - for every node, store a list of what nodes it's connected to
    - Time complexity to find adjacent nodes-> O(1)
    - Time complexity to check if two noes are connected -> O(logv) if each adjacent row is sorted
    - Space complexity O(e) e= edge