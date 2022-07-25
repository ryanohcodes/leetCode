// 141. Linked List Cycle
// Three solutions: Store the hash/point, mark each node, use a runner to see if there is overlap

//hash

var hasCycle = function(head) {
    if(head == undefined) return false
    let obj = new Set()
    while(head.next !== null){
        if(obj.has(head)) return true
        obj.add(head) 
        head = head.next
    }
    return false
};

// marked
var hasCycle = function(head) {
    if(head == undefined) return false
    while(head.next !== null){
        if(head.seen) return true
        head.seen = true
        head = head.next
    }
    return false
};

//runner 

var hasCycle = function(head) {
    if(head == undefined) return false
    let slow = head
    let fast = head
    while((slow !== null && fast !== null) && fast.next !== null){
        slow = slow.next
        fast = fast.next.next
        if(slow == fast) return true
    }
    return false
};