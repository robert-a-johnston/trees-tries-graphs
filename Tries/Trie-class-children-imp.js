class Node {
  constructor(){
    this.children = {}
    this.isWordEnd = false
  }
}

class Trie {
  constructor(){
    this.root = new Node()
  }

  insert(word){
    let curr = this.root
    for(let i = 0; i < word.length; i++){
      let charToInsert = word[i]
      if(!(charToInsert in curr.children)){
        curr.children[charToInsert] = new Node() 
      }
      curr = curr.children[charToInsert]
    }
    curr.isWordEnd = true
  }

  contains(word){
    let curr = this.root
    for(let i = 0; i < word.length; i++){
      let charToFind = word[i]
      if(!(charToFind in curr.children)){
        return false
      }
      curr = curr.children[charToFind]
    }
    return curr.isWordEnd
  }

  startsWithPrefix(prefix){
    let curr = this.root
    for(let i = 0; i < prefix.length; i++){
      let charToFind = prefix[i]
      if(!(charToFind in curr.children)){
        return false
      }
      curr = curr.children[charToFind]
    }
    return true
  }

}

const trieTree = new Trie()
trieTree.insert('asdfasdf')
trieTree.insert('cdfasdfas')
trieTree.insert('cdfzsvljsdf')

let answer = trieTree.contains('asdfasdf') 
console.log(answer) // true
answer = trieTree.startsWithPrefix('cdf') 
console.log(answer) // true