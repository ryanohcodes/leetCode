var setZeroes = function(matrix) {
    for(let i = 0; i < matrix.length;i++){
        for(let j = 0; j < matrix[i].length;j++){
            let current = matrix[i][j]
            if(current === 0) helper(i,j,matrix)
        }
    }
    for(let i = 0; i < matrix.length;i++){
        for(let j = 0; j < matrix[i].length;j++){
            if(matrix[i][j] === "X") matrix[i][j] = 0
        }
    }
    return matrix
};

function helper(i,j,matrix){
    if(i >= matrix.length) return
    if(i < 0) return 
    if(j < 0) return
    if(j >= matrix[0].length) return

    if(matrix[i][j] === 0){
        if(i + 1 < matrix.length) matrix[i+1][j] = 'X'
        if(i - 1 >= 0) matrix[i-1][j] = 'X'
        if(j - 1 <= 0) matrix[i][j-1] = 'X'
        if(j + 1 < matrix[0].length) matrix[i][j+1] = 'X'
    }
    if(matrix[i][j] === "X"){
        
    }
    helper(i+1,j,matrix)
    helper(i-1,j,matrix)
    helper(i,j+1,matrix)
    helper(i,j-1,matrix)
}