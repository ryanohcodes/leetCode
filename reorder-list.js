// 143. Reorder List

var reorderList = function(head) {
    if(head.next === null) return head
    if(head.next.next === null) return head
    
    let valCheck = head
    valCheck = valCheck.next
    if(head.val > valCheck.val && head.next.next.next === null) return head
        
    let node = head
    let slowNode = head
    
    while(node){
        if(node.next.next === null){
            let temp = node.next
            temp.next = slowNode.next
            slowNode.next = temp
            node.next = null
        }
        node = node.next
    }
    slowNode = slowNode.next.next
    reorderList(slowNode)
    
    return head
};