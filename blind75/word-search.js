// 79. Word Search



var exist = function(board, word) {
    for(let i = 0; i < board.length;i++){
        for(let j = 0; j <board[i].length; j++){
            let count = 0
            if(board[i][j] === word[0]){
                if(search(board,word,count,i,j)) return true
            }
        }
    }
    return false
};

function search(board,word,count,i,j){
        if(i < 0 || i >= board.length) return
        if(j < 0 || j >= board[i].length) return
        if(board[i][j] !== word[count]) return
    
        board[i][j] = null
        let current = count
        count += 1
    
        if(count === word.length) return true
    
       if (search(board,word,count,i+1,j) || search(board,word,count,i-1,j) || search(board,word,count,i,j+1) || search(board,word,count,i,j-1)) return true
        
        board[i][j] = word[current]
    
        return
}

