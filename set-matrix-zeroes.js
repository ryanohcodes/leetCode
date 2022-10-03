// 73. Set Matrix Zeroes

var setZeroes = function(matrix) {
    let zerosPos = []
    for(let i = 0; i < matrix.length;i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(!matrix[i][j]) zerosPos.push([i,j])
        }
    }
    
    for(let i = 0; i < zerosPos.length;i++){
        let [row,col] = zerosPos[i]
        for(let j = 0; j < matrix[0].length; j++){
            matrix[row][j] = 0
        }
        for(let k=0; k < matrix.length; k++){
            matrix[k][col] = 0 
        }
    }
    return matrix
}

var setZeroes2 = function(matrix) {
    let row = matrix.length, col = matrix[0].length, isCol = false
    for(let i = 0; i < row;i++){
        if(!matrix[i][0]) isCol = true
        for(let j = 1; j < col;j++){
            if(!matrix[i][j]){
                matrix[i][0] = 0
                matrix[0][j] = 0
            }
        }
    }
    for(let i = 1; i < row;i++){
        for(let j = 1; j < col;j++){
            if(!matrix[i][0] || !matrix[0][j]) matrix[i][j] = 0
        }
    }
    if(!matrix[0][0]){
        for(let i = 0; i < col;i++){
            matrix[0][i] = 0
        }
    }
    if(isCol){
        for(let i = 0; i < row; i++){
            matrix[i][0] = 0
        }
    }
    return matrix
}