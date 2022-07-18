// 206. Reverse Linked List
// Time Complexity: O(n), Linear - traverse the linked list only once
// Space Complexity: O(1), only 2 pointers regardless of input

var reverseList = function(head) {
    // end of the list pointing to null
    let prev = null 
    let next
    let current = head
    // actually moving through the list
    while(current !== null){
       // making reference to next node on the list
       next = current.next
       // making the head point to the previous node 
       current.next = prev
       //move the prev node pointer to the head
       prev = current
       //move the head to the next node of the list
       current = next
    }
    //return linked list
    return prev
          
};