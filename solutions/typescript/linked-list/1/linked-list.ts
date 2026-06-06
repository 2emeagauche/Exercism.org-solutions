
type NodeType<T> = {
  val: T;
  next: NodeType<T> | null;
};

export class LinkedList {

  list: NodeType<number> | null = null

  count(){
    if(this.list === null){
      return 0
    }
    let count = 1
    let node: NodeType<number> = this.list

    while(node.next !== null) {
      count++
      node = node.next
    } 
    return count
  }

  push(element: number){
    if(this.list === null){
      this.list = {val: element, next: null}
      return
    }
    let node: NodeType<number> = this.list
    while(node.next !== null){
      node = node.next
    }
    node.next = {
      val: element,
      next:null
    }
  }

  pop(){
    if(this.list === null){
      throw new Error("Cannot pop on an empty list")
    }
    let popped = 0
    if(this.list.next === null){
      popped = this.list.val
      this.list = null
      return popped
    }
    let node: NodeType<number> = this.list
    while(node.next!.next !== null){
      node = node.next!
    }
    popped = node.next!.val
    node.next = null

    return popped
  }

  shift(){
    if(this.list === null){
      throw new Error("Cannot shift on an empty list")
    }
    let shifted = this.list.val
    if(this.list.next !== null){
      this.list = this.list.next
    } else {
      this.list = null
    }
    return shifted
  }

  unshift(element: number){
    let node: NodeType<number> = {
      val: element,
      next: this.list === null ? null : this.list
    }
    this.list = node
  }

  delete(element: number){
    if(this.list === null){
      throw new Error("The list is an empty object")
    }
    if(this.list.val === element){
      this.list = this.list.next
      return
    }
    let node = this.list
    while(node.next !== null){
      if(node.next!.val === element){
        node.next = node.next!.next
        return
      }
      node = node.next
    }
  }
}
