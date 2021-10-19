  
# GRAPH NOTES  
[Graph YouTube Vid](https://www.youtube.com/watch?v=e4RezPkq3UI)  (~1hour)
- Graph
  - a data structure with nodes, vertices, edges
## How to represent graph in code
  - determined by time/space complexity (big O)

  ### Set up two arrays
    - array 1 vertices = [a,b,c]
    - array 2 edges = [[a,b], [a,c] ..]
    - time complexity to find adjacent nodes or two nodes are connected
      - O(e) e = number of edges
    - Space complexity 
      - O(v + e) v = number of edges

  ### Adjacency Matrix
    - Have a 2-d array filled out with 1 and 0 where each array represents a node and each index in the sub-array represents a potential connection to another node
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

  ### Adjacency List
    - for every node, store a list of what nodes it's connected to
    - Time complexity to find adjacent nodes-> O(1)
    - Time complexity to check if two noes are connected -> O(logv) if each adjacent row is sorted
    - Space complexity O(e) e= edge
  
## DIRECTED VS UNDIRECTED GRAPHS
  - undirected
    - connection between nodes both ways
    - Facebook friends as example
  - directed 
    - connection between nodes have direction a->b but not b->a
    - Web links as example
  - DEGREE OF NODE
    - number of edges connected to node
    - indegree - into node
    - outdegree - out of node

## WEIGHTED VS UNWEIGHTED GRAPHS
  - weighted
    - edges have values corresponding to weights
    - road length between cities as example
  - unweighted 
    - edges have no values

## CYCLIC VS ACYCLIC
  - cyclic
    - at least one cycle
      - cycle is a path from a node back to itself
  - acyclic
    - no cycles
  - Both can be directed or undirected
    - directed acyclic graphs (DAG's)
      - can represent any complex data processing flows

## DENSE VS SPARSE
  - dense
    - close to max number of edges
  - sparse
    - edges number about equal to number of nodes
  
## OTHER GRAPH STUFF
self-loop - node connects to itself
multi-edge graphs - multiple edges between two vertices
simple graph - no self loops or multi edges

simple directed graph
- maximum number of edges = n*(n-1) n= number of nodes
simple undirected graph
- maximum number of edges = n*(n-1)/2

# TRIE NOTES  
[Trie Article](https://learnersbucket.com/tutorials/data-structures/trie-data-structure-in-javascript/)  
- Trie (or digital tree or prefix tree)
  - ordered tree data structure used to store a dynamic set or associative array where the keys are usually strings.
  - nodes of the tree store the entire alphabet and string/words can be reTRIEved by traversing down a branch path
  - has an empty root note with links to other nodes
  - structure is a set of linked nodes connecting back to empty root node
  - usually uses as autocomplete feature of search
### LIST OF OPERATIONS PERFORMED ON TRIE
- insert(word) - adds word
- remove(word) - removes a word
- contains(word) - checks if Trie has the given word
- find(prefix) - returns all the words with a given prefix

### TIME COMPLEXITY
- is dependent on the length of the word being searched for, inserted or deleted(a), and the number of words (n)  
- O(a*n)

- for finding a given prefix is dependent on length of prefix (p)
- O(p+n)

### SPACE COMPLEXITY
- dependent on number of nodes(n) and number of references(k)
- O(n*k)