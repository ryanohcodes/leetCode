var mergeTwoLists = function(list1, list2) {
    let merge = new ListNode()
    let head = merge
    while(list1 && list2){
          if(list1.val > list2.val){
              merge.next = list2
              list2 = list2.next
          }else{
              merge.next = list1
              list1 = list1.next
          }
          merge = merge.next
    }
    
    if(!list1) merge.next = list2
    if(!list2) merge.next = list1
    
    return head.next
};