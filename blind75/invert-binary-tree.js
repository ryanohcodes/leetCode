// 226. Invert Binary Tree

var invertTree = function(root) {
    if(root === undefined) return undefined
    
    function invert(node){
        if(node === null) return
        
        invert(node.left)
        invert(node.right)
        
        let temp = node.left
        node.left = node.right
        node.right = temp
        return
    }
    
    invert(root)
    return root
};