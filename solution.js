const { nums, words } = require( "./data/data.js" );

class Node
{
  constructor(data, next) {
    this.data = data
    this.next = null
    
  }
  
}

class LinkedList
{
  constructor ( head = null )
  {
    this.head = head;
  }

  size ()
  {
    let count = 0;
    let node = this.head;
    
    while ( node )
    {
      count++;
      node = node.next;
    }
    return count;
  }
}

let previousNode = new Node( 11 );
let numList = new LinkedList( previousNode );

for (let i = 0; i < nums.length; i++) {
  let currentNode = new Node( nums[ i ] );
  previousNode.next = currentNode;
  previousNode = currentNode
}

console.log(numList.size());

module.exports = {
  Node,
  LinkedList,
};
