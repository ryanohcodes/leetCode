// 48. Rotate Image
// Time O(2n)
// Space O(n) because my array is just full of numbers

var rotate = function(matrix) {
    let nums = []
    while(nums.length < (matrix.length * matrix.length)){
        let i = matrix.length-1
        let pos = Math.floor(nums.length/(matrix.length))
    
        while(i >= 0){
            nums.push(matrix[i][pos])
            i--
        }
    }
    let counter = 0
    for(let i = 0; i < matrix.length;i++){
        for(let j = 0; j < matrix[i].length; j++){
            matrix[i][j] = nums[counter]
            counter++
        }
    }
    return matrix
        
};