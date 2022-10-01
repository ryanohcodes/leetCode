// 572. Subtree of Another Tree
// The runtime of the solution is O(n) because we are at worst-case, visiting every node. Tree traversal is O(n)

var isSubtree = function(root, subRoot) {
    if(!root || !subRoot) return false
    
    return isSameTree(root,subRoot) || isSubtree(root.left,subRoot) || isSubtree(root.right,subRoot) 
    
};

function isSameTree(root,subRoot){
    if(!root && !subRoot) return true
    if(!root || !subRoot) return false
    if(root.val !== subRoot.val) return false 
    
    return isSameTree(root.left,subRoot.left) && isSameTree(root.right,subRoot.right)
}