// 236. Lowest Common Ancestor of a Binary Tree

 var lowestCommonAncestor = function(root, p, q) {
    //if nothing then come back
    if(!root) return false
    // if this is true, then you are by default the LCA
    if(root.val === q.val || root.val === p.val) return root
    //incase you are LCA
    let left = lowestCommonAncestor(root.left,p,q) 
    let right = lowestCommonAncestor(root.right,p,q)
    //if both left and right, then you are the LCA, if not then
    // the one that is truthy is the LCA 
    return (left && right) ? root : (left || right)
    
};