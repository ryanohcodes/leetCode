
var isAnagram = function(s, t) {
    if (t.length !== s.length) return false;
    const counts = [];
    for (let c of s) {
        let i = c.charCodeAt(0) - 'a'.charCodeAt(0);
        counts[i] = (counts[i] || 0) + 1;
    }
    for (let c of t) {
        let i = c.charCodeAt(0) - 'a'.charCodeAt(0);
        if (!counts[i]) return false;
        counts[i]--;
    }
    return true;
};
var groupAnagrams = function(strs) {
    let final = []
    let answer = []
    if(strs.indexOf("") !== -1){
      let temp = strs.filter(x=> x=== "")
      strs = strs.filter(x=> x !== "")
      final.push(temp)
    }

    
    let seen = []
    for(let i = 0; i < strs.length; i++){
        let testNum = 0
        let testWord = strs[i]
        for(let j = 0; j < testWord.length;j++){
            testNum += testWord.charCodeAt(j)
        }
        seen.push(testNum)
    }
    let counter = 0
    let num = seen[0]
    while(seen.length >0){
        if(seen.indexOf(num) !== -1){
            answer.push(strs[seen.indexOf(num)])
            strs.splice(seen.indexOf(num),1)
            seen.splice(seen.indexOf(num),1)
            counter++
            if(seen.length === 0){
                final.push(answer)
                answer = []
                num = seen[0]
                counter = 0
            }
        }else if(seen.indexOf(num) === -1){
            final.push(answer)
            answer = []
            num = seen[0]
            counter = 0
        }
    }
    return final
};

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
   }
  
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