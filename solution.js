const { nums, words } = require( "./data/data.js" );

class Node
{
  constructor(data, next) {
    this.data = data
    this.next = null
  }
  
}

class LinkedList {
	constructor(head = null) {
		this.head = head;
	}

	insert(data) {
		let newNode = new Node(data);
		this.head = newNode;
	}

	size() {
		let count = 0;
		let node = this.head;

		while (node) {
			count++;
			node = node.next;
		}
		return count;
	}

	getFirst() {
		return this.head;
	}

	getLast() {
		let node = this.head;
		if (!this.head) {
			return null;
		}
		while (node.next) {
			node = node.next;
		}
		return node;
	}
  isEmpty()
  {
    let count = 0
    let node = this.head

    while ( node )
    {
      count++
      node = node.next
    }
    if (count !== 0) {
      return false
    }
    return true
  }
	search(key) {
    let currentNode = this.head;
    
		while (currentNode !== null && currentNode.data !== key) {
			currentNode = currentNode.next;
		}
		return currentNode;
	}

	clear() {
		this.head = null;
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
