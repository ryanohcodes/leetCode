// 235. Lowest Common Ancestor of a Binary Search Tree

var lowestCommonAncestor = function(root, p, q) {
    // this means the answer is on the right
    if(root.val < p.val && root.val < q.val){
        return lowestCommonAncestor(root.right,p,q)
    }
    // this means the answer is on the left
    else if(root.val > p.val && root.val > q.val){
        return lowestCommonAncestor(root.left,p,q)
    }
    //you are at the answer, bubble it up cause recursion
    return root
};