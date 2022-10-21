var insert = function(intervals, newInterval) {
    let startOfNewInterval = newInterval[0]
    let endOfNewInterval = newInterval[1]
    // insert at this index, remove this many, add this
    let spliceStart 
    let spliceEnd
    let insert = []
    let removal 
    let counter = 0
    for(let i = 0; i < intervals.length;i++){
        if(insert.length > 0) counter++
        // look for starting insertion
        if(startOfNewInterval >= intervals[i][0] && startOfNewInterval <= intervals[i][1]){
            spliceStart = i
            //[3,5] you are 4, become 3
            //[3,5] you are 3, become 3
            //[3,5] you are 5, become 3
            insert[0] = intervals[i][0]
            counter++
        }
        //[8,10] you are 8 or 9 or 10
        
        if(endOfNewInterval >= intervals[i][0] && endOfNewInterval <= intervals[i][1]){
            spliceEnd = i
            insert[1] = intervals[i][1]
            break
        }
        
        // [6,9] you are 5
        if(endOfNewInterval < intervals[i][0]){
            if(insert == false){
                insert = newInterval
                removal = 0
            }
            else{
                insert[1] = endOfNewInterval
                spliceEnd = i
            }
            
            break
        }
        // non-overlap
    }
    if(spliceStart != undefined && spliceEnd != undefined) removal = spliceEnd - spliceStart
    intervals.splice(spliceStart, counter,insert)
    return intervals
};
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



//one data struct
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






























var eraseOverlapIntervals = function(intervals) {
    let counter = 0
    if(intervals.length === 1) return counter
    intervals =intervals.sort((a,b) => a[0]-b[0])
    let i = 0
    let j = 0
    let prev = null
    while(i < intervals.length -1){
        j = i+1
        if(prev){
            if(prev[1] > intervals[j][0] && prev[1] <= intervals[j][1]){
                counter++
            }
            else if(prev) prev = null
        }
        else{
            if(intervals[i][0] === intervals[j][0] && intervals[i][1] <= intervals[j][1]){
                counter++
                prev = intervals[i]
            }
            else if(intervals[i][1] > intervals[j][0] && intervals[i][1] <= intervals[j][1]){
                counter++
                prev = intervals[i]
            }
            else if(intervals[i][1] >= intervals[j][1]){
                counter++
            }
        }
        i++
    }
    return counter
};

var topKFrequent = function(nums, k) {
    let obj = {}
    for(let i = 0; i < nums.length; i++){
        obj[nums[i]] == undefined ? obj[nums[i]] = 1 : obj[nums[i]]++
    }
    let sortedArr = Object.entries(obj).sort((a,b)=>b[1]-a[1])
    let answer = []
    for(let i = 0; i < k;i++){
        answer.push(Number(sortedArr[i][0]))
    }
    return answer
  };

const pacificAtlantic = (matrix) => {
    if (!matrix.length) return [];
    
    let numRows = matrix.length;
    let numCols = matrix[0].length;
    
    //create two adjacency matrices for results of atlantic and pacific dfs
    //(if a node can reach an ocean, it goes in that matrix)
    const pacific = new Array(numRows).fill().map(() => Array(numCols).fill(false))
    const atlantic = new Array(numRows).fill().map(() => Array(numCols).fill(false))
    
    /*KEY POINT: dfs will be run from the ocean inwards, not vice versa
    (from the ocean-adjacent nodes to the highest point(s))*/
    
    //dfs works by marking successfully visited squares in matrix as true
    //remember we're going from ocean inland
    const dfs = (r, c, current, ocean) =>{ //r=row c=column ocean=pacific/atlantic current=the node we're checking
      //base case: return if out of bounds
      if (r < 0 || c < 0 || r >= numRows || c >= numCols) return;
      //base case: return if our current node is larger than the surrounding nodes, because we are only marking node as true if it is larger than the next...remember we are working upwards to the highest point. This is a bit confusing, but look at the inputs: when we run this recursively, below, if N, S, E, or W are less than the current node, we'll return, because they need to be HIGHER to work upwards.
      if (matrix[r][c] < current) return;
      //base case: return if this node already marked (in ocean), thus already visited
      if (ocean[r][c]) return;
      //if we're here it means the conditions have been successfully met and thus we can reach the ocean, so we mark this node true (water can flow here) in that ocean
      ocean[r][c] = true;
      //call dfs recursively on each of the surrounding cells (ie N,S,E,W)
      dfs(r+1, c, matrix[r][c], ocean);
      dfs(r-1, c, matrix[r][c], ocean);
      dfs(r, c+1, matrix[r][c], ocean);
      dfs(r, c-1, matrix[r][c], ocean);
    };
    
    /*the pacfic touches the top and left sides of the matrix (N & E)
    and the atlantic touches the right and bottom sides (W & S)
    thus...*/
    //we run DFS for the top and bottom rows
    for (let col=0; col < numCols; col++){
     dfs(0, col, Number.MIN_SAFE_INTEGER, pacific);
     dfs(numRows-1, col, Number.MIN_SAFE_INTEGER, atlantic);
    }
    //and for the first and last columns
    for (let row = 0; row < numRows; row++){
      dfs(row, 0, Number.MIN_SAFE_INTEGER, pacific)
      dfs(row, numCols-1, Number.MIN_SAFE_INTEGER, atlantic)
    }
  
    //add to result if exists in both pacific and atlantic
    let result = [];
    for (let i=0; i < numRows; i++){
      for (let j=0; j < numCols; j++){
        if (atlantic[i][j] && pacific[i][j]){
          result.push([i, j]);
        }
      }
    }
    return result;
  };

  var pacificAtlantic2 = function(heights) {
    let answer = []
    let pacific = new Array(heights.length).fill().map(()=> new Array(heights[0].length).fill(false))
    let atlantic = new Array(heights.length).fill().map(()=> new Array(heights[0].length).fill(false))
    
    function landChecker(i,j,currentValue,ocean){

        if(i < 0 || j < 0 || i >= heights.length || j >= heights[i].length) return
    
        if(heights[i][j] < currentValue) return
        
        if(ocean[i][j]) return
            
        ocean[i][j] = true
        
        landChecker(i-1,j, heights[i][j], ocean)
        landChecker(i,j-1, heights[i][j], ocean)
        landChecker(i,j+1, heights[i][j], ocean)
        landChecker(i+1,j, heights[i][j], ocean)
        
    }
    
    for(let i = 0; i < 1; i++){
        for(let j = 0; j <heights[i].length;j++){
            landChecker(i,j,-1,pacific)
            landChecker(heights.length-1,j,-1,atlantic)
        }
    }
    for(let i = 0; i < heights.length;i++){
            landChecker(i,0,-1,pacific)
            landChecker(i,heights[0].length,-1,atlantic)
    }
    for(let i = 0; i < pacific.length;i++){
        for(let j = 0; j < pacific[0].length;j++){
            if(pacific[i][j] && atlantic[i][j]) answer.push([i,j])
        }
    }
    return answer
};
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


var characterReplacement = function(s, k) {

    const frequencies = {}
    let highestFrequency = 0
    let longest = 0
    

    let left = 0
    let right = 0
    
    while (right < s.length) {

        const rightCharacter = s.charAt(right)
        frequencies[rightCharacter] = frequencies[rightCharacter] + 1 || 1

        highestFrequency = Math.max(highestFrequency, frequencies[rightCharacter])
        

        while ((right - left + 1) - highestFrequency > k) {
            const leftCharacter = s.charAt(left)
            frequencies[leftCharacter] -= 1
            left++
        }
        

        longest = Math.max(longest, right - left + 1)
        
        right++
    }
    
    return longest
};

var lengthOfLongestSubstring = function(s) {
    if(s==='') return 0
    let i = 0
    let j = 0
    let max = s.length-1
    let arr = []
    let total = 1
    while(i < max && j < max){
        if(arr.indexOf(s[j]) === -1){
            arr.push(s[j])
            if(total < ((j-i) +1)) total = (j-i) + 1
            j++
        }
        else{
            arr.splice(arr.indexOf(s[i]),1)
            i++
        }
        
    }
    return total
};
var findMin = function(nums) {
    if(nums.length === 1) return nums[0]
    if(nums.length === 2) return nums[0] < nums[1] ? nums[0] : nums[1]
    let left = 0
    let right = nums.length-1
    while(left !== right){
        let middle = Math.floor((left+right)/2)
        if(nums[left] === nums[middle]) return nums[right]
        else if(nums[right] === nums[middle]) return nums[left]
        else if(nums[middle-1] > nums[middle] && nums[middle] < nums[middle+1]){
            return nums[middle]
         }
        else if(nums[middle] > nums[right]){ //smallest is on the right
            left = middle
        }
        else{ //smallest on the left
            right = middle
        }
    }
    
};

var maxArea = function(height) {
    let j = height.length-1
    let i = 0
    let max = 0
    while(i !== j){
        
            let x3 = Math.min(height[i],height[j])
            let y3 = j - i
            let area3 = x3 * y3
            if(max < area3) max = area3
        
        if(height[i] > height[j]) j++
        else i++
    }
    return max
}; 
var groupAnagrams = function(strs) {
    let final = []
    let answer = []
    if(strs.indexOf("") !== -1){
      let temp = strs.filter(x=> x=== "")
      strs = strs.filter(x=> x !== "")
      final.push(temp)
    }
    let seen = []
    for(let i = 0; i < strs.length; i++){
        let word = strs[i]
        answer.push(word)
        let j = i + 1
        let counter = 0
        while(counter < word.length){
            let a = word.charCodeAt(counter) - 'a'.charCodeAt(0)
            seen[a] = (seen[a] || 0) + 1
            counter++
        }
        while(j < strs.length){
            let test = strs[j]
            let count = 0
            while(count < test.length){
                let b = test.charCodeAt(count) - 'a'.charCodeAt(0)
                if(!seen[b]) break
                count++
            }
            if(count === test.length-1){
                answer.push(test) 
                strs.splice(j,1)
                j--;
            }
        }
        final.push(ansewr)
        seen = []
    }
    return final
};


var threeSum = function(nums) {
    nums = nums.sort((a,b) => a-b)
    let ans = []
    let memo = []
    for(let i = 0; i < nums.length-2; i++){
        let start = nums[i]
        for(let j = i+1; j < nums.length -1; j++){
            let second = nums[j]
            let search = (start + second ) * -1
            let combo1 = String(`${start}${second}${search}`)
            if(nums.indexOf(search) === -1 || memo.indexOf(combo1) !== -1) continue
            if (nums.indexOf(search,j+1) !== -1){
                let combo = [start,second,search]
                ans.push(combo)
                memo.push(combo1)
            }  
        }
    }
    return ans
};

var merge = function(intervals) {
    let len = intervals.length;
    intervals = intervals.sort((a,b)=> a[0]-b[0])
    for(let i = 0; i < intervals.length - 1; i++){
            if(intervals[i][0] <= intervals[i+1][0] && 
                    intervals[i][1] >= intervals[i+1][1])
            {
                intervals.splice(i+1,1)
                i--
            }
            else if(intervals[i][1] >= intervals[i+1][0]){
                intervals.splice(i,2,[intervals[i][0],intervals[i+1][1]])
                i--
            }
    }
    return intervals
};



var maxSubArray = function(nums) {
    let sum = nums[0]
    let max = nums[0]
    for(let i = 1; i < nums.length; i++){
        sum += nums[i]
        if(sum > nums[i]){
            if(max < sum)  max = sum
        }
        else{
            sum = nums[i]
            max = sum
        }
    }
    return max
};



var isAnagram = function(s, t) {
    if (t.length !== s.length) return false;
    const counts = [];
    for (let c of s) {
        let i = c.charCodeAt(0) - 'a'.charCodeAt(0);
        counts[i] = (counts[i] || 0) + 1;
    }
    for (let c of t) {
        let i = c.charCodeAt(0) - 'a'.charCodeAt(0);
        if (!counts[i]) return false;
        counts[i]--;
    }
    return true;
};
var groupAnagrams = function(strs) {
    let final = []
    let answer = []
    if(strs.indexOf("") !== -1){
      let temp = strs.filter(x=> x=== "")
      strs = strs.filter(x=> x !== "")
      final.push(temp)
    }

    
    let seen = []
    for(let i = 0; i < strs.length; i++){
        let testNum = 0
        let testWord = strs[i]
        for(let j = 0; j < testWord.length;j++){
            testNum += testWord.charCodeAt(j)
        }
        seen.push(testNum)
    }
    let counter = 0
    let num = seen[0]
    while(seen.length >0){
        if(seen.indexOf(num) !== -1){
            answer.push(strs[seen.indexOf(num)])
            strs.splice(seen.indexOf(num),1)
            seen.splice(seen.indexOf(num),1)
            counter++
            if(seen.length === 0){
                final.push(answer)
                answer = []
                num = seen[0]
                counter = 0
            }
        }else if(seen.indexOf(num) === -1){
            final.push(answer)
            answer = []
            num = seen[0]
            counter = 0
        }
    }
    return final
};

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
   }
  
  var mergeTwoLists = function(list1, list2) {
      let merge = new ListNode()
      let head = merge
      while(list1 && list2){
            if(list1.val > list2.val){
                merge.next = list2
                list2 = list2.next
            }else{
                merge.next = list1
                list1 = list1.next
            }
            merge = merge.next
      }
      
      if(!list1) merge.next = list2
      if(!list2) merge.next = list1
      
      return head.next
  };