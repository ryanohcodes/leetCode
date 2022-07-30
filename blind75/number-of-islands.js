// 200. Number of Islands

var numIslands = function(grid) {
    let stack = []
    let islands = 0
    
    function landFinder(i,j){
        if(i - 1 >= 0){
            if(grid[i-1][j] === "1") stack.push([i-1,j])
        }
        if(i + 1 < grid.length){
            if(grid[i+1][j] === "1") stack.push([i+1,j])
        }
        if(j - 1 >= 0){
            if(grid[i][j-1] === "1") stack.push([i,j-1])
        }
        if(j + 1 < grid[i].length){
            if(grid[i][j+1] === "1") stack.push([i,j+1])
        }
        return
    }
    
    for(let i = 0; i < grid.length;i++){
        for(let j = 0; j < grid[i].length;j++){
            if(grid[i][j] === "2") continue
            else if(grid[i][j] === "1"){
                islands++
                grid[i][j] = "2"
                landFinder(i,j)
                while(stack.length > 0){
                   let temp = stack.pop()
                   if(grid[temp[0]][temp[1]] === "1"){
                       grid[temp[0]][temp[1]] = "2"
                       landFinder(temp[0],temp[1])
                   }
                }
            }
        }
    }
    return islands
};