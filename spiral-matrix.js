// 54. Spiral Matrix

var spiralOrder = function(matrix) {
    //false matrix of equal size m x n 
    const row = matrix.length
    const col = matrix[0].length
    const falseMatrix = new Array(row).fill(null).map((element) => new Array(col).fill(false))
    
    const ans = []
    //counter that increments on finishing loop
    let counter = 0
    while(ans.length < (row * col)){
        let i = counter
        let j = counter
        // start at [i][j] and increment j until j < j.length
        while(j < col && falseMatrix[i][j] === false){
            falseMatrix[i][j] = true;
            ans.push(matrix[i][j]);
            j++
        }
        j--
        i++
        //keep j and increment i until i < i.length
        while(i < row && falseMatrix[i][j] === false){
            falseMatrix[i][j] = true;
            ans.push(matrix[i][j]);
            i++
        }
        i--
        j--
        // keep i and decrement j until < 0
        while(j >= 0 && falseMatrix[i][j] === false){
            falseMatrix[i][j] = true;
            ans.push(matrix[i][j]);
            j--
        }
        j++
        i--
        //keep j and decrement i
        while(i >= 0 && falseMatrix[i][j] === false){
            falseMatrix[i][j] = true;
            ans.push(matrix[i][j]);
            i--
        }
        counter++
    }
    return ans
};