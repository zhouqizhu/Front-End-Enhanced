class DoublyLinkedList {
	// 初始化双重链表
	constructor() {
		this.nodes = [];
	}

	// 返回双重链表元素数
	get size() {
		return this.nodes.length;
	}

	// 返回双重链表中的第一个元素
	get head() {
		return this.size ? this.nodes[0] : null;
	}

	// 返回双重链表中的最后一个元素
	get tail() {
		return this.size ? this.nodes[this.size - 1] : null;
	}

	// 在双重链表的特定索引处插入元素
	insertAt(index, value) {
		const previousNode = this.nodes[index - 1] || null;
		const nextNode = this.nodes[index] || null;
		const node = { value, next: nextNode, previous: previousNode };

		if(previousNode) previousNode.next = node;
		if(nextNode) nextNode.previous = node;
		this.nodes.splice(index, 0, node);
	}

	// 在双重链表开头插入元素
	insertFirst(value) {
    	this.insertAt(0, value);
  	}

  	// 在双重链表末尾插入元素
  	insertLast(value) {
    	this.insertAt(this.size, value);
  	}

  	// 返回指定索引的元素
  	getAt(index) {
    	return this.nodes[index];
  	}
  	// 删除指定索引的元素
  	removeAt(index) {
    	const previousNode = this.nodes[index - 1] || null;
    	const nextNode = this.nodes[index + 1] || null;

    	if (previousNode) previousNode.next = nextNode;
    	if (nextNode) nextNode.previous = previousNode;

    	return this.nodes.splice(index, 1);
  	}

  	// 清空双重链表
  	clear() {
    	this.nodes = [];
  	}

  	// 反转双中链表
  	reverse() {
    	this.nodes = this.nodes.reduce((acc, { value }) => {
      	const nextNode = acc[0] || null;
      	const node = { value, next: nextNode, previous: null };
      	if (nextNode) nextNode.previous = node;
      	return [node, ...acc];
    	}, []);
  	}

  	// 定义生成器
  	*[Symbol.iterator]() {
    	yield* this.nodes;
  	}
}


// 使用
const list = new DoublyLinkedList();

list.insertFirst(1);
list.insertFirst(2);
list.insertFirst(3);
list.insertLast(4);
list.insertAt(3, 5);

list.size;                      // 5
list.head.value;                // 3
list.head.next.value;           // 2
list.tail.value;                // 4
list.tail.previous.value;       // 5
[...list.map(e => e.value)];    // [3, 2, 1, 5, 4]

list.removeAt(1);               // 2
list.getAt(1).value;            // 1
list.head.next.value;           // 1
[...list.map(e => e.value)];    // [3, 1, 5, 4]

list.reverse();
[...list.map(e => e.value)];    // [4, 5, 1, 3]

list.clear();
list.size;                      // 0