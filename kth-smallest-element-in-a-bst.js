// 230. Kth smallest Element in a BST

var kthSmallest = function(node, k, arr=[]) {
    // inorder traversal left, get value, right
    if(node === null) return
    if(arr.length === k) return
    
    kthSmallest(node.left,k,arr)
    arr.push(node.val)
    kthSmallest(node.right,k,arr)
    
    return arr[k-1]
};